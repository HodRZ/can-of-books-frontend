import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


class AddBookModal extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            'title': e.target.bookTitle.value,
            'description': e.target.description.value,
            'status': e.target.status.value,
            'thumbnail': e.target.thumbnail.value
        }

        this.props.addBook(data);
    }
    cancel = (e) => {
        e.preventDefault();
        this.props.cancel();
    }
    render() {
        return (
            <Modal
                show={this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Header >
                        <Form.Group className="mb-3" controlId="bookTitle">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Book Title" />
                        </Form.Group>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Book description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Book description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="thumbnail">
                            <Form.Label>Book Thumbnail URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter Thumbnail URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='status'>
                            <Form.Label>Book Status</Form.Label>
                            <Form.Select >
                                <option>Published</option>
                                <option>Unpublished</option>
                            </Form.Select>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                        <Button variant="light" onClick={this.cancel}>
                            cancel
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

export default AddBookModal;