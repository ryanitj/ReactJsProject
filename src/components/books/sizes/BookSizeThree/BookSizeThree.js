import React from 'react';

const BookComponentSizeSeven = ({letterVector, color, ...props}) => {
    return (

            <svg version="1.1" id="Camada_1"  x="0px" y="0px"
                viewBox="0 0 72.5 207" enableBackground={'0 0 72.5 207'} >
        
                <g>
                    <path fill={'#E7DFEF'} d="M54,45c-14.4,0-30.6,0-45,0c0,17.5,0,36.5,0,54h9v9c11.3,0,24.7,0,36,0v-9h9c0-17.5,0-36.5,0-54H54z" />
                    <path fill={color} d="M63,36c0,20.6,0,42.4,0,63h-9v9c-11.3,0-24.7,0-36,0v-9H9c0-20.6,0-42.4,0-63H0c0,53.8,0,108.2,0,162h9v9
		c17.5,0,36.5,0,54,0v-9h9c0-53.8,0-108.2,0-162H63z"/>
                    <g>
                        <path d={letterVector}/>
                    </g>
                </g>
            </svg>


  
    );
}
export default BookComponentSizeSeven;