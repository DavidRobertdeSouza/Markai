import React from 'react'
import Termos from './src/Pages/Termos/termos'
import Login from './src/Pages/Login/login'
import TipoCadastro from './src/Pages/TipoCadastro/tipocadastro'
import CadastroCriado from './src/Pages/CadastroCriado/cadastrocriado'
import Step8E from './src/Pages/CadastroEmpresa/Step8e/step8e'
import Routes from './src/Pages/routes'

export default function App(){
  console.disableYellowBox = true
  return(
    <Routes/>
  )
}