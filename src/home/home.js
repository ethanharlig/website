import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import meAndTommy from '../img/me-and-tommy.jpg';

const Home = props => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Ethan Harlig</h1>
      <Card>
        <CardBody>
          <CardImg src={meAndTommy} />
          <CardText>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>
                  So just who the heck are you and who do you think you are
                  putting a huge picture of you and your dog up there?
                </ListGroupItemHeading>
                <ListGroupItemText>
                  Howdy! My name is Ethan Harlig and I am a fourth-year student
                  studying computer science at California Polytechnic State
                  University, San Luis Obispo.
                </ListGroupItemText>
                <ListGroupItemText>
                  I am also an Associate Software Developer at
                  <a href="http://www.thinglogix.com"> ThingLogix</a>, an IoT
                  company. I architect and develop Internet of Things solutions
                  built on AWS.
                </ListGroupItemText>
                <ListGroupItemText>
                  I have a wonderful 12-year old dog named Tommy (pictured
                  above) who loves to sleep all day while I code. His
                  aspirations in life are to eat as much human food as possible,
                  and sleep in as many places as possible.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>
                  Neat! So what technologies do you know?
                </ListGroupItemHeading>
                <ListGroupItemText>
                  I'm glad you asked! I am proficient with:
                  <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Typescript</li>
                    <li>C (unfortunately)</li>
                    <li>AngularJS</li>
                    <li>Angular 2+</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                  </ul>
                  And I dabble with:
                  <ul>
                    <li>Node.js</li>
                    <li>ReactJS (this site)</li>
                    <li>NativeScript</li>
                  </ul>
                  I also work a lot with AWS, specifically:
                  <ul>
                    <li>Lambda</li>
                    <li>API Gateway</li>
                    <li>DynamoDB</li>
                    <li>IoT</li>
                    <li>S3</li>
                    <li>Kinesis</li>
                    <li>And more!</li>
                  </ul>
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>
                  Dang wow; that's a lot! Tell me about your personal projects.
                </ListGroupItemHeading>
                <ListGroupItemText>
                  I have recently been heavily invested in a personal project,
                  <a href="https://ridetrackr.io"> RideTrackr</a>, where I lead
                  backend development and worked on the frontend in conjunction
                  with
                  <a href="https://github.com/collindutter"> Collin Dutter</a>.
                </ListGroupItemText>
                <ListGroupItemText>
                  I also write a bunch of code, but a lot of it tends to be
                  small scripts, like Slack bots, that I don't end up uploading
                  to my
                  <a href="https://github.com/ethanharlig"> GitHub</a>.
                </ListGroupItemText>
                <ListGroupItemText>
                  If you are interested in checking out more of my projects,
                  mosey on over to my <a href="/projects"> projects</a> page!
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>
                  Holy moly you sound like someone I want to talk to. Just how
                  the heck do I reach you?
                </ListGroupItemHeading>
                <ListGroupItemText>
                  If you like what you see, or you are interested in
                  collaborating on anything, feel free to
                  <a href="mailto:ethan.harlig@gmail.com"> email me</a> and we
                  can talk!
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
