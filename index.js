let addHomePoint = 0
let addAwayPoint = 0
let addHomeFoul = 0
let addAwayFoul = 0
let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")
let addHoFoul = document.getElementById("faultsho-el")
let addAwFoul = document.getElementById("faultsaw-el")

function scorerHo1() {
    addHomePoint += 1
    homeEl.textContent = addHomePoint
}

function scorerHo2() {
    addHomePoint += 2
    homeEl.textContent = addHomePoint
}
function scorerHo3() {
    addHomePoint += 3
    homeEl.textContent = addHomePoint
}

function scorerAw1() {
    addAwayPoint += 1
    awayEl.textContent = addAwayPoint
}

function scorerAw2() {
    addAwayPoint += 2
    awayEl.textContent = addAwayPoint
}
function scorerAw3() {
    addAwayPoint += 3
    awayEl.textContent = addAwayPoint
}

function foulterHo() {
    addHomeFoul +=1
    addHoFoul.innerText = addHomeFoul
}

function foulterAw() {
    addAwayFoul +=1
    addAwFoul.innerText = addAwayFoul
}
