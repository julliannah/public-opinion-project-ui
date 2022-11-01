import questions from "../services/SurveyQuestions";
import { Survey } from "survey-react";
import uploadSurvey from "../services/SurveyServices";
import { upload } from "@testing-library/user-event/dist/upload";

export default function SurveyPage() {
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
        var dob = convertDob.getTime();

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
