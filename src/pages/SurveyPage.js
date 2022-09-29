// import { useState } from 'react';
import questionData from '../services/SurveyQuestions';
import { Survey } from 'survey-react';

export default function SurveyPage() {
  return (
    <Survey 
      json={questionData}
      showCompletedPage={false}
      onComplete={data=>console.log(data.valuesHash)}
    />
  );
}
