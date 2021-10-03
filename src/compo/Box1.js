import React,{useState} from 'react';
import {motion} from 'framer-motion';

const Box1 = () => {
    const [isanimated,setIsAnimated] = useState(false)

  return (
    <div className="box-container">
    <motion.div 
    className="box"
    animate ={{
        x:1500,
       opacity:1,
       backgroundColor:'red',
    //    scale:2,
     rotate:360
      
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
    onClick ={() =>setIsAnimated(!isanimated)}

    >
        <h1>Box-1</h1>
    </motion.div>
    </div>
  )
}

export default Box1
