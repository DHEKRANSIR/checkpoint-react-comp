import React from 'react';
import photodeprofil from '../Image/photodeprofil.jpg' ;
import './ProfilePhoto.css';
const ProfilePhoto=()=>{
    return (
            <div className='upper-container'>
                <div className='imag-container'>
                    <img src={photodeprofil} alt="PROFIL" />
                </div>
            </div>
    )
}
export default ProfilePhoto;