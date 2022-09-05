import React from 'react'
import './styles/card.css'
import logo from './assets/logo.svg'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

function Card(props) {
    return (
        <>
            
                <div className="card">
                    <div className="card-header">
                        <img src={logo} alt="logo" className='react-logo' />
                        <h1 className="proj-name">{props.projectname}</h1>
                    </div>
                    <div className="main-content">
                        <h2>{props.projecttitle}</h2>
                        <p>
                            {props.projectdescription}
                        </p>
                        <p>Tools : {props.tools}</p>
                    </div>
                    <div className="card-footer">
                        <button><a href={props.link}>Live Link <AiOutlineLink className='ai-icons'/></a></button>
                        <button><a href={props.github}>GitHub <AiFillGithub className='ai-icons'/></a></button>
                    </div>
                </div>
            
        </>
    )
}

export default Card