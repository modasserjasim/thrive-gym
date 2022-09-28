import React from 'react';
import Break from '../Break/Break';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const Sidebar = () => {
    return (
        <div className='sticky top-10'>
            <PersonalInfo></PersonalInfo>
            <Break></Break>
        </div>
    );
};

export default Sidebar;