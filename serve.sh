#!/bin/bash
fswatch ./ui/index.html.js -l 1 | xargs -n1 './restart.sh'
