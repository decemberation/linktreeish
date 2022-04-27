import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Card.css'

export default function Card(props) {
    const variants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50
            },
        }),
        hidden: { opacity: 0, y: 200 }
    }


    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <motion.div className="Card four columns"
                initial="hidden"
                animate="visible"
                custom={props.index}
                variants={variants}>
                <img className='banner' src={props.banner} alt=""></img>
                <div className='content'>
                    <h2>{props.title}</h2>
                </div>
            </motion.div>
        </a>
    )
}
