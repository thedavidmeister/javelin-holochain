(ns javelin-holochain.spec
 (:require
  [clojure.spec.alpha :as spec]))

; name of a zome
(spec/def :holochain.zome/zome string?)
; name of a zome fn
(spec/def :holochain.zome/function string?)

; params to a zome fn
(spec/def :holochain.zome/params map?)
; poll interval to a zome
(spec/def :holochain.zome/interval int?)
