import React from 'react'
import Countdown from 'react-countdown';


export const TimerCountDown = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    console.log(hours, minutes, seconds)
    if (completed) {
      return (
        <>

        </>
      )
    } else {
      return (
        <div>
          {/* <span>23</span> HOURS <span>15</span> */}
          <span>{hours}</span> HOURS <span>{minutes}</span> MINS
        </div>
      )
    }
  };
  return (
    <div>
      <Countdown autoStart={true} renderer={renderer} date={Date.now() + 10000000} />
    </div>
  )
}
