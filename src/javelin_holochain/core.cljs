(ns javelin-holochain.core
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  ajax.core
  javelin-holochain.data
  javelin-holochain.spec
  clojure.string
  taoensso.timbre
  [clojure.spec.alpha :as spec]))

(defn function-cell
 [& {:keys [zome function params interval]}]
 (j/with-let [c (j/cell nil)]
  (let [t (j/cell nil)
        tick (j/cell 0)
        next! #(swap! tick inc)]
   (j/formula-of
    [zome function params tick]
    (assert (spec/valid? :holochain.zome/zome zome))
    (assert (spec/valid? :holochain.zome/function function))
    (assert (spec/valid? (spec/nilable :holochain.zome/params) params))
    (.clearTimeout js/window @t)
    (reset! t nil)
    (ajax.core/POST
     (str "/" (clojure.string/join  "/" ["fn" zome function]))
     {:handler
      (fn [r]
       (.clearTimeout js/window @t)
       (when interval
        (reset! t (h/with-timeout interval (next!))))
       (reset! c (js->clj (.parse js/JSON r))))
      :error-handler
      (fn [e]
       (taoensso.timbre/error e))
      :params params
      :format :json})))))

(def watch-function-cell (partial function-cell :interval javelin-holochain.data/interval))
