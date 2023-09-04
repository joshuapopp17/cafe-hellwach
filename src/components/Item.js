import React from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

  return (
    <Stack gap={1} className='mb-5'>
        <Link>
            <img
              alt=""
              src={item.url}
              className="d-inline-block align-top"
              width={'100%'}
            />
        </Link>
        <h2>{item.title}</h2>
        <h5>${item.price} + tax</h5>
        <Stack gap={2}>
            <Button style={{borderWidth: 2,borderColor: '#594A42'}} variant='outlined'>Add to cart</Button>
        </Stack>
    </Stack>
  )
}

export default Item