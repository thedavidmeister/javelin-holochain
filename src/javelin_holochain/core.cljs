(ns javelin-holochain.core
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  ajax.core
  javelin-holochain.data
  javelin-holochain.spec
  clojure.string
  [clojure.spec.alpha :as spec]))

(defn function-cell
 [& {:keys [zome function params interval]}]
 {:pre [(spec/valid? :holochain.zome/zome zome)
        (spec/valid? :holochain.zome/function function)
        (spec/valid? (spec/nilable :holochain.zome/params) params)
        (or (spec/valid? (spec/nilable :holochain.zome/interval) interval)
         (prn interval))]}
 (j/with-let [c (j/cell nil)]
  (let [t (j/cell nil)
        tick (j/cell 0)
        next! #(swap! tick inc)]
   (j/formula-of
    [zome function params tick]
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
      :params params
      :format :json})))))

(def watch-function-cell (partial function-cell :interval javelin-holochain.data/interval))
