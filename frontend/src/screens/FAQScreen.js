import React, { useState } from 'react'
import {
  Badge,
  Button,
  Card,
  Col,
  Collapse,
  Container,
  Navbar,
  Row,
} from 'react-bootstrap'

const faqs = [
  {
    question: 'When I subscribe it does not show in my subscriptions?',
    answer:
      'To see your subscriptions details you have to proceed with the payment, then you will be able to see your subscriptions details.',
  },
  {
    question: 'How I can place an order?',
    answer: `
    1- You have to be logged in first.  
    2- go to select a plan, choose the suitable bundle for you then select the number of your family members and weekly requirement, then press select this button, which will drive you to the cart. 
    3- review your order and  press proceed to check out. 
    4- enter your address details, then press continue. 
    5-choose payment methods. 
    6-review your address details, then place the order. 
    7- proceed with payment, then you will receive a confirmation email of your order.`,
  },
  {
    question: 'Can I cancel my order?',
    answer:
      'Yes, but the order will be canceled after one week from the end of the current week',
  },
]

const FAQScreen = ({ history }) => {
  const [openA, setOpenA] = useState(false)
  const [openB, setOpenB] = useState(false)
  const [openC, setOpenC] = useState(false)

  return (
    <>
      <Button
        className='btn btn-light my-3'
        onClick={() => {
          history.goBack()
        }}
      >
        Go Back
      </Button>
      <Navbar className='faq rounded' variant='light' expand='lg'>
        <h1>
          <Badge className='faqb'>Frequently Asked Questions</Badge>
        </h1>
      </Navbar>

      <Container>
        <Card className='shadow px-3 my-4'>
          <Row
            className='btn-outline-success rounded justify-content-between'
            onClick={() => setOpenA(!openA)}
            aria-controls='example-collapse-one'
            aria-expanded={openA}
          >
            <Col md={10}>
              <h2 className='faqRow'>{faqs[0].question}</h2>
            </Col>
            {!openA ? (
              <Col md={1}>
                <i className='fas  fa-arrow-down   mobileArrow'></i>
              </Col>
            ) : (
              <Col md={1}>
                <i className='fas fa-arrow-up mobileArrow'></i>
              </Col>
            )}
          </Row>
          <Collapse in={openA}>
            <div id='example-collapse-one'>
              {faqs[0].answer}
              <hr />
              <hr />
              <h2>
                Has this answer helped you?{' '}
                <Button variant='light' onClick={() => alert('thank you')}>
                  <span role='img' aria-label='example-collapse-one'>
                    &#128077;
                  </span>
                </Button>
                <Button
                  variant='light'
                  onClick={() =>
                    alert(
                      'Please send us a feed back on our info email: info@bundly.com '
                    )
                  }
                >
                  <span role='img' aria-label='example-collapse-one'>
                    &#128078;
                  </span>
                </Button>
              </h2>
            </div>
          </Collapse>
        </Card>
        <Card className='shadow px-3 mb-4'>
          <Row
            className='btn-outline-success rounded justify-content-between'
            onClick={() => setOpenB(!openB)}
            aria-controls='example-collapse-two'
            aria-expanded={openB}
          >
            <Col md={10}>
              <h2 className='faqRow'>{faqs[1].question}</h2>
            </Col>
            {!openB ? (
              <Col md={1}>
                <i className='fas fa-arrow-down   mobileArrow'></i>
              </Col>
            ) : (
              <Col md={1}>
                <i className='fas fa-arrow-up   mobileArrow'></i>
              </Col>
            )}
          </Row>
          <Collapse in={openB}>
            <div id='example-collapse-two'>
              {faqs[1].answer}
              <hr />
              <hr />
              <h2>
                Has this answer helped you?{' '}
                <Button variant='light' onClick={() => alert('thank you')}>
                  <span role='img' aria-label='example-collapse-two'>
                    &#128077;
                  </span>
                </Button>
                <Button
                  variant='light'
                  onClick={() =>
                    alert(
                      'Please send us a feed back on our info email(info@bundly.com)'
                    )
                  }
                >
                  <span role='img' aria-label='example-collapse-two'>
                    &#128078;
                  </span>
                </Button>
              </h2>
            </div>
          </Collapse>
        </Card>
        <Card className='shadow px-3 mb-4 '>
          <Row
            className='btn-outline-success rounded justify-content-between'
            onClick={() => setOpenC(!openC)}
            aria-controls='example-collapse-three'
            aria-expanded={openC}
          >
            <Col md={10}>
              <h2 className='faqRow'>{faqs[2].question}</h2>
            </Col>
            {!openC ? (
              <Col md={1}>
                <i className='fas fa-arrow-down  mobileArrow'></i>
              </Col>
            ) : (
              <Col md={1}>
                <i className='fas fa-arrow-up   mobileArrow'></i>
              </Col>
            )}
          </Row>
          <Collapse in={openC}>
            <div id='example-collapse-three'>
              {faqs[2].answer}
              <hr />
              <hr />
              <h2>
                Has this answer helped you?{' '}
                <Button variant='light' onClick={() => alert('thank you')}>
                  <span role='img' aria-label='example-collapse-three'>
                    &#128077;
                  </span>
                </Button>
                <Button
                  variant='light'
                  onClick={() =>
                    alert(
                      'Please send us a feed back on our info email(info@bundly.com)'
                    )
                  }
                >
                  <span role='img' aria-label='example-collapse-three'>
                    &#128078;
                  </span>
                </Button>
              </h2>
            </div>
          </Collapse>
        </Card>
      </Container>
    </>
  )
}

export default FAQScreen
