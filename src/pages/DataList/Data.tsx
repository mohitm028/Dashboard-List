import  { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../../app/store'
import { fetchProducts,fetchCategories, fetchProductsByCategory} from '../../reducers/products/productsActions'
import { Table, Spinner, Alert, Form, Pagination } from 'react-bootstrap'

import "./index.css"

import type { Product } from '../../interface/products'
import { limitNameWithLength } from '../../utils/commonUtils'
import { toast } from 'react-toastify'

const Data = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { products, loading, error,categories } = useSelector((state: RootState) => state.products)

  // Local state for search and pagination
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  

  // Filter logic is here 
  const filteredProducts = products.filter((p: Product) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Pagination logic is here 
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const category = e.target.value
  setCurrentPage(1)
  if (category === '') {
    dispatch(fetchProducts())
  } else {
    dispatch(fetchProductsByCategory(category))
  }
}

  const handlePageChange = (page: number) => setCurrentPage(page)

useEffect(() => {
    dispatch(fetchProducts())
  dispatch(fetchCategories()) 
  }, [dispatch])

  useEffect(() => {
  if (error) {
    toast.error(error)
  }
}, [error])



  return (
    <div>
      <h2>Products</h2>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

    <div className="product-controls mb-3">
  <Form.Control
    type="text"
    placeholder="Search by title..."
    value={searchTerm}
    onChange={(e) => {
      setSearchTerm(e.target.value)
      setCurrentPage(1)
    }}
    className="search-input"
  />

  <Form.Select onChange={handleCategoryChange} className="category-select">
    <option value="">All Categories</option>
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </Form.Select>
</div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
    <th className="col-sn">S.N</th>
    <th className="col-title">Title</th>
    <th className="col-price">Price ($)</th>
    <th className="col-category">Category</th>
    <th className="col-description">Description</th>
    <th className="col-image">Image</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product,productIndex) => (
             <tr key={product.id}>
      <td className="col-sn">{productIndex}</td>
      <td className="col-title">{product.title}</td>
      <td className="col-price">{product.price.toFixed(2)}</td>
      <td className="col-category">{product.category}</td>
      <td className="col-description">{limitNameWithLength(product.description,200)}</td>
      <td className="col-image">
        <img src={product.image} alt={product.title} width={50} />
      </td>
    </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </div>
  )
}

export default Data
