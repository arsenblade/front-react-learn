import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import cn from 'classnames'
import styles from './RangeSlider.module.scss'
import { getTrackBackground, Range } from 'react-range';

interface IRangeSlider {
  values: number[],
  setValues: Dispatch<SetStateAction<number[]>>
}
const RangeSlider:FC<IRangeSlider> = ({values, setValues}) => {

  return (
      <Range
        step={0.1}
        min={40}
        max={180}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            style={{
              ...props.style,
            }}
            className={styles.track}
          >
            <div
                ref={props.ref}
                style={{
                  width: "100%",
                  background: getTrackBackground({
                    values: values,
                    colors: ["#8B4DFF", "#FAFAFA"],
                    min: 40,
                    max: 180
                  }),
                }}
                className={styles.rangeBar}
              >
                <span className={cn(styles.junLvl, {
                  [styles.junLvlWhite]: values[0] >= 40
                })}></span>
                <span className={cn(styles.midLvl, {
                  [styles.midLvlWhite]: values[0] >= 100
                })}></span>
                <span className={cn(styles.senLvl, {
                  [styles.senLvlWhite]: values[0] === 180
                })}></span>
                {children}
              </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              zIndex: 11
            }}
            className={styles.thumb}
          />
        )}
      />
  )
}

export default RangeSlider