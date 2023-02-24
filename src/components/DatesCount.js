import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesCount = ({ personData }) => {
  return (
    <div>
      <Row className="justify-content-center my-2">
        <Col sm="8" className="">
          لديك {personData.length} مواعيد اليوم
        </Col>
      </Row>
    </div>
  );
};

export default DatesCount;
