import React, {Component} from 'react';
import { Row, Col, CardPanel , Container} from 'react-materialize'
const API = "/data"

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hits: [],
        };
    }
    text() {
        return "Hello world";
    }
  
    componentDidMount() {
        try {
        fetch(`${API}?name=${window.location.href.split('#')[1]}`)
        .then(response => response.json())
        .then(data => this.setState({ hits: data }))
        .catch(e =>  this.setState({ hits: "An error occured while requesting data" }) );
        } catch(e) {
            this.setState({ hits: "An error occured while requesting data" })
        }
    }

    render() {
        let data =  this.state.hits;
        
        return (
            <Row>
                <Container>
                <Col  s={12}>
                    <CardPanel className="black">
                    
                     <p  className="justify white-text">
                        {data}
                     </p>
                    </CardPanel>
                </Col>
                </Container>
            </Row>
        );
    }
}

export default Projects;