import React from 'react';
import ShowcaseProject from '../ShowcaseProject/ShowcaseProject';
import './Showcase.css';

function Showcase() {
    return (
        <div className="Showcase">
            <ShowcaseProject ProjectId="0" />
            <ShowcaseProject ProjectId="1" />
            <ShowcaseProject ProjectId="2" />
        </div>
    )
}

export default Showcase;
