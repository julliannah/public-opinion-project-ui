// import { useState } from 'react';
import questions from '../services/SurveyQuestions';
import { Survey } from 'survey-react';
import { useState } from 'react';

export default function SurveyPage() {
  const [answer, setAnswer] = useState({});
  console.log(answer)

  return (
    <Survey 
      json={questions}
      showCompletedPage={false}
      onComplete={ 
        data => {
          console.log(data.valuesHash)
          setAnswer(data.valuesHash)
        }
      }
    />
  );
}
