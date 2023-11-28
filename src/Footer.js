import React from 'react';

function Footer(){
    const text = "Created by: Harit J.";
    const contact = "For work please contact: harit.forwork@gmail.com"
    return (
        <div className="Footer">
            {text}
            <br/>
            {contact}
        </div>
    );
};


export default Footer;