import React, {Component} from 'react';
import { Row, Col, Card , CardTitle} from 'react-materialize'
import ListItem from './ListItem';

class PenPic extends Component {
    text() {
        return "Hello world";
    }
    cardTitle() {
        return (
            <CardTitle image={this.props.img} style={{ width:"50%" }} >
                <h5 className="penPicHeader"> About </h5>
                <hr />
                <p className="penPicText">
                        Highly skilled consultant with agile and waterfall project experiance as a full stack developer, design thinking lead, product officer and architect. 
                        These skills have been developed through hands on experiance and personal development, yet I also contain a 1st Class Degree in Computer Science.
                </p>
            </CardTitle>
        )
    }
    render() {
        return (
            <Row id={this.props.id}>
            <Col m={12} s={12}>
            <Card style={{ backgroundColor:"black" }} horizontal header={this.cardTitle()} >
                <h5 className="penPicHeader">Strategy / Technology Consultant</h5>
                <Row >
                    <Col  m={6} s={12}>
                    <Row className="removeMargin">
                    <h6>Key Skills</h6>
                    <hr />
                    <ul className="penPicText"> 
                        <li> Cloud Services</li>
                        <li> IoT </li>
                        <li> Data Science </li>
                        <li> Agile</li>
                        <li> Blockchain</li>
                        <li> Design Thinking</li>
                    </ul>
                    </Row>
                    <Row className="removeMargin">
                    <h6> Technical Skills </h6>
                    <hr />
                    <ul className="penPicText"> 
                        <ListItem title="Javascript (NodeJS, ReactJS, VueJS)" description="Thought leader in Front end or backend development" />
                        <ListItem title="Databases (Blockchain, SQL, NoSQl)" description="Thought leader in databases and data understanding" />
                        <ListItem title="Public Sector Specialist" description="Thought leader in public sector technology deliverables" />
                        <ListItem title="Programming Langauges Specialist" description="C#, Java, C++, C, python, JS and PHP" />

                    </ul>
                    
                    </Row>
                    </Col>
                    <Col  m={6} s={12}>
                    <Row className="removeMargin">
               
                    <h6>Projects</h6>
                    <hr />
                    <ul className="penPicText"> 
                        <ListItem title="A UK Bank" description="Delivered technical training." />
                        <ListItem title="A UK Health Provier" description="Delivered a Machine learning Blockchain solution." />
                        <ListItem title="A Small Startup Company" description="Became product officer for the website." />
                        <ListItem title="A Telecom Provider" description="Delivered a chatbot assistant to improve customer service." />
                        <ListItem title="A Oil and Gas Company" description="Delivered a website for internal use." />
                        <ListItem title="General Overview" description="Almost 40 successful projects delivered which I have supported or lead." />
                    </ul>
                    </Row>
                    <Row className="removeMargin">
                   
                    </Row>
                    </Col>
                </Row>
            </Card>
               
            </Col>

           
            </Row>
        );
    }
}

export default PenPic;