const scrapeGoogleForm = require("./scrapeGoogleForm");

const form_id = process.argv[2];

const getQuestion = async () => {
    const questions = await scrapeGoogleForm(form_id);
    return questions;
};

module.exports = getQuestion;