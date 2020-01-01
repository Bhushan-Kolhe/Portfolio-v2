import React from 'react';
import Signature from '../Signature/Signature';
import Snow from '../Snow/Snow';
import './Loader.css';

function Loader() {
    setTimeout(() => {
        const LoaderElement = document.getElementById('Loader');
        LoaderElement.style.display = 'none';
    },6000)

    return (
        <div id="Loader">
            <Signature />
            <Snow />
        </div>
    )
}

export default Loader
