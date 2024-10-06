/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    const splitWords = (sentence) => sentence.split(' ');

    let words1 = splitWords(sentence1);
    let words2 = splitWords(sentence2);

    if (words1.length < words2.length) [words1, words2] = [words2, words1];
    
    let start = 0, end = 0;
    let n1 = words1.length, n2 = words2.length;

    while (start < n2 && words1[start] === words2[start]) start++;

    while (end < n2 && words1[n1 - end - 1] === words2[n2 - end - 1]) end++;

    console.log(start + end >= n2);
};

areSentencesSimilar("My name is Haley","My Haley");
areSentencesSimilar("of","A lot of words");
areSentencesSimilar("Eating right now","Eating");
