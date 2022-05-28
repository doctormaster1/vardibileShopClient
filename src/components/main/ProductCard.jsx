import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

export default class ProductCard extends Component {
  render() {
    return (
      <div>
          <Card>
              <Card.Img src="https://res.cloudinary.com/dn1fkwof5/image/upload/v1653564264/products/tmp-1-1653564262669_tvcci8.jpg" variant="top" />
              <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>Lorem ipsum</Card.Text>
              </Card.Body>
          </Card>
      </div>
    )
  }
}
