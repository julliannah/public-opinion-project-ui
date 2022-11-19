const questions = {
  title: "Khảo sát",
  elements: [
    {
      type: "dropdown",
      name: "Sản phẩm",
      title: "Xin chọn sản phẩm để đánh giá",
      isRequired: "true",
      colCount: "0",
      showNoneItem: "true",
      choices: ["Galaxy S22 Ultra", "Galaxy Z Fold4", "Galaxy Buds2 Pro"],
      placeholder: "Sản phẩm",
    },
    {
      name: "Tên",
      title: "Tên",
      isRequired: "true",
      type: "text",
    },
    {
      name: "DOB",
      title: "Ngày, tháng, năm sinh",
      isRequired: "true",
      type: "text",
      inputType: "date",
      startWithNewLine: "false",
    },
    {
      name: "Trường",
      title: "Trường",
      type: "text",
      startWithNewLine: "false",
    },
    {
      name: "Chúng tôi có thể làm gì để giúp bạn hài lòng hơn với trải nghiệm của mình?",
      title:
        "Chúng tôi có thể làm gì để giúp bạn hài lòng hơn với trải nghiệm của mình?",
      isRequired: "true",
      validators: [
        {
          "type": "text",
          "minLength": 5
        }
      ],
      type: "comment",
    },
    {
      name: "Theo quan điểm cá nhân của bạn, làm thế nào để chúng tôi có thể cải thiện sản phẩm này?",
      title: "Theo quan điểm cá nhân của bạn, làm thế nào để chúng tôi có thể cải thiện sản phẩm này?",
      isRequired: "true",
      validators: [
        {
          "type": "text",
          "minLength": 5
        }
      ],
      type: "comment",
    },
    {
      name: "Hãy cho chúng tôi biết điều gì làm bạn thất vọng ở sản phẩm này.",
      title: "Hãy cho chúng tôi biết điều gì làm bạn thất vọng ở sản phẩm này.",
      isRequired: "true",
      validators: [
        {
          "type": "text",
          "minLength": 5
        }
      ],
      type: "comment",
    },
  ],
};
export default questions;
