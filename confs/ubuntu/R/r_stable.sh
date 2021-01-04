#! /bin/bash
FILE_NAME="r_script.log"

cd home/ubuntu
echo "Installing R repository and useful packages." > $FILE_NAME
sudo apt install apt-transport-https software-properties-common -y
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
sudo add-apt-repository 'deb https://cloud.r-project.org/bin/linux/ubuntu bionic-cran35/'
sudo apt install build-essential -y


sudo apt update -y
sudo apt upgrade -y
sudo apt install r-base -y
echo "Installed R Stable." >> $FILE_NAME

echo R Version: $(R --version) >> $FILE_NAME