import React from 'react'

const Bundle = (props) => {
    return(
        <div className={`w-11/12 text-black rounded-lg min-h-16 flex box-border py-4 px-2 transition-colors cursor-pointer ${props.bundle[props.i]? 'bg-violet-200 border-solid border-2 border-violet-500' : 'bg-white border-solid border-2 border-violet-400'}`} onClick={() => props.setBundle({1: props.uno, 2: props.dos, 3: props.tres})}>
            <span className='flex basis-1/4 justify-center items-center'>
                <span className='h-5 w-5 bg-white rounded-full border-2 border-violet-500' style={props.bundle[props.i]? {backgroundColor: "#7069bc", border: "2px solid white"} : {backgroundColor: "white", border: "2px solid #7069bc"}}></span>
            </span>
            <span className='flex flex-col basis-1/2 justify-center gap-2'>
                <span className='text-xl font-bold'>{props.name}</span>
                <span className='text-sm text-gray-600'>Vous économisez {props.save}€</span>
            </span>
            <span className='flex flex-col basis-1/4 justify-center items-center gap-1'>
                <span className='text-violet-400 font-bold text-lg'>{props.price}€</span>
                <span className='line-through'>{props.initialPrice}€</span>
            </span>
        </div>
    )
}

export default Bundle
