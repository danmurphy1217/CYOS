#! /bin/bash


# configurations: must have at least a large sized EC2 instance.
FILE_NAME="ml_server.log"
PYTORCH_VENV_NAME="pytorch-venv"
TF_VENV_NAME="tf-venv"

cd home/ubuntu
echo $FILE_NAME
touch $FILE_NAME
echo Current Dir: $(pwd) > $FILE_NAME
echo "running startup script" >> $FILE_NAME
sudo apt update -y
sudo apt upgrade -y
echo "updates complete." >> $FILE_NAME
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt install nvidia-driver-435
echo "installed nvidia driver." >> $FILE_NAME
wget https://developer.download.nvidia.com/compute/cuda/11.2.0/local_installers/cuda_11.2.0_460.27.04_linux.run
sudo sh cuda_11.2.0_460.27.04_linux.run
echo "installed CUDA" >> $FILE_NAME

echo "Installing Python and Pip" >> $FILE_NAME
sudo apt install python-dev python3-dev python-pip python3-venv virtualenv -y
sudo apt install python3-opencv -y

echo "Creating a virtual environment for Pytorch called $PYTORCH_VENV_NAME" >> $FILE_NAME
python3 -m venv $PYTORCH_VENV_NAME
source $PYTORCH_VENV_NAME/bin/activate
pip install -U pip
pip install -U setuptools
echo "installed pip and setuptools for $PYTORCH_VENV_NAME" >> $FILE_NAME
pip install torch torchvision
echo "installed pytorch for $TF_VENV_NAME" >> $FILE_NAME
deactivate

echo "Creating a virtual environment for Tensorflow called $TF_VENV_NAME" >> $FILE_NAME
python3 -m venv $TF_VENV_NAME
source $TF_VENV_NAME/bin/activate
pip install -U pip
pip install -U setuptools
echo "installed pip and setuptools for $TF_VENV_NAME" >> $FILE_NAME
pip install tensorflow
echo "installed tensorflow for $TF_VENV_NAME" >> $FILE_NAME
pip install tensorflow-gpu
deactivate