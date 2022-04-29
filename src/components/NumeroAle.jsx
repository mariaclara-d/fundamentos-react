import React from "react";

export default (props)=>{
    const min = props.min
    const max = props.max
    const aleatorio= parseInt(Math.random() * (max - min) + min) 
    return(
        <div>
            <p><strong>Número mínimo: </strong>{min}</p>
            <p><strong>Número Máximo: </strong>{max}</p>
            <p><strong>Número aleatório: </strong>{aleatorio}</p>
        </div>
        

    )

}