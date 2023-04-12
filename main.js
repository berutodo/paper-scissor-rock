let choice = 0;
let score = 0;
let player;
let ia;
let scoreElement = document.getElementById("scoreNumber");
let step1 = document.getElementById("step1")
scoreElement.innerText = score

function setChoice(x) {
    document.getElementById("step1").style.display = "none";
    if (choice == 0) {
        switch (x) {
            case "rock":
                playerChoice(x)
                randomChoice()
                break;
            case "paper":
                playerChoice(x)
                randomChoice()

                break;
            case "scissor":
                playerChoice(x)
                randomChoice()
                break;
        }
        choice = 1
        document.getElementById("step2").style.display = "flex";

    }
    verificarGanhador()
}

function randomChoice() {
    let house = document.getElementById("house")
    let possible = ["rock", "paper", "scissor"]
    let pcChoise = (Math.floor(Math.random() * possible.length))
    let choice = possible[pcChoise]
    house.classList.add(choice)
    ia = choice
    console.log(ia)
    addImage(choice, house)
}

function addImage(x, div) {
    let a = document.createElement("img")
    switch (x) {
        case "rock":
            a.src = "./images/icon-rock.svg"
            div.appendChild(a)
            break;
        case "paper":
            a.src = "./images/icon-paper.svg"
            div.appendChild(a)
            break;
        case "scissor":
            a.src = "./images/icon-scissors.svg"
            div.appendChild(a)
    }
}

function verificarGanhador() {
    console.log("Chegamos aqui")
    if ((player === 'rock' && ia === 'scissor') ||
        (player === 'paper' && ia === 'rock') ||
        (player === 'scissor' && ia === 'paper')) {
        return changeScore(3)
    } else if ((ia === 'rock' && player === 'scissor') ||
        (ia === 'paper' && player === 'rock') ||
        (ia === 'scissor' && player === 'paper')) {
        return 'A IA venceu!';
    } else {
        return changeScore(1)
    }
}

function playerChoice(x) {
    let div = document.getElementById("player")
    let a = document.createElement("img")
    player = x
    switch (x) {
        case "rock":
            a.src = "./images/icon-rock.svg"
            div.appendChild(a)
            break;
        case "paper":
            a.src = "./images/icon-paper.svg"
            div.appendChild(a)
            break;
        case "scissor":
            a.src = "./images/icon-scissors.svg"
            div.appendChild(a)
    }
    console.log(player)
}

function changeScore(x) {
    score += x
    scoreElement.innerText = score
}

function resetGame() {
    player = "";
    ia = "";
    document.getElementById("step1").style.display = "flex";
    document.getElementById("step2").style.display = "none";
    choice = 0
    document.getElementById("player").innerHTML = "";
    document.getElementById("house").innerHTML = "";



}