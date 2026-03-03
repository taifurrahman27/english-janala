console.log("I am JS");

const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then((json) => displayLessons(json.data));
};
loadLessons();


const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then((data) => console.log(data));
}

const displayLevelWords = (word) => {
    console.log(word);
}

const displayLessons = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    for (let lesson of lessons) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>
       lesson-${lesson.level_no}</button>
        `;
        console.log(btnDiv);

        levelContainer.append(btnDiv);
    }


}

