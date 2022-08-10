import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'



export default function EditBookModal() {

    const { id } = useParams();
    const [book, setBook] = useState();

    async function fetchData() {
        const { data } = await axios.get(`http://localhost:3001/book/${id}`).catch(function (error) { console.log(error) })
        setBook(data)
    }

    const updateBook = async (e) => {
        const data = {
            'title': e.target.bookTitle.value,
            'description': e.target.description.value,
            'status': e.target.status.value,
            'thumbnail': e.target.thumbnail.value
        }
        await axios.put(`http://localhost:3001/book/${id}`, { data })
    }

    useEffect(() => {
        fetchData();
    })
    return (
        <Card style={{ width: '18rem' }}>
            <Form onSubmit={updateBook}>
                <Card.Img variant="top" src={book?.thumbnail} />
                <Card.Body>
                    <Card.Title>
                        <Form.Group className="mb-3" controlId="bookTitle">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control type="text" value={book?.title} />
                        </Form.Group>
                    </Card.Title>
                    <Card.Text>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Book description</Form.Label>
                            <Form.Control type="text" value={book?.description} />
                        </Form.Group>
                    </Card.Text>
                    <Card.Text>
                        <Form.Group className="mb-3" controlId="thumbnail">
                            <Form.Label>Book Thumbnail URL</Form.Label>
                            <Form.Control type="text" value={book?.thumbnail} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='status'>
                            <Form.Label >Book Status : {book?.status}</Form.Label>
                            <Form.Select value={book?.status}>
                                <option>Published</option>
                                <option>Unpublished</option>
                            </Form.Select>
                        </Form.Group>
                    </Card.Text>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Card.Body>
            </Form>
        </Card>


    );
}

// <Modal
//             show='true'
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Form onSubmit={updateBook}>
//                 <Modal.Header >
//                     <Form.Group className="mb-3" controlId="bookTitle">
//                         <Form.Label>Book Title</Form.Label>
//                         <Form.Control type="text" placeholder={book.title} />
//                     </Form.Group>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Group className="mb-3" controlId="description">
//                         <Form.Label>Book description</Form.Label>
//                         <Form.Control type="text" placeholder={book.description} />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="thumbnail">
//                         <Form.Label>Book Thumbnail URL</Form.Label>
//                         <Form.Control type="text" placeholder={book.thumbnail} />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId='status'>
//                         <Form.Label>Book Status : {book.status}</Form.Label>
//                         <Form.Select >
//                             <option>Published</option>
//                             <option>Unpublished</option>
//                         </Form.Select>
//                     </Form.Group>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Modal.Footer>
//             </Form>
//         </Modal>