#! /bin/bash
FILE_NAME="docker_script.log"
DOCKER_HELLO_WORLD="hello_world.txt"
HOME='/home/ubuntu'

cd $HOME
echo $(pwd) >> $FILE_NAME
sudo apt-get remove docker docker-engine docker.io containerd runc

echo "updating software and installing necessary packages" >> $FILE_NAME

sudo apt-get update -y
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y

echo "Adding and verifying dockers official key" >> $FILE_NAME
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88

echo "Downloading Docker" >> $FILE_NAME
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y

echo $(sudo docker run hello-world) >> $DOCKER_HELLO_WORLD

echo "Successfully Downloaded Docker." >> $FILE_NAME