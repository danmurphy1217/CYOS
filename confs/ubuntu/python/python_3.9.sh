#! /bin/bash
FILE_NAME="python_script.log"
HOME='/home/ubuntu'

echo $(pwd) >> $FILE_NAME
cd $HOME
echo $(pwd) >> $FILE_NAME
sudo apt update -y
sudo apt install software-properties-common -y

echo | sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update -y
sudo apt upgrade -y

echo "Installing Python 3.9" >> $FILE_NAME
sudo apt install python3.9 -y
echo "Installed Python 3.9" >> $FILE_NAME