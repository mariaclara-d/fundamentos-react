import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import Fragmento from './components/Fragmento'
import NumeroAle from './components/NumeroAle'
import Cartao from './components/layout/Cartao'
import './App.css'


export default () => {

    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className = "card">
                <Cartao titulo="Primeiro componente" cor="pink">
                    <Primeiro></Primeiro>
                </Cartao>

                <Cartao titulo="Com Parâmetros" cor="green">
                    <ComParametro titulo="Hoje é quarta-feira" subtitulo='Véspera de feriado' />
                </Cartao>

                <Cartao titulo="React Fragment" cor="blue">
                    <Fragmento />
                </Cartao>

                <Cartao titulo= "Números aleatórios" cor="orange"> 
                    <NumeroAle min={1} max={10} />
                </Cartao>




            </div>
        </div>
    )
}