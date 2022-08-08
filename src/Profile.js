import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card, Button } from 'react-bootstrap';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    console.log(user)
    return isAuthenticated &&
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.picture} />
            <Card.Body>
                <Card.Title>Hello {user.name}</Card.Title>
                <Card.Text>
                    Last Vist : {user.updated_at}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

}

export default Profile;