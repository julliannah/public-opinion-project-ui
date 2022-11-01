const questions = {
  title: "Public Opinion Survey",
  elements: [
    {
      type: "dropdown",
      name: "Sản phẩm",
      title: "Xin chọn sản phẩm để đánh giá",
      isRequired: "true",
      colCount: "0",
      showNoneItem: "true",
      choices: ["Galaxy Note 22 Ultra", "Galaxy Z Fold4", "Galaxy Buds2 Pro"],
      placeholder: "Sản phẩm",
    },
    {
      name: "Tên",
      title: "Tên",
      type: "text",
    },
    {
      name: "DOB",
      title: "Ngày, tháng, năm sinh",
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
      type: "comment",
    },
    {
      name: "Theo quan điểm cá nhân của bạn, làm thế nào để chúng tôi có thể cải thiện sản phẩm này?",
      title:
        "Theo quan điểm cá nhân của bạn, làm thế nào để chúng tôi có thể cải thiện sản phẩm này?",
      type: "comment",
    },
    {
      name: "Hãy cho chúng tôi biết điều gì làm bạn thất vọng ở sản phẩm này.",
      title: "Hãy cho chúng tôi biết điều gì làm bạn thất vọng ở sản phẩm này.",
      type: "comment",
    },
  ],
};
export default questions;
