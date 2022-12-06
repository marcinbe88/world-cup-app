const submitButton = document.getElementById("submit-btn")
const team1Input = document.getElementById("team-1-input")
const team2Input = document.getElementById("team-2-input")
const team3Input = document.getElementById("team-3-input")
const team4Input = document.getElementById("team-4-input")

const roundsTeam1Name = document.getElementsByClassName("team-1-name")
const roundsTeam2Name = document.getElementsByClassName("team-2-name")
const roundsTeam3Name = document.getElementsByClassName("team-3-name")
const roundsTeam4Name = document.getElementsByClassName("team-4-name")

submitButton.addEventListener("click", confirmTeams)

function confirmTeams() {
    console.log('teams are updated')
    const groupTeamsList = document.getElementById("group-teams")
    const roundsSection = document.getElementById("rounds")

    const team1Name = document.createElement("p")
    const team2Name = document.createElement("p")
    const team3Name = document.createElement("p")
    const team4Name = document.createElement("p")

    team1Name.innerText = `${team1Input.value}`
    team2Name.innerText = `${team2Input.value}`
    team3Name.innerText = `${team3Input.value}`
    team4Name.innerText = `${team4Input.value}`

    // roundsTeam1Name.innerText = team1Name
    // roundsTeam2Name.innerText = team2Name
    // roundsTeam3Name.innerText = team3Name
    // roundsTeam4Name.innerText = team4Name

    roundsTeam1Name.innerText = `${team1Input.value}`
    roundsTeam2Name.innerText = `${team2Input.value}`
    roundsTeam3Name.innerText = `${team3Input.value}`
    roundsTeam4Name.innerText = `${team4Input.value}`

    groupTeamsList.append(team1Name,team2Name,team3Name,team4Name)
}