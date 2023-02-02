import React, { useState } from 'react';
import AccordionBox from './AccordionBox';
import './App.css';

const Accordion = ({ data }) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className="user" >
                <div className='user__data'>
                    <span>{data.company.name}</span>
                    <div >
                        <h2>Contact</h2>
                        <span>{data.name}</span>
                    </div>
                    <div>
                        <h2>City</h2>
                        <span>{data.address.city}</span>
                    </div>
                    <div>
                        <h2>State</h2>
                        <span>{data.address.street}</span>
                    </div>
                    <button className="btn" onClick={() => setActive(!active)}>{active ? "Hide Details" : "View Details"}</button>
                </div>
                {
                    active && <AccordionBox data={data} />
                }

            </div>

        </>
    )
}

export default Accordion;