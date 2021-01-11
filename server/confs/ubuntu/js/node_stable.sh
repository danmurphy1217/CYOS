#! /bin/bash

HOME='/home/ubuntu'
FILE_NAME='node_script.log'

cd $HOME
echo "Updating software" > $FILE_NAME
sudo apt update -y

sudo apt install nodejs -y
sudo apt install npm -y
echo "Installed Node and NPM" >> $FILE_NAME

echo "Node Version: $(nodejs -v)" >> $FILE_NAME
echo "NPM Version: $(npm -v)" >> $FILE_NAME

mkdir project
cd project

mkdir client
mkdir backend

cd client && npm install --save react
cd $HOME

cd project/backend && npm install --save expressjs

cd $HOME
echo "Setup project folders, installed react and express" >> $FILE_NAME