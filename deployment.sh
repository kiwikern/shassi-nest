#!/usr/bin/env bash

git pull
svc -du ~/service/shassi-nest/
sleep 10s
readlog shassi-nest
