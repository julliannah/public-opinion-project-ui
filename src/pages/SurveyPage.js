// import { useState } from 'react';
import questions from "../services/SurveyQuestions";
import { Survey } from "survey-react";
import { useState } from "react";
import uploadSurvey from "../services/SurveyServices";

export default function SurveyPage() {
  const [answer, setAnswer] = useState({});
  const [product, setProduct] = useState("Samsung Galaxy S5");

  const handleSubmittingSurvey = (data) => {
    Object.keys(data).forEach(function (key) {
      uploadSurvey(data[key], key, product);
    });
  };

  return (
    <Survey
      json={questions}
      showCompletedPage={false}
      onComplete={(data) => {
        handleSubmittingSurvey(data.valuesHash);
        setAnswer(data.valuesHash);
      }}
    />
  );
}
