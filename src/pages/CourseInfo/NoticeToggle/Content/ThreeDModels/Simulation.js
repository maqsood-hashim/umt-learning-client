import React from 'react';

const Simulation = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '600px', // Adjust the height as needed
            width: '800px', // Adjust the width as needed
            margin: '0 auto',
        }}
    >

<h2 style={{ marginBottom: '10px' }}>ATC Simulation 3D Model</h2>
<iframe style={{ width: '100%',
        height: '100%',}} title="ATC Simulation Systems" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/fd94cb43cf7f48cc81bf1a7d84ba9a6a/embed"> </iframe>
    </div>
);

export default Simulation;
