const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const regexp = /^[A-Z]/;
const titleCased = () => {
  return tutorials.map((sentence) => {

    //Covert the sentence into an array of words
    let wordArray = sentence.split(' ')

    //Change the first letter of the words to uppercase
    let newWordArray = wordArray.map((word) => {

      let newWord
      // Check if the first letter of the word is uppercase,
      // If it is not, uppercase the first letter of the word
      if (regexp.test(word)) {
        newWord = word
      } else {
        newWord = word.charAt(0).toUpperCase() + word.slice(1)
      }
      return newWord
    })

    // Convert the array of words back to a sentence
    return newWordArray.join(' ')

  }
  )
}
