import React from "react";
import styled from "@emotion/styled";

type RangeSliderProps = {
  min: number;
  max: number;
  value: {
    min: number;
    max: number;
  };
  step: number;
  onChange: React.Dispatch<
    React.SetStateAction<{
      min: number;
      max: number;
    }>
  >;
};
const RangeSlider = ({ min, max, value, step, onChange }:RangeSliderProps) => {
    const [minValue, setMinValue] = React.useState(value ? value.min : min);
    const [maxValue, setMaxValue] = React.useState(value ? value.max : max);
  
    React.useEffect(() => {
      if (value) {
        setMinValue(value.min);
        setMaxValue(value.max);
      }
    }, [value]);
  
    const handleMinChange = (e) => {
      e.preventDefault();
      const newMinVal = Math.min(e.target.value, maxValue - step);
      if (!value) setMinValue(newMinVal);
      onChange({ min: newMinVal, max: maxValue });
    };
  
    const handleMaxChange = (e) => {
      e.preventDefault();
      const newMaxVal = Math.max(e.target.value, minValue + step);
      if (!value) setMaxValue(newMaxVal);
      onChange({ min: minValue, max: newMaxVal });
    };
  
    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;
  
    return (
      <StyledRangeSlider className="wrapper">
        <div className="input-wrapper">
          <input
            className="input"
            type="range"
            value={minValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMinChange}
          />
          <input
            className="input"
            type="range"
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        </div>
  
        <div className="control-wrapper">
          <div className="control" style={{ left: `${minPos}%` }} />
          <div className="rail">
            <div
              className="inner-rail"
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            />
          </div>
          <div className="control" style={{ left: `${maxPos}%` }} />
        </div>
      </StyledRangeSlider>
    );
  };
  

const StyledRangeSlider = styled.div`
  --thumb-size: 16px;

  position: relative;
  display: flex;
  align-items: center;
  margin: 1rem 0;

  .input-wrapper {
    width: calc(100% + 16px);
    margin: 0 calc(16px/ -2);
    position: absolute;
    height: 16px;
  }

  .control-wrapper {
    width: 100%;
    position: absolute;
    height: 16px;
  }

  .input {
    position: absolute;
    width: 100%;
    pointer-events: none;
    appearance: none;
    height: 100%;
    opacity: 0;
    z-index: 3;
    padding: 0;

    &::-ms-track {
      appearance: none;
      background: transparent;
      border: transparent;
    }

    &::-moz-range-track {
      appearance: none;
      background: transparent;
      border: transparent;
    }

    &:focus::-webkit-slider-runnable-track {
      appearance: none;
      background: transparent;
      border: transparent;
    }

    &::-ms-thumb {
      appearance: none;
      pointer-events: all;
      width: 16px;
      height: 16px;
      border-radius: 0px;
      border: 0 none;
      cursor: grab;
      background-color: red;

      &:active {
        cursor: grabbing;
      }
    }

    &::-moz-range-thumb {
      appearance: none;
      pointer-events: all;
      width: 16px;
      height: 16px;
      border-radius: 0px;
      border: 0 none;
      cursor: grab;
      background-color: red;

      &:active {
        cursor: grabbing;
      }
    }

    &::-webkit-slider-thumb {
      appearance: none;
      pointer-events: all;
      width: 16px;
      height: 16px;
      border-radius: 0px;
      border: 0 none;
      cursor: grab;
      background-color: red;

      &:active {
        cursor: grabbing;
      }
    }
  }

  .rail {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    height: 3px;
    background: var(--gray-3);
  }

  .inner-rail {
    position: absolute;
    height: 100%;
    background: var(--blue-2);
  }

  .control {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: absolute;
    background: var(--blue-2);
    top: 50%;
    margin-left: calc(16px/ -2);
    transform: translate3d(0, -50%, 0);
    z-index: 2;
  }
`;

export default RangeSlider;
