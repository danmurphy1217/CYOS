#! /bin/bash

HOME='/home/ubuntu'
FILE_NAME='apache_stable.log'

cd $HOME
sudo apt update -y
echo "Updated Software" >> $FILE_NAME

sudo apt install apache2 -y
echo "Installed Apache2" >> $FILE_NAME

echo "Current Firewall Configuration:" >> $FILE_NAME
echo $(sudo ufw app list) >> $FILE_NAME

sudo ufw allow 'Apache'
echo "New Configuration:" >> $FILE_NAME
echo $(sudo ufw app list) >> $FILE_NAME

echo "Apache Server Status: $(sudo systemctl status apache2)" >> $FILE_NAME

echo "Visit $(curl -4 icanhazip.com) to view base Apache page"