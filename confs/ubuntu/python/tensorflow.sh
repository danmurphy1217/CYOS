#! /bin/bash
TF_VENV_NAME="tf-venv"

echo "Creating a virtual environment for Tensorflow called $TF_VENV_NAME"
python3 -m venv $TF_VENV_NAME
source $TF_VENV_NAME/bin/activate
pip3 install tensorflow-gpu
pip3 install --upgrade tensorflow
deactivate