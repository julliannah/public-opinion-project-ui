import axios from "axios";
import { UPLOAD_SURVEY_URL } from "./../constant";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

const uploadSurvey = (data, topic, product) => {
  const body = {
    content: data,
    full_name: "Tester",
    topics: product,
    title: topic,
    sub_sections: "",
  };
  const post_request = axios.post(UPLOAD_SURVEY_URL, body, axiosConfig);
  return post_request.then((response) => response.data);
};

export default uploadSurvey;
