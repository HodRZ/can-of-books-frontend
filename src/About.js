import { Component } from "react";
import { Card } from 'react-bootstrap'

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://avatars.githubusercontent.com/u/79405838?s=400&u=0d0219ca8c1c5e7d4c49a850c27501c344ec7e21&v=4' />
      <Card.Body>
        <Card.Title>Hodaifa Zawahreh</Card.Title>
        <Card.Text>
          changing the world, on line at a time
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  }
};

export default Profile;
