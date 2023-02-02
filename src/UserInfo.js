import React from 'react';
import './App.css';

const UserInfo = ({item}) => {
    return (
        <div className='userinfo__container'>
            <div className='userinfo__description'>
                <h2>Description</h2>
                {/* <p>
                    Providing service of domestic flight booking @ lowest price quaranteed and also for railway e-ticket booking also offering international flight tickets fiving services to our customers since 1995.
                </p> */}
                <p>{item.company.catchPhrase}</p>
            </div>

            <div className='userinfo__contact__details'>
                <div>
                    <h2>Contact Person</h2>
                    <span>{item.name}</span>
                </div>
                <div>
                    <h2>Designation</h2>
                    <span>Not Available</span>
                </div>
                <div>
                    <h2>Emails</h2>
                    <span>{item.email}</span>
                </div>
                <div>
                    <h2>Phone</h2>
                    <span>{item.phone}</span>
                </div>
                <div>
                    <h2>Address</h2>
                    <span>{item.address.suite}</span>
                </div>
                <div>
                    <h2>City</h2>
                    <span>{item.address.city}</span>
                </div>
                <div>
                    <h2>State</h2>
                    <span>{item.address.street}</span>
                </div>
                <div>
                    <h2>Country</h2>
                    <span>{item.address.zipcode}</span>
                </div>
            </div>


        </div>
    )
}

export default UserInfo;