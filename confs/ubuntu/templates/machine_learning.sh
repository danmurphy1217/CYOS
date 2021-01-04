#! /bin/bash
cd home/ubuntu
echo Current Dir: $(pwd) >> "startup_script.txt"
echo "running startup script" >> "startup_script.txt"
sudo apt update -y
sudo apt upgrade -y
echo "updates complete." >> "startup_script.txt"
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt install nvidia-driver-435
echo "installed nvidia driver." >> "startup_script.txt"
wget https://developer.download.nvidia.com/compute/cuda/11.2.0/local_installers/cuda_11.2.0_460.27.04_linux.run
sudo sh cuda_11.2.0_460.27.04_linux.run
echo "installed CUDA" >> "startup_script.txt"