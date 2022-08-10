import axios from 'axios';
import React from 'react';
import { Button, Carousel, Image } from 'react-bootstrap'
import AddBookModal from './addBookModal';
import EditBookModal from './editBookModal';
import { LinkContainer } from 'react-router-bootstrap'
import { Outlet } from 'react-router-dom';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      showEdit: false,
    }
  }

  addBook = async (data) => {
    this.setState({
      showModal: false,
    })

    await axios.post(`${process.env.REACT_APP_PORT}/books`, { data }).catch(function (err) { console.log(err) })
    this.getBooks()
  }

  onModalshow = () => {
    this.setState({
      showModal: true,
    })
  }
  onEditshow = () => {
    this.setState({
      showEdit: true,
    })
  }

  getBooks = async () => {
    const booksData = await axios.get(`${process.env.REACT_APP_PORT || 'http://localhost:3001'}/book`).catch(function (err) { console.log(err) })
    this.setState({
      books: booksData.data
    })
  }
  onCancelAdd = () => {
    this.setState({
      showModal: false,
    })
  }

  deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/book/${id}`);
    this.getBooks()
  }

  componentDidMount() {
    this.getBooks()
  }
  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <>
            <Carousel fade className='w-50'>
              {this.state.books.map((book, idx) => {
                return (
                  <Carousel.Item>
                    <Image
                      fluid
                      thumbnail
                      className="d-block w-100"
                      src={`${book.thumbnail || 'holder.js/400x400?text=slide&bg=373940'} `}
                      alt={`slide number${idx}`}
                    />
                    <Carousel.Caption >
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <Button variant="dark" onClick={() => this.deleteBook(book._id)}>
                        Delete
                      </Button>
                      <LinkContainer to={`/book/${book._id}`}>
                        <Button variant="dark" onClick={this.onEditshow}>
                          Edit
                        </Button>
                      </LinkContainer>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
              }
            </Carousel>
            <Button variant="dark" onClick={this.onModalshow}>
              Add Book
            </Button>
            <Outlet />
            <AddBookModal addBook={this.addBook} show={this.state.showModal} cancel={this.onCancelAdd} />
            {this.state.showEdit &&
              <EditBookModal />}

          </>

        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
