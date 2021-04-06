import React, { useState, useEffect } from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import PopupBox from '../components/PopupBox'
import {
  cancelSubscription,
  listMySubscriptions,
} from '../actions/subscriptionActions'
import { updateSubscriptionStatus } from '../actions/userActions'

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch()

  const [modalShow, setModalShow] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const subscriptionListMy = useSelector((state) => state.subscriptionListMy)
  const {
    loading: loadingSubscriptions,
    error: errorSubscriptions,
    subscriptions,
  } = subscriptionListMy

  const subscriptionCancel = useSelector((state) => state.subscriptionCancel)
  const { success: successDelete } = subscriptionCancel

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      dispatch(listMySubscriptions())
    }
  }, [dispatch, history, userInfo, successDelete])

  const handleCancelSubscription = (orderId, mySubscriptionsId) => {
    setModalShow(false)
    dispatch(cancelSubscription(orderId, mySubscriptionsId))
    let subscriptionsCount = 0
    subscriptions.map((order) =>
      order.orderItems.map(() => (subscriptionsCount += 1))
    )
    if (subscriptionsCount === 1) {
      dispatch(updateSubscriptionStatus(userInfo, 'inactive'))
    }
  }
  return (
    <Row>
      <Col md={12}>
        <h2>My Subscriptions</h2>
        {loadingSubscriptions ? (
          <Loader />
        ) : errorSubscriptions ? (
          <Message variant='danger'>{errorSubscriptions}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th></th>
                <th>BUNDLE</th>
                <th>DATE</th>
                <th>SIZE</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>PREFERENCES</th>
                <th>ADDRESS</th>
                <th>CANCEL</th>
              </tr>
            </thead>
            {subscriptions.map((order) => (
              <tbody key={order._id}>
                {order.orderItems.map((mySubscriptions) => (
                  <tr key={mySubscriptions._id}>
                    <td>
                      <img
                        src={mySubscriptions.image}
                        alt={mySubscriptions.name}
                        width='50px'
                        height='30px'
                      />
                    </td>
                    <td>{mySubscriptions.name}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{mySubscriptions.size} People</td>
                    <td>{mySubscriptions.qty} / Week</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      <LinkContainer
                        to={`/plan/${order._id}/${mySubscriptions._id}`}
                      >
                        <Button className='btn-sm' variant='light'>
                          Preferences
                        </Button>
                      </LinkContainer>
                    </td>
                    <td>
                      <LinkContainer to={`/shipping/${order._id}`}>
                        <Button className='btn-sm' variant='light'>
                          Address
                        </Button>
                      </LinkContainer>
                    </td>
                    <td>
                      <Button
                        className='btn-sm'
                        variant='danger'
                        onClick={() => setModalShow(true)}
                      >
                        Cancel
                      </Button>
                      <PopupBox
                        show={modalShow}
                        onConfirm={() => {
                          handleCancelSubscription(
                            order._id,
                            mySubscriptions._id
                          )
                        }}
                        onHide={() => setModalShow(false)}
                        title='Subscription Cancellation'
                        header={`Are you sure that you want to cancel your ${mySubscriptions.name} subscription?`}
                        content='If you cancel your subscription, it will be stopped delivered starting from next week.'
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </Table>
        )}
        <p className='my-1'>*Only paid subscriptions will be shown here</p>
      </Col>
    </Row>
  )
}

export default ProfileScreen
