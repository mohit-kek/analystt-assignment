import React from 'react'
import "./App.css"

const AccordionBox = ({data}) => {
    return (
        <div className='accordion__container'>
            <div className='accordion__description'>
                <h2>Description</h2>
                {/* <p>
            Providing service of domestic flight booking @ lowest price quaranteed and also for railway e-ticket booking also offering international flight tickets fiving services to our customers since 1995.
        </p> */}
                <p>{data.company.name}</p>
            </div>

            <div className='accordion__contact__details'>
                <div>
                    <h2>Contact Person</h2>
                    <span>{data.name}</span>
                </div>
                <div>
                    <h2>Designation</h2>
                    <span>Not Available</span>
                </div>
                <div>
                    <h2>Emails</h2>
                    <span>{data.email}</span>
                </div>
                <div>
                    <h2>Phone</h2>
                    <span>{data.phone}</span>
                </div>
                <div>
                    <h2>Address</h2>
                    <span>{data.address.suite}</span>
                </div>
                <div>
                    <h2>City</h2>
                    <span>{data.address.city}</span>
                </div>
                <div>
                    <h2>State</h2>
                    <span>{data.address.street}</span>
                </div>
                <div>
                    <h2>Country</h2>
                    <span>{data.address.zipcode}</span>
                </div>
            </div>


        </div>
       
    )
}

export default AccordionBox