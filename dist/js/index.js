const rulesButton = document.querySelector('.game-rules_btn');
const rulesContainer = document.querySelector('.game-rules_container');
const closeRulesContainer = document.querySelector('.game-rules_container-close');

let showContainer = false;

rulesButton.addEventListener("click", showRules);
closeRulesContainer.addEventListener("click", showRules);

function showRules() {
    if (!showContainer) {
        rulesContainer.classList.add('open');

        showContainer = true;
    } else {
        rulesContainer.classList.remove('open');

        showContainer = false;
    }
}

// Overlay for the Rules

document.querySelector('.game-rules_container-close').addEventListener("click", off);

document.querySelector('.game-rules_btn').addEventListener("click", on);

function off() {
    document.querySelector('.overlay').style.display = "none";
}

function on() {
    document.querySelector('.overlay').style.display = "block";
}