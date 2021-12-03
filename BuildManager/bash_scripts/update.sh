#!/bin/bash
# pull updates first
git pull origin 

cd bash_scripts

./fresh.sh > ../logs.txt
# TODO: check for audit need
./build.sh >> ../logs.txt


