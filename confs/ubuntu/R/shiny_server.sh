#! /bin/bash

FILE_NAME="r_shiny.log"
HOME='/home/ubuntu'

cd $HOME
echo "$(pwd)" >> $FILE_NAME

sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) universe"
sudo apt-get update

sudo apt-get install r-base -y
echo "Installed R" >> $FILE_NAME
sudo su - \
-c "R -e \"install.packages('shiny', repos='https://cran.rstudio.com/')\""
sudo su - \
-c "R -e \"install.packages('rmarkdown', repos='https://cran.rstudio.com/')\""
echo "Installed R Shiny and rmarkdown" >> $FILE_NAME

sudo apt-get install gdebi-core
echo "Installed gdebi, which is used to install Shiny Server" >> $FILE_NAME

wget https://download3.rstudio.org/ubuntu-14.04/x86_64/shiny-server-1.5.15.953-amd64.deb
sudo gdebi -n shiny-server-1.5.15.953-amd64.deb
echo "Installed Shiny Server" >> $FILE_NAME

sudo systemctl start shiny-server
echo "Started Shiny Server" >> $FILE_NAME

sudo ufw allow ssh
sudo ufw allow 3838
 echo "y" | sudo ufw enable
echo "Configured Firewall" >> $FILE_NAME

