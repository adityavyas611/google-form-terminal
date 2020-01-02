const request = require("request");
const extractQuestions = require("./extractQuestions");

const scrapeGoogleForm = () => {
  return new Promise((resolve, reject) => {
    request(
    `https://docs.google.com/forms/d/e/${process.argv[2]}/viewform`,
    (error, response, body) => {
      if (error) {
        console.error("Something went wrong");
      } else {
        let questions = extractQuestions(body);
        if (questions.length) {
           resolve(questions);
        } else {
          console.error("Ah! I couldn't find the questions.");
        }
      }
    }
  );
  })
};

module.exports = scrapeGoogleForm;
