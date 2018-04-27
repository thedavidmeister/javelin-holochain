# javelin-holochain
Holochain integration for javelin cells in clojurescript

## Develop back end

### Setup

Mac OS X:

`. setup.sh`

^^ doesn't setup holochain itself

### Serve

Crude, but effective...

`while true; do hcdev --no-nat-upnp web 8001; sleep 2; done;`

Boot writing to the UI folder will kill the server, which will then reboot after
a short sleep.

### Front dev

`boot front-dev`
