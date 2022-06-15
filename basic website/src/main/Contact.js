import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

function Contact() {
    return (
        <div>
            <div className='contact-title'>
                <h1>contact us</h1>
            </div>
            <div className='row'>
                <div className='column'>

                    <div className='contact-info'>
                        <h3>Get In Touch</h3>
                    <p>
                        <FontAwesomeIcon icon={faPhone} className='contact-icon' />000 000 0000
                    </p>
                    <p>
                            <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />email@email.com
                    </p>
                    <p>
                            <FontAwesomeIcon icon={faLocationArrow} className='contact-icon' />123 street, state, 0000
                    </p>
                </div>
            </div>
                <div className='column'>
                    <form>
                        <div>
                            <label>Name:</label><br/>
                            <input type='name' />
                        </div>
                        <div>
                            <label>Email:</label><br/>
                            <input type='email'/>
                        </div>
                        <div>
                            <label>Message:</label><br/>
                          <input type='text'/>
                        </div>
                        <br/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>

        </div>
        )
}

export default Contact
