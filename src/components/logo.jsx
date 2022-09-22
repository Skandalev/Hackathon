import { useState } from "react"
import { useTransition, animated } from 'react-spring'

export default function Mount() {
    const [show, set] = useState(false)
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: show,
      delay: 600,
    //   config: config.molasses,
      onRest: () => set(!show),
    })
    return transitions(
      (styles, item) => item && <animated.div style={styles}>
       <h5 className="h5">
          !גללו למטה בכדי להוסיף דיווחים והצעות לשיפור פני העיר
        </h5>
      </animated.div>
    )
  }