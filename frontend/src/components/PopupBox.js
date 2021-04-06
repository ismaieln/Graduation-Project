import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Message from './Message'

const PopupBox = ({ show, onHide, onConfirm, title, header, content }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{header}</h5>
        <div className='my-4'>
          <Message variant='danger'>{content}</Message>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        <Button variant='danger' onClick={onConfirm}>
          Cancel Subscription
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PopupBox
