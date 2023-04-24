import { Dispatch, type FC, SetStateAction, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ProductInt } from "../ProductCard";
import type { Filters } from "./FiltersOptions";

type RangeSliderProps = {
  min: number;
  max: number;
  value: {
    min: number;
    max: number;
  };
  step: number;
  onChange: Dispatch<
    SetStateAction<{
      min: number;
      max: number;
    }>
  >;
  filterType: string;
  setFilterStates: Dispatch<SetStateAction<Filters>>;
};
const RangeSlider = ({
  min,
  max,
  value,
  step,
  onChange,
  filterType,
  setFilterStates
}: RangeSliderProps) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  // const filterResults = (results,  minValue, maxValue) => results.filter(
  //   (product) => product[filterType] >= minValue && product[filterType] <= maxValue
  // )

  const handleMinChange = (e) => {
    e.preventDefault();
    const newMinVal = Math.min(e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
    // setResults(
    //   products => 
    //   filterResults(products, newMinVal, maxValue)
    // );
    setFilterStates(
      filters => ({
        ...filters,
        [filterType]: {
          ...filters[filterType],
          min: newMinVal,
        }
      })
    )
  };

  const handleMaxChange = (e) => {
    e.preventDefault();
    const newMaxVal = Math.max(e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
    // setResults(
    //   products =>
    //   filterResults(products, minValue, newMaxVal)
    // );
    setFilterStates(
      filters => ({
        ...filters,
        [filterType]: {
          ...filters[filterType],
          max: newMaxVal
        }
      })
    )
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <StyledRangeSlider className="wrapper" minPos={minPos} maxPos={maxPos}>
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
        <div className="control min" />
        <div className="rail">
          <div className="inner-rail" />
        </div>
        <div className="control max" />
      </div>
    </StyledRangeSlider>
  );
};

interface StyledFilterOptionsProps {
  minPos: number;
  maxPos: number;
  className: string;
}

const StyledRangeSlider: FC<StyledFilterOptionsProps> = styled.div<StyledFilterOptionsProps>`
  --thumb-size: 16px;
  width: 284px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 1rem 0;

  .input-wrapper {
    width: calc(100% + var(--thumb-size));
    margin: 0 calc(var(--thumb-size) / -2);
    position: absolute;
    height: var(--thumb-size);
  }

  .control-wrapper {
    width: calc(100% - var(--thumb-size));
    position: absolute;
    height: var(--thumb-size);
    .min {
      left: ${({ minPos }) => `${minPos}%`};
    }
    .inner-rail {
      left: ${({ minPos }) => `${minPos}%`};
      right: ${({ maxPos }) => `${100 - maxPos}%`};
    }
    .max {
      left: ${({ maxPos }) => `${maxPos}%`};
    }
  }

  .input {
    position: absolute;
    width: calc(100% - var(--thumb-size));
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
      width: var(--thumb-size);
      height: var(--thumb-size);
      border-radius: 0px;
      border: 0 none;
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }

    &::-moz-range-thumb {
      appearance: none;
      pointer-events: all;
      width: var(--thumb-size);
      height: var(--thumb-size);
      border-radius: 0px;
      border: 0 none;
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }

    &::-webkit-slider-thumb {
      appearance: none;
      pointer-events: all;
      width: var(--thumb-size);
      height: var(--thumb-size);
      border-radius: 0px;
      border: 0 none;
      cursor: grab;

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
    margin-left: calc(var(--thumb-size) / -2);
    transform: translate3d(0, -50%, 0);
    z-index: 2;
  }
`;

export default RangeSlider;
