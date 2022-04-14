import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { useContext } from "react";
import { themeContext } from '../../Context'
import { motion } from "framer-motion";
import { type } from '@testing-library/user-event/dist/type'


const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration: 1, type: 'spring'}

    return (
        <div className="services" id='Services' >

            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode? 'white' : '' }}> My Awesome</span>
                <span>Services</span>
                <spane>Lorem ipsum is simpley dummy text of printing Lorem
            <br />
            Ipsum is simpley dummy text of printing
            </spane>
            <a>
            <button className='button s-button'> Download CV</button>
            </a>
            
            <div className='blur s-blur' style={{background: "ABF1FF94"}}></div>
            </div>

            {/* left side */}
            <div className="cards">
           <motion.div
           whileInView={{left:'45rem'}}
            initial={{left:'25%'}}
            transition={{transition}}
           style={{left:'45rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'Figma, Sketch, Photoshop, Adobe, Adobe xd'}

                />
           </motion.div>
                 {/* second card */}
<motion.div
whileInView={{left:'24rem'}}
initial={{left:'25%'}}
transition={{transition}}

style={{top: '8rem', left: "24rem"}}>
    <Card 
    emoji={Glasses}
    heading={'Developer'}
    detail={'HTML, CSS, Javascript, React, Figma, Sketch, Photoshop, Adobe, Adobe xd'}>

    </Card>
</motion.div>

{/* 3th card */}
<motion.div
whileInView={{left:'40rem'}}
initial={{left:'25%'}}
transition={{transition}}

style={{top: '19rem', left: "40rem"}}>
    <Card 
    emoji={Humble}
    heading={'UI/UX'}
    detail={'Some Materials Lorem ipsum is simpley dummy text of printing Lorem Lorem ipsum is simpley dummy text of printing Lorem'}>

    </Card>
</motion.div>
<div className='blur s-blur2' style={{ background:"var(--purple)"}}></div>
 

            </div>
        </div>
    )
}

export default Services