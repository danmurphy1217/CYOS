FILE_NAME="nginx_script.txt"

echo Current Directory: $(pwd)
cd home/ubuntu
echo New Directory: $(pwd) > $FILE_NAME
echo "Setting up Nginx..."
sudo apt upgrade -y
sudo apt update -y

sudo apt install nginx
echo "Available application profiles:"
echo $(sudo ufw app list) > $FILE_NAME
echo "Firewall Status:"
echo $(sudo ufw status)
echo "y" | sudo ufw enable
sudo ufw allow 'Nginx HTTP'
sudo ufw allow 'OpenSSH'

echo "Firewall is running with current profiles:"
echo UFW Status: $(sudo ufw status) > $FILE_NAME

echo "Nginx webserver is running..."
echo $(sudo systemctl status nginx) > $FILE_NAME