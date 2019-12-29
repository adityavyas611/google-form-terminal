const request = require('request');
const q = require('q');
const extractQuestionsFromBody = require('./extractQuestionsFromBody');

const scrapeGoogleFormForQuestions = (form_id) => {
    const promise = q.defer();
    request("https://docs.google.com/forms/d/" + form_id, (error, response, body) => {
        if (error) {
            promise.reject("Something went wrong");
        }
        else {
            let questions = extractQuestionsFromBody(body);
            if(questions)
            {
                promise.resolve(questions);  
            }
            else
            {
                promise.reject("Ah! I couldn't find the questions. Please make sure the link you shared is valid and you can access atleast one question on it.");
            }
        }
    })

    return promise.promise;
}

module.exports = scrapeGoogleFormForQuestions;