import { Container } from "react-bootstrap";
import { personData } from "./personData";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(personData);
  const onDelete = () => {
    setData([]);
  };
  const onViewData = () => {
    setData(personData);
  };
  useEffect(() => {
    setData([]);
  }, []);
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount personData={data} />
        <DatesList personData={data} />
        <DatesAction
          personData={data}
          deleteData={onDelete}
          onViewData={onViewData}
        />
      </Container>
    </div>
  );
}

export default App;
