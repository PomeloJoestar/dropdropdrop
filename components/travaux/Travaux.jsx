import React from "react";

const Travaux = (props) => {

    return(
        <div className='h-full w-full'>
            <span className='w-full flex flex-col justify-center items-center py-6 px-5 gap-3'>
                🚧 {props.label} 🚧
            </span>
        </div>
    )
}
//s/o stavo pour les travaux 🚧🚧🚧
export default Travaux