import React from 'react'
import Dish from '../Dish/Dish'

const Menu = () => {
  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]
  return (
    <>
      {dishes.map((dish)=>{
       return <Dish name={dish.name} number={dish.id} description={dish.description} price={dish.price}/>
      })}
    </>
  )
}

export default Menu