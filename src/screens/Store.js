import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Item from '../components/Item'
import dark from '../assets/products/DarkRoast.png'
import light from '../assets/products/LightRoast.png'
import hoodie from '../assets/products/Hoodie.png'
import shirt from '../assets/products/Shirt.png'

const ITEMS = [
  {
      id: "10001",
      title: "Dark Roast",
      price: "15.99",
      url: dark
  },
  {
      id: "10002",
      title: "Light Roast",
      price: "15.99",
      url: light
  },
  {
      id: "10003",
      title: "Hellwach Hoodie",
      artist: "Deeper",
      price: "64.99",
      url: hoodie

  },
  {
      id: "10004",
      title: "Hellwach T-Shirt",
      price: "32.99",
      url: shirt
  },
]

const Store = () => {
  return (
    <Row>
        {ITEMS?.map((item, index) => {
          return <Col sm='4'><Item item={item} key={index}></Item></Col>
        })}
      </Row>
  )
}

export default Store