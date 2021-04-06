import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Bundly from '../components/Bundly'
import BundleCategory from '../components/BundleCategory'
import Meta from '../components/Meta'
import Filter from '../components/Filter'
import GoogleMap from '../components/GoogleMap'
import farmeDetails from '../farmeDetails'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [apikey, setApiKey] = useState('')
  const [isloading, setIsLoading] = useState(false)
  const [haserror, setHasError] = useState(false)

  const userSubscriptionStatus = useSelector(
    (state) => state.userSubscriptionStatus
  )
  const { success: userStatus } = userSubscriptionStatus

  // filtering categories
  const [categoryFilter, setCategoryFilter] = useState('')
  const [filter, setFilter] = useState(true)
  const filterCategory = (category) => {
    setCategoryFilter(category)
    setFilter((current) => !current)
  }

  useEffect(() => {
    const getApiKey = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get('/api/config/googleMap')
        if (data) {
          setApiKey(data)
        } else {
          throw new Error('failed to fetch the api key')
        }
      } catch (error) {
        console.log(error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getApiKey()
  }, [keyword, pageNumber, apikey, products, productList, userStatus])

  return (
    <>
      <Meta />
      {keyword && (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}

      {((!userInfo && !keyword) ||
        (userInfo?.status !== 'active' && !keyword)) && <Bundly />}

      <h1 id='heading-latest-products' className='homepage-headings my-5'>
        Latest Products
      </h1>
      <Filter
        keyword={keyword}
        pageNumber={pageNumber}
        category={categoryFilter}
        setCategory={setCategoryFilter}
        filter={filter}
        setFilter={setFilter}
      />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : !products || products.length === 0 ? (
        <h4>No bundles found</h4>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
      <>
        {isloading ? (
          <Loader />
        ) : haserror ? (
          <Message variant='danger'>Error in loading the map</Message>
        ) : (
          apikey &&
          !keyword && (
            <>
              <h1 className='homepage-headings my-5'>Farms Locations</h1>
              <GoogleMap data={farmeDetails} apikey={apikey} />
              <h1 className='homepage-headings my-5'>Bundle Categories</h1>
              <Row>
                <BundleCategory filterCategory={filterCategory} />
              </Row>
            </>
          )
        )}
      </>
    </>
  )
}

export default HomeScreen
