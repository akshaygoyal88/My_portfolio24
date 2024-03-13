import { feedbacks } from "../../info/Info";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "./FeedbackCard";
import Fade from "react-reveal/Fade";

const Feedbacks = () => {
  return (
    feedbacks && (
      <Fade bottom duration={2000}>
        <section className="section section-lg p-4">
          <Container>
            <div className="d-flex justify-content-center flex-column align-items-center p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="fa fa-star text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Our Clients Feedback</h4>
              </div>
            </div>
            <Row className="g-3">
              {feedbacks.map((data, i) => {
                return (
                  <Col key={i} lg={12}>
                    <FeedbackCard {...data} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Feedbacks;