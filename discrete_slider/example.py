import streamlit as st
from discrete_slider import discrete_slider_declare

# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run my_component/example.py`

st.subheader("Component with constant args")

# Create an instance of our component with a constant `name` arg, and
# print its output value.
num_clicks = discrete_slider_declare(["Hello", "World"])
st.markdown("You've clicked %s times!" % int(num_clicks))
