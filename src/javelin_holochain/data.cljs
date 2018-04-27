(ns javelin-holochain.data)

; 500ms is the point at which the DHT starts triggering an exponential backoff
; as DOS protection due to libp2p
(def interval 600)
