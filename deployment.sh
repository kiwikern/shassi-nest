#!/usr/bin/env bash

git pull
svc -du ~/service/shassi-nest/

echo 'Waiting 60s for server startup'
sleep 60s
readlog shassi-nest
