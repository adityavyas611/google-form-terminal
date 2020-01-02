const request = require("request");
const extractQuestions = require("./extractQuestions");

const scrapeGoogleForm = () => {
  const form_id = process.argv[2];
  request(
    `https://docs.google.com/forms/d/e/${form_id}/viewform`,
    (error, response, body) => {
      if (error) {
        console.error("Something went wrong");
      } else {
        let questions = extractQuestionsFromBody(body);
        if (questions) {
          return questions;
        } else {
          console.error("Ah! I couldn't find the questions.");
        }
      }
    }
  );
};

module.exports = scrapeGoogleForm;
