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
  (elem-lib.hoplon/elem
    "Read"
    "Cell that polls the DHT"
    #'javelin-holochain.core/function-cell
    [["hit mergeParams in sample zome, which returns a JSON we parse"
      "sampleZome"
      "mergeParams"
      {:baz "bing"
       "a" 1}]])))
