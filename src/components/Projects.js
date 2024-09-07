import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projImg1 from "../assets/img/aboutus.png";
import icon1 from "../assets/img/registration.png";
import icon2 from "../assets/img/tax.png";
import icon3 from "../assets/img/financial.png";
import icon4 from "../assets/img/secretary.png";
import icon5 from "../assets/img/compliance.png";
import icon6 from "../assets/img/businessconsultancy-1.png";
import { ProjectCard } from "./ProjectCard";

export default function Project () {
    const projects = [
      {
        icon: icon1,
        title: "Business Registration",
        description: "Vostertech Consultancy can help you register your business with the relevant authorities in Zimbabwe. We will guide you through the process and ensure that your business is registered and compliant with all the neccessary regulations.",
        imgUrl: projImg1,
      },
      {
        icon: icon2,
        title: "Tax Advisory",
        description: "Vostertech Consultancy can provide you with expert advice on tax matters. We can help you understand your tax obligations and ensure that you are compliant with all the relevant regulations.", 
        imgUrl: projImg1,
      },
      {
        icon: icon3,
        title: "Financial Advisory",
        description: "We can help you manage your finances more effectively. They can provide you with advice on budgeting, cash flow management and other financial matters.",
        imgUrl: projImg1,
      },
      {
        icon: icon4,
        title: "Company Secretarial Services",
        description: "Vostertech Consultancy can help you manage your company's secretarial duties. They can assist with the preparation of minutes, resolutions and other documents. ",
        imgUrl: projImg1,
      },
      {
        icon: icon5,
        title: "Compliance Services",
        description: "Vostertech consultancy can help you ensure that your business is compliant with all the relevant regulations. They can provide you with advice on compliance matters and help you implement policies and procedures to ensure compliance.",
        imgUrl: projImg1,
      },
      {
        icon: icon6,
        title: "Business Consulting",
        description: "Vostertech Consultancy can provide you with expert advice on a wide range of business matters. They can help you develop.",
        imgUrl: projImg1,
      },
    ];
  
    return (
        <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <p>OUR SERVICES</p>
                  <h3>What Service We Offer</h3>
                  <span>Vostertech Consultancy is a leading provider of business registration services in Zimbabwe. 
                      <br/>
                      We offer a wide range of services including:
                  </span>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible ? "animate__animated animate__slideInUp" : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
        );
    }