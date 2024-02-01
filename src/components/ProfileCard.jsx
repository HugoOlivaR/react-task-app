import {React, useContext} from 'react';
import {ProfileContext} from '../config/profileContext';

const ProfileCard = (profileCardHandler) => {
    var [profileCardHandler] = useContext(ProfileContext);

    if(profileCardHandler === true){
        alert("funciona")
    }
    return (
        <div className='h-6 w-12 bg-red-500'>
            hello world
        </div>
    );
};


export default ProfileCard;