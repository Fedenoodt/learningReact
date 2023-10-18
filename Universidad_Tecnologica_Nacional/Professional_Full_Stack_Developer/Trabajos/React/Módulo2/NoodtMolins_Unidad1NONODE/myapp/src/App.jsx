import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateBuy from './buy.jsx'

const celular = ['Celular', 'https://th.bing.com/th/id/OIP.5IJeb84Ph-MQNbpm8PUmngHaHa?pid=ImgDet&rs=1', 'LC28794TT', 'Nokia X2-01. Excelente teléfono de bajo costo. Ya no soporta Whatsapp, pero es un veterano de muchas guerras.', '$825', 24];

const name = celular[0]
const image = celular[1]
const sku = celular[2]
const description = celular[3]
const price = celular[4]
const available = celular[5]

console.log('name', name)
console.log('image', image)
console.log('sku', sku)
console.log('description', description)
console.log('price', price)
console.log('available', available)

function caller(parameter) {
  return <div className='nameProductBox'>
    <h2>{parameter}</h2>
  </div>;
}
console.log('caller', caller(name))

function productBox(parameter) {
  return <div className='buyButton productBox'>
    <h3>{parameter}</h3>
  </div>;
}

function productIMG(parameter) {
  return <div className='productIMG'>
    <img src={parameter} alt="imgProduct" />
  </div>;
}

const product = [caller(name), productIMG(image), productBox(price), productBox(description), productBox(`Cantidad disponible: ${available} unidades.`), productBox(`ID del producto: ${sku}.`)];


const returner = [product, <div className='buyButton exeption'><h3><StateBuy /></h3></div>];

function App() {

  return (
    returner
    )
}

export default App