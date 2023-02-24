import React from "react";
import { Col, Row } from "react-bootstrap";
const DatesList = ({ personData }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="">
          <div className="rectangle p-3">
            {personData.length ? (
              personData.map((item) => {
                return (
                  <div key={item.id} className="d-flex border-bottom mx-2 my-2">
                    <img
                      className="img-avatar"
                      src="مواعيد السقا.png"
                      alt="Elsaka"
                    />
                    <div className="px-3">
                      <p className="d-inline fs-5">{item.name}</p>
                      <p className="fs-6">
                        <span className="fw-bold fs-5 date-color">
                          {item.date}
                        </span>{" "}
                        مساء
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DatesList;
