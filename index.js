const scrapeGoogleFormForQuestions = require('./scrapeGoogleFormForQuestions');

const form_id = process.argv[2];

scrapeGoogleFormForQuestions(form_id)
.then((questions) => {
        console.log(questions);
    })
.catch((error) => {
        response.status(500).json(error);
    });
