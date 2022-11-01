import axios from "axios";
import { UPLOAD_SURVEY_URL } from "./../constant";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

const uploadSurvey = (data, name = "", dob, topic, product, school) => {
  const body = {
    content: data,
    full_name: name,
    dob: dob,
    topics: product,
    title: topic,
    sub_sections: school,
  };

  const post_request = axios.post(UPLOAD_SURVEY_URL, body, axiosConfig);
  return post_request.then((response) => response.data);
};

export default uploadSurvey;
