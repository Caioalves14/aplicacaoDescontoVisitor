import React, {Component} from 'react'
import "./Home.css"
import Eletronicos from "../assets/eletronicos.jpg"
import Livros from "../assets/livro.jpg"

const Home = () => {


  return (
    <div className='container'>
      <div className='header'>
        <div className='logo'>
          Loja Visitor
        </div>
      </div>
      <div className='produtos'>
        <div className='livro'>
          <a href="livros">
            <button className='button'>
              <img src={Livros} style={{maxHeight: "236px"}}/>
              Descontos em Livros
            </button>
          </a>
        </div>
        <div className='eletronicos'>
          <a href="eletronicos">
            <button className='button'>
              <img src={Eletronicos}/>
              Descontos em Eletrônicos
            </button>
          </a>
        </div>
      </div>
      <div className='footer'>
        <p>A Loja Visitor agradece a sua visita!</p>
      </div>
    </div>
  )
}

export default Home