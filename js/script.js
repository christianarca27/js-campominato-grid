const buttonPlayEl = document.getElementById("btn-play");

buttonPlayEl.addEventListener("click", function() {
    const playTableEl = document.getElementById("play-table");
    playTableEl.innerHTML = "";

    for(let i = 1; i <= 100; i++) {

        let newEl = document.createElement("div");
        newEl.classList.add("square");
        newEl.innerText = i;
        playTableEl.append(newEl);

        newEl.addEventListener("click", function() {
            console.log(i);
            newEl.style.backgroundColor = "lightblue";
        });
        
    }
});