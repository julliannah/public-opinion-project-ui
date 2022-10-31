import questions from "../services/SurveyQuestions";
import { Survey } from "survey-react";
import uploadSurvey from "../services/SurveyServices";

export default function SurveyPage() {

  const handleSubmittingSurvey = (data) => {
    const question = {
      name: data["Tên"],
      product: data["Sản phẩm"],
      dob: data["DOB"],
      school: data["Trường"]
    }
    Object.keys(data).forEach(function (key) {
      if (data[key] !== question.name && data[key] !== question.product && data[key] !== question.dob && data[key] !== question.school) {
        uploadSurvey(data[key], question.name, key, question.product, question.school);
      }
    });
  };

  return (
    <div className="main">
      <Survey
        json={questions}
        showCompletedPage={true}
        onComplete={(data) => {
          handleSubmittingSurvey(data.valuesHash);
        }}
      />
    </div>
  );
}
