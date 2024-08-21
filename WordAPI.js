
function checkWord(word) {
    const url = `https://api.datamuse.com/words?sp=${word}&max=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
         //   console.log(data);
            if (data.length > 0 && data[0].word.toLowerCase() === word.toLowerCase()) {
                // console.log(`The word "${word}" exists.`);
                console.log(true);
            } else {
                // console.log(`The word "${word}" does not exist.`);
                console.log(false);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}