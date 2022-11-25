const questions = {
  title: "Khảo sát",
  elements: [
    {
      type: "dropdown",
      name: "Sản phẩm",
      title: "Xin chọn sản phẩm để đánh giá",
      isRequired: "true",
      requiredErrorText: "Bắt buộc",
      choices: ["A73", "S22 Ultra", "Z Fold4", "Z Flip4", "Buds2 Pro", "Watch5 Pro"],
      placeholder: "Sản phẩm",
    },
    {
      name: "Tên",
      title: "Tên",
      isRequired: "true",
      requiredErrorText: "Bắt buộc", 
      type: "text",
    },
    {
      name: "DOB",
      title: "Ngày, tháng, năm sinh",
      isRequired: "true",
      requiredErrorText: "Bắt buộc", 
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
      name: "Ý kiến của bạn về ngoại hình và tính tương tác của sản phẩm?",
      title:
        "Ý kiến của bạn về ngoại hình và tính tương tác của sản phẩm?",
      isRequired: "true",
      requiredErrorText: "Bắt buộc",
      validators: [
        {
          type: "regex",
          text: "Nhập ít nhất 3 từ",  
          regex: /(?=([^ ]* ){2})(?=( [^ ])+.)/     
        }
      ],
      type: "comment",
    },
    {
      name: "Hãy cho chúng tôi biết điều gì làm bạn chưa hài lòng với sản phẩm?",
      title: "Hãy cho chúng tôi biết điều gì làm bạn chưa hài lòng với sản phẩm?",
      isRequired: "true",
      requiredErrorText: "Bắt buộc",
      validators: [
        {
          type: "regex",
          text: "Nhập ít nhất 3 từ",  
          regex: /(?=([^ ]* ){2})(?=( [^ ])+.)/     
        }
      ],
      type: "comment",
    },
    {
      name: "Theo quan điểm của bạn, chúng tôi có thể cải thiện sản phẩm này bằng cách nào?",
      title: "Theo quan điểm của bạn, chúng tôi có thể cải thiện sản phẩm này bằng cách nào?",
      isRequired: "true",
      requiredErrorText: "Bắt buộc",
      validators: [
        {
          type: "regex",
          text: "Nhập ít nhất 3 từ",  
          regex: /(?=([^ ]* ){2})(?=( [^ ])+.)/     
        }
      ],
      type: "comment",
    },
  ],
};
export default questions;
