import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
    <div className="container profile">
         <User 
                src="https://www.hairfinder.com/hairstyles12/men-hairstyle1g.jpg" 
                alt="man"
                 name="Scott"/>
        <Palette/>
    </div>
    )
}
export default Profile;