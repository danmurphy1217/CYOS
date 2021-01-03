import base64
from typing import IO
def read_data_from(a_text_file: IO) -> str:
    """
    read data from a text file and return its string contents.
    
    :param a_text_file -> ``IO``: text file containing data to base64 encode.
    :returns -> ``str``: text data from the file.
    """
    with open(a_text_file, "rb") as f:
        return f.read()

def perform_base64_encoding_for(string_obj: str) -> base64.b64encode:
    """convert utf-8 encoded string to base64, the preferred AWS format"""
    return base64.b64encode(string_obj)

def write_to_file_for(fname: str, str_object: str) -> bool:
    with open(fname, "wb") as f:
        f.write(str_object)
    
    return True

if __name__ == "__main__":
    str_contents_of_file = read_data_from("./run_on_start.txt")
    encoded_str_contents_of_file = perform_base64_encoding_for(str_contents_of_file)
    write_to_file_for("run_on_start_encoded.txt", encoded_str_contents_of_file)
