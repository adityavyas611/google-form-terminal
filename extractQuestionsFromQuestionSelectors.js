const extractQuestionsFromQuestionSelectors = (questionSelectors) => {
    const questions = [];
    questionSelectors.each((index, question) => {
        questions.push(question.children[0].data);
    })
    return questions;
}

module.exports = extractQuestionsFromQuestionSelectors;