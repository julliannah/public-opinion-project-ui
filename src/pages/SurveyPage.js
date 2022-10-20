import questions from "../services/SurveyQuestions";
import { Survey } from "survey-react";
import { useState } from "react";
import uploadSurvey from "../services/SurveyServices";
import { Dropdown } from 'react-bootstrap';

export default function SurveyPage() {
  // const [answer, setAnswer] = useState({});
  // const [product, setProduct] = useState("None");

  const handleSubmittingSurvey = (data) => {
    const name = data["Tên"];
    const product = data["Sản phẩm"];
    Object.keys(data).forEach(function (key) {
      if (data[key] !== data["Tên"] && data[key] !== data["Sản phẩm"]) {
        uploadSurvey(data[key], name, key, product);
      }
    });
  };

  // const handleProductSelect = (value) => {
  //   setProduct(value);
  // };

  return (
    <div className="main">
      {/* <Dropdown onSelect={handleProductSelect}>
        <Dropdown.Toggle 
          style={{
            minWidth: "100% !important",
            textAlign: "right",
          }}
          id="dropdown-basic-button"
        >
          {product !== "None" ? product : "Sản Phẩm"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="dropdown-item" eventKey="Galaxy Note 22 Ultra">Galaxy Note 22 Ultra</Dropdown.Item>
          <Dropdown.Item className="dropdown-item" eventKey="Galaxy Z Fold4">Galaxy Z Fold4</Dropdown.Item>
          <Dropdown.Item className="dropdown-item" eventKey="Galaxy Buds2 Pro">Galaxy Buds2 Pro</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <Survey
        json={questions}
        showCompletedPage={true}
        onComplete={(data) => {
          handleSubmittingSurvey(data.valuesHash);
          // setAnswer(data.valuesHash);
        }}
      />
    </div>
  );
}
