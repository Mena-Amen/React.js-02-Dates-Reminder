import React from "react";
import { Col, Row } from "react-bootstrap";
const DatesAction = ({ deleteData, onViewData }) => {
  return (
    <div>
      <Row className="justify-content-center my-2 ">
        <Col sm="8" className="d-flex justify-content-between">
          <button onClick={onViewData} className="btn-style py-2">
            عرض الكل
          </button>
          <button onClick={deleteData} className="btn-style py-2">
            مسح الكل
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default DatesAction;
