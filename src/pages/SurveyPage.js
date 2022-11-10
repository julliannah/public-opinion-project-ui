import questions from "../services/SurveyQuestions";
import { Survey } from "survey-react";
import uploadSurvey from "../services/SurveyServices";
import { useState } from "react";

export default function SurveyPage() {
  const [isSubmit, setSubmit] = useState(false);
  const handleSubmittingSurvey = (data) => {
    const question = {
      name: data["Tên"],
      product: data["Sản phẩm"],
      dob: data["DOB"],
      school: data["Trường"],
    };
    Object.keys(data).forEach(function (key) {
      if (
        data[key] !== question.name &&
        data[key] !== question.product &&
        data[key] !== question.dob &&
        data[key] !== question.school
      ) {
        var convert = question.dob;
        convert = convert.split("-");
        var convertDob = new Date(convert[0], convert[1] - 1, convert[2]);
        var dob = convertDob.getTime() / 1000;

        var response = uploadSurvey(
          data[key],
          question.name,
          dob,
          key,
          question.product,
          question.school
        );

        console.log("API Response: " + response);
      }
    });
  };

  const refreshPage = () => {
    window.location.reload();
  } 

  return (
    <div className="main">
      { isSubmit ? <button id="back-to-survey" onClick={refreshPage}>Trở về trang khảo sát</button> : <></> }
      <Survey
        json={questions}
        showCompletedPage={true}
        completeText="Hoàn thành"
        completedHtml= "Cảm ơn bạn đã tham gia khảo sát."
        onComplete={(data) => {
          handleSubmittingSurvey(data.valuesHash);
          setSubmit(true)
        }}
      />
    </div>
  );
}
