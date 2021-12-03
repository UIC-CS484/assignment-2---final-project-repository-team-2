#!/bin/bash
cd ../../front
npm run build

# copy the back folder into prod folder on back end.
cp -R prod ../back/

# run storage api
cd ../storage
npm run prod&   

# run server api
cd ../back
npm run prod&

wait
