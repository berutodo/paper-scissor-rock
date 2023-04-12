let choice = 0;
let score = 0;
let player;
let ia;
let scoreElement = document.getElementById("scoreNumber");
scoreElement.innerText = score

function setChoice(x) {
    if (choice == 0) {
        let scissor = document.getElementById("scissor")
        let rock = document.getElementById("rock")
        let paper = document.getElementById("paper")
        switch (x) {
            case "rock":
                scissor.style.display = "none";
                paper.style.display = "none";
                playerChoice(x)
                randomChoice()
                break;
            case "paper":
                scissor.style.display = "none";
                rock.style.display = "none";
                playerChoice(x)
                randomChoice()

                break;
            case "scissor":
                rock.style.display = "none";
                paper.style.display = "none";
                playerChoice(x)
                randomChoice()
                break;
        }
        choice = 1
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
    player = x
    console.log(player)
}

function changeScore(x) {
    score += x
    scoreElement.innerText = score
}