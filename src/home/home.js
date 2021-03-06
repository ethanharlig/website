import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import me from "../img/me.jpg";

const Home = props => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About me</h1>
      <Card>
        <CardBody>
          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
              <CardImg src={me} />
            </div>
          </div>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                Who are you?
              </ListGroupItemHeading>
              <hr />
              <ListGroupItemText>
                Hey there! My name is Ethan Harlig and I am a Software Development Engineer
                at <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" >Amazon Web Services</a> in Seattle.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                So what technologies do you know?
              </ListGroupItemHeading>
              <hr />
              <ListGroupItemText tag="p">
                I am glad you asked! I am proficient with:
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Typescript</li>
                  <li>Angular 2+</li>
                  <li>MySQL</li>
                  <li>NoSQL</li>
                </ul>
                <br />
                And I dabble with:
                <ul>
                  <li>Node.js</li>
                  <li>React (this site)</li>
                  <li>NativeScript</li>
                </ul>
                <br />
                As an AWS certified Solutions Architect, I work a lot with AWS, specifically:
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
                Tell me about your personal projects.
              </ListGroupItemHeading>
              <hr />
              <ListGroupItemText>
                I have recently been heavily invested in a personal project,{" "}
                <a
                  href="https://get.ridetrackr.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RideTrackr
                </a>, where I lead backend development and worked on the
                frontend in conjunction with{" "}
                <a
                  href="https://github.com/collindutter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Collin Dutter
                </a>.
              </ListGroupItemText>
              <ListGroupItemText>
                I also write a bunch of code, but a lot of it tends to be small
                scripts, like Slack bots, that are not uploaded to my{" "}
                <a
                  href="https://github.com/ethanharlig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>.
              </ListGroupItemText>
              <ListGroupItemText>
                If you are interested in checking out more of my projects, mosey
                on over to my{" "}
                <a href="/projects" target="_blank">
                  projects page
                </a>!
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Holy moly you sound like someone I want to talk to. Just how do
                I reach you?
              </ListGroupItemHeading>
              <hr />
              <ListGroupItemText>
                If you like what you see, or you are interested in collaborating
                on anything, feel free to{" "}
                <a
                  href="mailto:ethan.harlig@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  email me
                </a>{" "}
                and we can talk!
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
