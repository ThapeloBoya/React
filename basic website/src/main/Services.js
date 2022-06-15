import React from 'react'
import '../index.css'

function Services() {
    return (
        <div className='services'>
            <div className='service-title'>
                <h1>our services</h1>
                </div>
            <div className='row'>
                <div className='column'>
                    <h2>
                        Always Here For You
                    </h2>
                    <p>
                        Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher,
                        Marcus Tullius Cicero. The text is titled "de Finibus Bonorum et Malorum" which means "The Extremes of
                        Good and Evil". The most common form of Lorem ipsum is the following:
                    </p>
                </div>
                <div className='column'>
                    <img src='https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=' '/>
                </div>
                <div className='service-bottom'>
                    <div className='service-bottom-row'>
                        <div className='service-bottom-column'>
                            <div className='service-bottom-card'>
                                <h3>
                                Service 1
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                </p>
                                <button>
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className='service-bottom-column'>
                            <div className='service-bottom-card'>
                                <h3>
                               Service 2
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                </p>
                                <button>
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className='service-bottom-column'>
                            <div className='service-bottom-card'>
                                <h3>
                                    Service 3
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                </p>
                                <button>
                                    Learn More
                                </button>
                            </div>
                </div>
                    </div>
                    </div>
            </div>
        </div>
        
        )
}

export default Services