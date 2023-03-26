import './App.css';
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  return (
    <div>
    <CardGroup>
      {/* Left-side card */}
      <Card >
        <Card.Img variant="top" src="./photo1.png" />
        <Card.Body>
          <br />
          <Card.Title style={{textAlign: "center" }}><b>Paula Huhu</b></Card.Title>
          <Card.Title style={{color: "grey", fontSize: "medium", textAlign: "center" }}>Aspiring Web Developer</Card.Title>
          <Card.Text>
            {/* Info list */}
            <ListGroup className='list'>
              <ListGroup.Item><i class="fa-solid fa-location-dot"></i> London, United Kingdom</ListGroup.Item>
              <ListGroup.Item><i class="fa-solid fa-phone"></i> 07754194686</ListGroup.Item>
              <ListGroup.Item><i class="fa-solid fa-envelope"></i> <a target={'_blank'}  rel="noreferrer" href="mailto: huhupaula@yahoo.com">huhupaula@yahoo.com</a></ListGroup.Item>
              <ListGroup.Item><i class="fa-brands fa-linkedin"></i> <a target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/in/paula-huhu/"> LinkedIn Profile</a></ListGroup.Item>
              <ListGroup.Item><i class="fa-brands fa-github"></i> <a target={'_blank'} rel="noreferrer" href="https://github.com/PaulaHh"> Github Profile</a></ListGroup.Item>
              <ListGroup.Item><i class="fa-solid fa-folder-open"></i> <a target={'_blank'} rel="noreferrer" href="https://www.hyperiondev.com/portfolio/125983/"> HyperionDev Portfolio</a></ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* Right-side card */}
      <Card className='about-card'>
        <Card.Body>
          {/* section 1- About */}
          <Card.Title><i className='fa fa-sm fa-user'></i> About</Card.Title>
          <Card.Text>
            Determined to learn and grow in the tech industry.
            I'm eager to start my career in Web Development and contribute to the reliability and efficiency of websites.
          </Card.Text>
          {/* section 2- Education */}
          <Card.Title><i class="fa-solid fa-user-graduate"></i> Education</Card.Title>
          <Card.Text>
            <ul className='a'>
              <li><b>Web development certificate</b> | HyperionDev Bootcamp - United Kingdom</li>
            </ul>
            <ul className='b'>
              <li>Full Stack Web Development (Currently enrolled)</li>
              <li>Pursuing a career in technology</li>
            </ul>
            <hr />
            <ul className='a'>
              <li><b>Diploma of higher education</b> | "Alexandru Ioan Cuza'' University - Romania</li>
            </ul>
            <ul className='b'>
              <li>Degree in Banking & Finance</li>
              <li>Working towards a bachelor's degree</li>
            </ul>
          </Card.Text>
          {/* section 3- Work experience */}
          <Card.Title><i class="fa-solid fa-briefcase"></i> Work experience</Card.Title>
          <Card.Text>
            <Card.Footer>
              <small className="text-muted">June 2021-August 2021</small>
            </Card.Footer>
            <b>UniCredit Bank, Romania - Customer Service Advisor</b>
            <p>Internship in the Outbound department at a prestigious bank in Romania, delivering great customer service.</p>
            <ul>
              <li>Manage phone inquiries and transfer them to the right department</li>
              <li>Digitalization of customers</li>
              <li>Promote banking products (credit cards, credits, overdraft etc.)</li>
              <li>Assisting clients with the banking app</li>
              <li>Setting up the app</li>
              <li>Collect feedback from clients</li>
              <li>Provide product knowledge</li>
            </ul>
          </Card.Text>
          {/* section 4- Skills */}
          <Card.Title><i class="fa-solid fa-terminal"></i> Skills</Card.Title>
          <Card.Text>
            <b>Technical skills</b>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJS</li>
              <li>Microsoft Office Suite</li>
              <li>Basic Tableau</li>
            </ul>
            <b>Soft skills</b>
            <ul>
              <li>Problem solving</li>
              <li>Organizational skills</li>
              <li>Adaptability</li>
              <li>Time management</li>
              <li>Communication</li>
              <li>Teamwork</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}

export default App;
