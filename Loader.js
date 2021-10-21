import React from 'react';
import './loader.scss';

function Loader({loading}) { 
    return ( 
        <>
            { loading 
            ? <div className="loadBox">
                    <img src="./loading.gif" width="170"/>
              </div>
            : null
            }
        </>
    ); 
} 
        
export default Loader;
