import React from 'react'
import './Cartao.css'

export default (props)=>{
    const cordocartao ={
        backgroundColor: props.cor,
        borderColor: props.cor
    }

    return (
        <div className='cartao' style={cordocartao}>
            <div className="titulo"> {props.titulo} </div>
            <div className= "conteudo">{props.children}</div>
        </div>



    )

}