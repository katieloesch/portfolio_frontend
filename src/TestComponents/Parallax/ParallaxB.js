import React, { useContext } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AppContainer } from '../../../containers'
import { useState, useRef, useEffect} from "react"; 
import { CurrentContext } from '../../../contexts/CurrentContext'
import { colors } from '../../../assets/colors/colors'
import './Parallax.scss'

const ParallaxB = () => {
  const active = useContext(CurrentContext)

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef('parallaxB');
    const navDots = document.querySelectorAll('.nav-dot')
    const dot = document.querySelector('#parallaxB-dot');

    useEffect(() => {
   
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-300px" }
        );
        if (isIntersecting) {
          active.current = 'parallaxB'
          navDots.forEach(dot => dot.style.backgroundColor = colors.navDotInactive);
          dot.style.backgroundColor = colors.navDotActive;
    
        }
    
        observer.observe(ref.current);
        return () => observer.disconnect();
    
      }, [isIntersecting, active, dot, navDots]);

      //parallex effect
      const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start start", "end start"]
      });
      
      const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
      const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div className='app-cont parallax' id='parallaxB' ref={ref} >

      <motion.h1 style={{y: yText}}>"What We Did"</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y: yBg}} className="planets"></motion.div>
      <motion.div style={{x: yBg}} className="stars"></motion.div>

</div>

  )
}

export default ParallaxB