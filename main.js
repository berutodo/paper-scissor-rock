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
        document.getElementById("result").innerText = "You Win"
        return changeScore(3)
    } else if ((ia === 'rock' && player === 'scissor') ||
        (ia === 'paper' && player === 'rock') ||
        (ia === 'scissor' && player === 'paper')) {
        document.getElementById("result").innerText = "You Lose"

        return changeScore(-3);
    } else {
        document.getElementById("result").innerText = "Draw"

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
            div.classList.add(x)
            break;
        case "paper":
            a.src = "./images/icon-paper.svg"
            div.appendChild(a)
            div.classList.add(x)

            break;
        case "scissor":
            a.src = "./images/icon-scissors.svg"
            div.appendChild(a)
            div.classList.add(x)

    }
    console.log(player)
}

function changeScore(x) {
    score += x;
    if (score < 0) {
        score = 0;
    }
    scoreElement.innerText = score;
}

function resetGame() {
    player = "";
    ia = "";
    let divPlayer = document.getElementById("player")
    let divHouse = document.getElementById("house")
    document.getElementById("result").innerText = ""

    document.getElementById("step1").style.display = "flex";
    document.getElementById("step2").style.display = "none";
    choice = 0
    divPlayer.innerHTML = "";
    divHouse.innerHTML = "";
    while (divPlayer.classList.length > 0) {
        divPlayer.classList.remove(divPlayer.classList.item(0));
    }
    while (divHouse.classList.length > 0) {
        divHouse.classList.remove(divHouse.classList.item(0));
    }


}