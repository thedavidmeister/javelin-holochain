(ns javelin-holochain.data)

; this is the fastest that the DHT itself syncs, so there's no point polling
; more often than this
(def interval 500)
