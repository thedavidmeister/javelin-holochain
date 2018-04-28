(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  elem-lib.hoplon
  javelin-holochain.core
  syntax-highlighter.hoplon))

(h/html
 (h/head
   (syntax-highlighter.hoplon/stylesheet))
 (h/body
  (let [a? (j/cell true)]
   (h/with-interval 1000 (swap! a? not))
   (elem-lib.hoplon/elem
    "Read"
    "Cell that calls a zome function once"
    #'javelin-holochain.core/function-cell
    [["hit cljs_zome"
      :zome "cljs_zome"
      :function "foo"]

     ["hit mergeParams in sampleZome, which returns a JSON we parse"
      :zome "sampleZome"
      :function "mergeParams"
      :params {:baz "bing"
               "a" 1}]

     ["hit zome functions a and b alternating"
      :zome "sampleZome"
      :function (j/cell= (if a? "a" "b"))]

     ["hit zomes sampleZome and sampleZomeB alternating"
      :zome (j/cell= (if a? "sampleZome" "sampleZomeB"))
      :function (j/cell= (if a? "a" "zomeBFn"))]]))

  (elem-lib.hoplon/elem
   "Watch"
   "Cell that polls a zome function periodically with the default poll interval"
   #'javelin-holochain.core/watch-function-cell
   [["hit mergeParams in sampleZome, which returns a JSON we parse"
     :zome "sampleZome"
     :function "mergeParams"
     :params {:baz "bing"
              "a" 1}]])))
