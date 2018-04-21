(ns javelin-holochain.core
 (:require
  [javelin.core :as j]
  ajax.core
  clojure.string))

(defn function-cell
 ([zome function] (function-cell zome function []))
 ([zome function args]
  (j/with-let [c (j/cell nil)]
   (j/formula-of
    [zome function args]
    (prn args)
    (ajax.core/POST
     (str "/" (clojure.string/join  "/" ["fn" zome function]))
     {:handler #(reset! c (js->clj (.parse js/JSON %)))
      :params args
      :format :json})))))
