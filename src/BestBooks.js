import axios from 'axios';
import React from 'react';
import { Carousel, Image } from 'react-bootstrap'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  getBooks = async () => {
    const booksData = await axios.get(`${process.env.REACT_APP_PORT}/books`).catch(function (err) { console.log(err) })
    this.setState({
      books: booksData.data
    })
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount() {
    this.getBooks()
  }
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel fade className='w-25'>
            {this.state.books.map((book, idx) => {
              return (
                <Carousel.Item>
                  <Image
                    fluid
                    thumbnail
                    className="d-block w-100"
                    src={book.thumbnail}
                    alt={`slide number${idx}`}
                  />
                  <Carousel.Caption >
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
            }
          </Carousel>

        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
