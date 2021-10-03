import React from 'react'
import {motion} from 'framer-motion'
const Box1 = () => {
  return (
    <div className="box-container">
    <motion.div 
    className="box"
    animate ={{
        x:1500,
       opacity:1,
    }}
    initial={{
        opacity:0.01,
    }}
    transition={{
        duration:2
    }}

    >
        <h3>Box-1</h3>
    </motion.div>
    </div>
  )
}

export default Box1