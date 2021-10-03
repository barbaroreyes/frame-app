import React,{useState} from 'react';
import {motion} from 'framer-motion';

const Box1 = () => {
    const [isAnimated,setIsAnimated] = useState(false)

  return (
    <div className="box-container">
    <motion.div 
    className="box"
    animate ={{
        x:isAnimated ? 1500: 0,
       opacity:isAnimated ? 1: 0.5,
       backgroundColor:'red',
    //    scale:2,
     rotate:isAnimated ? 360: 0,
      
    }}
    initial={{
        opacity:0.01,
        
       
    }}
    transition={{
        // type:'tween',
        // duration:3
        type:'spring',
        stiffness:60,
        damping:7
        //if you dawn damping moveUp
    }}
    onClick ={() =>setIsAnimated(!isAnimated)}

    >
        <h1>Box-1</h1>
    </motion.div>
    </div>
  )
}

export default Box1
