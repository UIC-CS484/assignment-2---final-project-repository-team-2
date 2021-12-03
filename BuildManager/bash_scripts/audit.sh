#!/bin/bash
cd back
npm audit fix --force

cd ../front
npm audit fix --force

cd ../storage
npm audit fix --force