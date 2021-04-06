/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Form, Button, InputGroup, FormControl, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'

const Filter = ({
  keyword,
  pageNumber,
  category,
  setCategory,
  filter,
  setFilter,
}) => {
  const dispatch = useDispatch()

  const initialOrder = ''
  const initialMinPrice = ''
  const initialMaxPrice = ''
  const initialRating = 0

  const [orderBy, setOrderBy] = useState(initialOrder)
  const [minPrice, setMinPrice] = useState(initialMinPrice)
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice)
  const [rating, setRating] = useState(initialRating)

  useEffect(() => {
    dispatch(
      listProducts(
        keyword,
        pageNumber,
        orderBy,
        category,
        minPrice,
        maxPrice,
        rating
      )
    )
  }, [dispatch, keyword, pageNumber, filter, orderBy])

  const smColWidth = 6
  const mdColWidth = 3

  const clearFilters = () => {
    setOrderBy(initialOrder)
    setCategory('')
    setMinPrice(initialMinPrice)
    setMaxPrice(initialMaxPrice)
    setRating(initialRating)
    // triggers useEffect
    setFilter((current) => !current)
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        setFilter((current) => !current)
      }}
    >
      <Form.Row className='align-items-center'>
        <Col sm={smColWidth} md={mdColWidth}>
          <Form.Control
            as='select'
            onChange={(e) => setCategory(e.target.value || '')}
            value={category}
          >
            {['Category', 'Vegan', 'Vegetarian'].map((cat, i) => (
              <option key={cat} value={i ? cat : ''}>
                {cat}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col sm={smColWidth} md={mdColWidth}>
          <Form.Control
            as='select'
            onChange={(e) => setRating(Number(e.target.value))}
            value={rating}
          >
            {['Rating', ...[...Array(5).keys()].map((i) => i + 1)].map(
              (rat, i) => (
                <option key={rat} value={rat}>{`Rating${
                  i ? `: ${rat}` : ''
                }`}</option>
              )
            )}
          </Form.Control>
        </Col>
        <Col sm={smColWidth} md={mdColWidth}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Min Price</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type='number'
              value={minPrice}
              onChange={(e) => {
                if (e.target.value >= 0) setMinPrice(e.target.value)
              }}
            />
          </InputGroup>
        </Col>
        <Col sm={smColWidth} md={mdColWidth}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Max Price</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type='number'
              value={maxPrice}
              onChange={(e) => {
                if (e.target.value >= 0) setMaxPrice(e.target.value)
              }}
            />
          </InputGroup>
        </Col>
      </Form.Row>
      <Form.Row className='align-items-center my-3'>
        <Col>
          <Form.Check
            onChange={() => setOrderBy('hiPrice')}
            checked={orderBy === 'hiPrice'}
            type='radio'
            label='Highest Price'
            name='sort'
          />
        </Col>
        <Col>
          <Form.Check
            onChange={() => setOrderBy('lowPrice')}
            checked={orderBy === 'lowPrice'}
            type='radio'
            label='Lowest Price'
            name='sort'
          />
        </Col>
        <Col>
          <Form.Check
            onChange={() => setOrderBy('rating')}
            checked={orderBy === 'rating'}
            type='radio'
            label='Best Rating'
            name='sort'
          />
        </Col>
        <Col>
          <Form.Check
            onChange={() => setOrderBy('time')}
            checked={orderBy === 'time'}
            type='radio'
            label='Newest'
            name='sort'
          />
        </Col>
        <Col xs='auto'>
          <Button
            type='button'
            variant='outline-primary'
            onClick={clearFilters}
            className='mx-2'
          >
            Clear
          </Button>
          <Button type='submit'>Filter products</Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default Filter
