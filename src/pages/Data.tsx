import  { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../app/store'
import { fetchProducts } from '../reducers/products/productsActions'
// import { Product } from '../reducers/products/types'
import { Table, Spinner, Alert, Form, Pagination } from 'react-bootstrap'
import type { Product } from '../interface/products'

const Data = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { products, loading, error } = useSelector((state: RootState) => state.products)

  // Local state for search and pagination
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // Filter logic
  const filteredProducts = products.filter((p: Product) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page: number) => setCurrentPage(page)

  return (
    <div>
      <h2>Products</h2>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Control
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          setCurrentPage(1) // Reset to first page on search
        }}
        className="mb-3"
      />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price.toFixed(2)}</td>
              <td>{p.category}</td>
              <td>{p.description}</td>
              <td>
                <img src={p.image} alt={p.title} width={50} />
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
