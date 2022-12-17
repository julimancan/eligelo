import React from 'react'
import styled from '@emotion/styled';

type RangeProps = {
    title: string,
    min: string,
    max: string,
}

const Range = ({title, min, max}:RangeProps) => {
  return (
    <StyledRange>
        <h3>{title}</h3>
        {/* slider */}
        <section className='values'>
            <div className='min'>
                <p>Mínimo</p>
                <div>{min}</div>
            </div>
            <div className='max'>
                <p>Máximo</p>
                <div>{max}</div>
            </div>
        </section>
    </StyledRange>
  )
}

const StyledRange = styled.section`

`

export default Range