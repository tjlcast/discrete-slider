import { Slider } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import {
  Streamlit,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"
import React, { useEffect, useMemo, useState, ReactElement } from "react"

// const options = ["green", "blue", "red", "eggs"]

function createMarks(lable: string[]): any[] {
  return lable.map((label, index) => {
    return { value: index, label }
  })
}

/**
 * This is a React-based component template. The passed props are coming from the
 * Streamlit library. Your custom args can be accessed via the `args` props.
 */
function DiscreteSlider({
  args,
  disabled,
  theme,
  width,
}: ComponentProps): ReactElement {
  const { options } = args

  const [isFocused, setIsFocused] = useState(false)
  const [numClicks, setNumClicks] = useState(0)

  const style: React.CSSProperties = useMemo(() => {
    if (!theme) return {}

    // Use the theme object to style our button border. Alternatively, the
    // theme style is defined in CSS vars.
    const borderStyling = `1px solid ${isFocused ? theme.primaryColor : "gray"}`
    return { border: borderStyling, outline: borderStyling }
  }, [theme, isFocused])

  useEffect(() => {
    Streamlit.setComponentValue(numClicks)
  }, [numClicks])

  // setFrameHeight should be called on first render and evertime the size might change (e.g. due to a DOM update).
  // Adding the style and theme here since they might effect the visual size of the component.
  useEffect(() => {
    Streamlit.setFrameHeight()
  }, [style, theme])

  const vMargin = 7
  const hMargin = 20
  const StyledSlider = styled(Slider)({
    margin: `${vMargin}px ${hMargin}px`,
    width: width - 2 * hMargin,
  })

  // Show a button and some text.
  // When the button is clicked, we'll increment our "numClicks" state
  // variable, and send its new value back to Streamlit, where it'll
  // be available to the Python program.
  return (
    <div>
      <span>Discrete Slider</span>
      <StyledSlider
        defaultValue={0}
        min={0}
        max={options.length - 1}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="off"
        marks={createMarks(options)}
        onChangeCommitted={(event, value) => {
          const selectedOptions = options[Number(value)]
          Streamlit.setComponentValue(selectedOptions)
        }}
        disabled={disabled}
      />
    </div>
  )
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(DiscreteSlider)
