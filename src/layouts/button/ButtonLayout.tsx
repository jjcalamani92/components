import React from 'react'

export const ButtonLayout = ( props:any ) => {
    const { title,  className , handleclick } = props;
    return (
        <button 
            className={`${ className }`}
            onClick={ handleclick }
        >
            { title } 
            {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
            
        </button>
    )
}
