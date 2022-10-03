// import { useState } from 'react';
import questions from "../services/SurveyQuestions";
import { Survey } from "survey-react";
import { useState } from "react";
import uploadSurvey from "../services/SurveyServices";

export default function SurveyPage() {
  const [answer, setAnswer] = useState({});

  const handleSubmittingSurvey = (data) => {
    uploadSurvey(data["disappointing-experience"]);
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
