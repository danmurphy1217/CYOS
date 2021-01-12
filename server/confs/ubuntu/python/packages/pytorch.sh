#! /bin/bash
PYTORCH_VENV_NAME="pytorch-venv"

echo "Creating a virtual environment for Pytorch called $PYTORCH_VENV_NAME"
python3 -m venv $PYTORCH_VENV_NAME
source $PYTORCH_VENV_NAME/bin/activate
pip3 install torch torchvision
deactivate