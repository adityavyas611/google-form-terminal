const cheerio = require('cheerio');
const extractQuestionsFromQuestionSelectors = require('./extractQuestionsFromQuestionSelectors');

const extractQuestionsFromBody = (htmlString) => {
    let html = cheerio.load(htmlString);
    let questionSelectors = html(".freebirdFormviewerViewItemsItemItemTitle");
    if(!questionSelectors.length)
    {
        return false;
    }
    else
    {
        return extractQuestionsFromQuestionSelectors(questionSelectors);
    }
}

module.exports = extractQuestionsFromBody;