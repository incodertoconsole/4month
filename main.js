const button = document.querySelector(".search_button");
const first_word = document.querySelector(".word");
const desc1 = document.querySelector(".desc");
const desc2 = document.querySelector(".desc2");
const desc3 = document.querySelector(".desc3");
const desc4 = document.querySelector(".desc4");
const desc5 = document.querySelector(".desc5");

var x; // input value - x


var url;

async function fetchHandler() {
    try {
        x = document.getElementById("myText").value;
        url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + x;
        const response = await fetch(url);
        const data = await response.json();
        first_word.innerHTML = data[0].word + " - " + data[0].phonetics[0].text;
        desc1.innerHTML = data[0].meanings[0].definitions[0].definition;
        desc2.innerHTML = data[0].meanings[0].definitions[1].definition;
        desc3.innerHTML = data[0].meanings[0].definitions[2].definition;
        desc4.innerHTML = data[0].meanings[0].definitions[3].definition;
        desc5.innerHTML = data[0].meanings[0].definitions[4].definition;
        document.getElementById("my-audio").setAttribute('src', data[0].phonetics[0].audio);

        console.log(data[0]);
    }
    catch (error) {
        console.log("error founded!")
    }
}


document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        fetchHandler();
    }
});

// fetchHandler();

button.addEventListener("click", () => {
    fetchHandler();
});