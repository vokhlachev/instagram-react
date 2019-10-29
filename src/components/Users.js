import React from 'react';
import User from './User';


export default function  Users() {
    return (
        <div className="right">
            <User 
                src="https://www.hairfinder.com/hairstyles12/men-hairstyle1g.jpg" 
                alt="man"
                 name="Scott"/>
                 <div className="users__block">
                 <User 
                src="https://www.hairfinder.com/hairstyles12/men-hairstyle1g.jpg" 
                alt="man"
                 name="Scott" 
                 min/>
                 <User 
                src="https://www.hairfinder.com/hairstyles12/men-hairstyle1g.jpg" 
                alt="man"
                 name="Scott" 
                 min/>
                 <User 
                src="https://www.hairfinder.com/hairstyles12/men-hairstyle1g.jpg" 
                alt="man"
                 name="Scott" 
                 min/>
                 <User 
                src="https://www.hairfinder.com/hairstyles12/men-hairstyle1g.jpg" 
                alt="man"
                 name="Scott" 
                 min/>
                 </div>
        </div>
    )
}
