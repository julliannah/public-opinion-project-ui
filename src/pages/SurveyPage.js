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
    var temp = new Date(data["DOB"]);
    console.log(temp)
    temp.toUTCString();
    var converted_dob = Math.floor(temp.getTime() / 1000);
    console.log(converted_dob)
    
    Object.keys(data).forEach(function (key) {
      if (data[key] !== question.name && data[key] !== question.product && data[key] !== question.dob && data[key] !== question.school) {
        uploadSurvey(data[key], question.name, converted_dob, key, question.product, question.school);
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
