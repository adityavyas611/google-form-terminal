const request = require("request");
const extractQuestionsFromBody = require("./extractQuestionsFromBody");

const form_id = process.argv[2];

const scrapeGoogleFormForQuestions = () => {
  request(
    `https://docs.google.com/forms/d/e/${form_id}/viewform`,
    (error, response, body) => {
      if (error) {
        console.error("Something went wrong");
      } else {
        let questions = extractQuestionsFromBody(body);
        if (questions) {
          console.log(questions);
        } else {
          console.error("Ah! I couldn't find the questions.");
        }
      }
    }
  );
};

scrapeGoogleFormForQuestions();