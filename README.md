# streamlit-discrete-slider

Streamlit component that allows you to do X

## Installation instructions

```sh
pip install streamlit-discrete-slider
```

## Usage instructions

```python
import streamlit as st
from discrete_slider import discrete_slider_declare

num_clicks = discrete_slider_declare(["Hello", "World"])
st.markdown("You've clicked %s times!" % int(num_clicks))
```

## Development instructions

### Install Frontend
``` sh
cd discrete_slider/frontend
# npm install @material-ui/core
npm install
npm run start
```

### Run Python
```sh
pip install -r requirements.txt
streamlit run .\discrete_slider\example.py
```

> http://material-ui.com/components/slider/


## release
### package frontend
```sh
cd discrete_slider/frontend
npm install
npm run build
```
### package the wheel
``` sh
# pip install wheel
python setup.py sdist bdist_wheel
```