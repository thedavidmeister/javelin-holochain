#!/bin/bash
fswatch ./ui/index.html | xargs -n1 './restart.sh'
