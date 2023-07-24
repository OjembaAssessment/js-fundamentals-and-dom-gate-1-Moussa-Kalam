const paragraph = document.getElementById("myParagraph");

const wordsArr = paragraph.textContent.split(" ");

function getMostFrequentWords(arr, n) {
  // Create an object to store the word frequencies.
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (counts[word] === undefined) {
      counts[word] = 1;
    } else {
      counts[word]++;
    }
  }

  //   console.log(counts);

  // Create an array to store the top n words.
  let mostFrequent = [];
  for (let word in counts) {
    if (mostFrequent.length < n && mostFrequent !== "") {
      mostFrequent.push([word, counts[word]]);
    } else if (counts[word] > mostFrequent[0][1]) {
      mostFrequent.shift();
      mostFrequent.push([word, counts[word]]);
    }
  }

  // Return the array of top n words.
  return mostFrequent;
}

// Get the top five words
const topWords = getMostFrequentWords(wordsArr, 6);
topWords.splice(0, 1);

const top5 = [];

topWords.map((word) => top5.push(word[0]));

// wordsArr.forEach((word) => {
//   if (top5.includes(word)) {
//     word.innerHTML = `<span>${word}</span>`;
//   }
// });
