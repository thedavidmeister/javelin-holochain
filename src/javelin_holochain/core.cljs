(ns javelin-holochain.core
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  ajax.core
  javelin-holochain.data
  clojure.string))

(defn function-cell
 [& {:keys [zome function params interval]}]
 {:pre [zome function]}
 (j/with-let [c (j/cell nil)]
  (let [t (j/cell nil)
        i (j/cell 0)
        next! #(swap! i inc)]
   (j/formula-of
    [zome function params i]
    (prn "foo")
    (.clearTimeout js/window @t)
    (reset! t nil)
    (ajax.core/POST
     (str "/" (clojure.string/join  "/" ["fn" zome function]))
     {:handler
      (fn [r]
       (j/dosync
        (.clearTimeout js/window @t)
        (when interval
         (reset! t (h/with-timeout interval (next!))))
        (reset! c (js->clj (.parse js/JSON r)))))
      :params params
      :format :json})))))

(def watch-function-cell (partial function-cell :interval javelin-holochain.data))
