import React from 'react'
import ReactDom from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAnchor, faAward } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

function About() {
    return (
        <div className='about'>
            <h1>About Us</h1>
            <p>
                Too cultivated use solicitude frequently. Dashwood likewise up consider continue entrance ladyship oh. Wrong guest
                given purse power is no. Friendship to connection an am considered difficulty. Country met pursuit lasting moments
                why calling certain the. Middletons boisterous our way understood law. Among state cease how and sight since shall.
                Material did pleasure breeding our humanity she contempt had. So ye really mutual no cousin piqued summer result.
            </p>
            <p>
                Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society
                musical besides inhabit ye my. Lose hill well up will he over on. Increasing sufficient everything men him admiration
                unpleasing sex. Around really his use uneasy longer him man. His our pulled nature elinor talked now for excuse result.
                Admitted add peculiar get joy doubtful.
            </p>
            <h2>Our Core</h2>
            <div className='core-row'>
                <div className='core-column'>
                    <p> <FontAwesomeIcon icon={faAnchor} className='icon' /></p>
                    <p>Core 1</p>
                </div>
                <div className='core-column'>
                    <p><FontAwesomeIcon icon={faAward} className='icon'/></p>
                    <p>Core 2</p>
                </div>
                <div className='core-column'>
                    <p> <FontAwesomeIcon icon={faStar} className='icon'/></p>
                    <p>Core 3</p>
                </div>
            </div>
        </div>
        )
}

export default About