const findLongestWord = function (string) {
  const arrayString = string.split(' ');
  let longestWords = arrayString[0];
  for (const longestWord of arrayString) {
    if (longestWord.length >= longestWords.length) {
      longestWords = longestWord;
    }
  }
  return longestWords;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
