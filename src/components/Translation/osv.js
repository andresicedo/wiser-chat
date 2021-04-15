// let WordPOS = require('wordpos'),
// wordpos = new WordPOS();

// let objects = [];
// let subject = [];
// let verb = [];
// let result = [];

// function osv(string) {
//     let words = string.split(" ");
//     let osvObject = wordpos.getPOS(string);
//     let keys = Object.keys(osvObject);
    // for (let i = 0; i < words.length; i++) {
    //     const word = words[i];
    //     const nextWord = words[i+1];
    //     if(word === 'a' || 'A') {
    //         objects.push(word, nextWord);
    //     }
    //     if(word === 'the' || 'The') {
    //         subject.push(word, nextWord)
    //     }
    //     if(osvObject[keys[0]].includes(word) && !objects.includes(word)) {
    //         objects.push(word)
    //     }
    //     if(osvObject[keys[1]].includes(word) && !verb.includes(word)) {
    //         verb.push(word)
    //     }
    //     if(osvObject[keys[2]].includes(word) && !objects.includes(word)) {
    //         objects.push(word)
    //     }
    //     if(osvObject[keys[2]].includes(word) && !subject.includes(word)) {
    //         subject.push(word)
    //     }
        
    // }
    // let osvString = result.push(objects, subject, verb).toString();
//     return osvObject;
// }


// console.log(osv('The woman built a strong stone wall'))
// //The woman [S] built [V] a strong stone wall [O]
// //A strong stone wall the woman built
// console.log(osv('The children eat buns, cakes, and biscuits'))
// //The children [S] eat [V] buns, cakes, and biscuits [O]
// //Buns, cakes and biscuits, the children eat
// console.log(osv('The professor threw an orange'))
// //The professor [S] threw [V] an orange [O]
// //An orange the professor threw