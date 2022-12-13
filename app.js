const submitButton = document.getElementById("submit-btn");
const resultSubmitButton = document.getElementById("scores-submit-btn");

const team1Input = document.getElementById("team-1-input");
const team2Input = document.getElementById("team-2-input");
const team3Input = document.getElementById("team-3-input");
const team4Input = document.getElementById("team-4-input");

const team1InTable = document.getElementById("first-team-name");
const team2InTable = document.getElementById("second-team-name");
const team3InTable = document.getElementById("third-team-name");
const team4InTable = document.getElementById("fourth-team-name");

const roundsTeam1Name = document.getElementsByClassName("team-1-name");
const roundsTeam2Name = document.getElementsByClassName("team-2-name");
const roundsTeam3Name = document.getElementsByClassName("team-3-name");
const roundsTeam4Name = document.getElementsByClassName("team-4-name");

submitButton.addEventListener("click", confirmTeams);
resultSubmitButton.addEventListener("click", updateScores);

function confirmTeams() {
  const groupTeamsList = document.getElementById("group-teams");

  const team1Name = document.createElement("p");
  const team2Name = document.createElement("p");
  const team3Name = document.createElement("p");
  const team4Name = document.createElement("p");

  team1Name.innerText = `${team1Input.value}`;
  team2Name.innerText = `${team2Input.value}`;
  team3Name.innerText = `${team3Input.value}`;
  team4Name.innerText = `${team4Input.value}`;

  team1InTable.innerText = `${team1Input.value}`;
  team2InTable.innerText = `${team2Input.value}`;
  team3InTable.innerText = `${team3Input.value}`;
  team4InTable.innerText = `${team4Input.value}`;

  const round1Div = document.getElementById("round-1-div");
  const round2Div = document.getElementById("round-2-div");
  const round3Div = document.getElementById("round-3-div");

  const round1 = document.getElementById("round-1");
  const round2 = document.getElementById("round-2");
  const round3 = document.getElementById("round-3");

  round1Div.innerHTML = `
    <div>
    <p>${team1Input.value}</p>
    <input placeholder="goals" type="text" class="team-1-goals" />
    <input placeholder="goals" type="text" class="team-2-goals" />
    <p>${team2Input.value}</p>
    </div>
    <div>
    <p>${team3Input.value}</p>
    <input placeholder="goals" type="text" class="team-3-goals" />
    <input placeholder="goals" type="text" class="team-4-goals" />
    <p>${team4Input.value}</p>
    </div>
    `;

  round2Div.innerHTML = `
    <div>
    <p>${team1Input.value}</p>
    <input placeholder="goals" type="text" class="team-1-goals" />
    <input placeholder="goals" type="text" class="team-2-goals" />
    <p>${team3Input.value}</p>
    </div>
    <div>
    <p>${team2Input.value}</p>
    <input placeholder="goals" type="text" class="team-3-goals" />
    <input placeholder="goals" type="text" class="team-4-goals" />
    <p>${team4Input.value}</p>
    </div>
    `;

  round3Div.innerHTML = `
    <div>
    <p>${team1Input.value}</p>
    <input placeholder="goals" type="text" class="team-1-goals" />
    <input placeholder="goals" type="text" class="team-2-goals" />
    <p>${team4Input.value}</p>
    </div>
    <div>
    <p>${team3Input.value}</p>
    <input placeholder="goals" type="text" class="team-3-goals" />
    <input placeholder="goals" type="text" class="team-4-goals" />
    <p>${team2Input.value}</p>
    </div>
    `;

  groupTeamsList.append(team1Name, team2Name, team3Name, team4Name);
  round1.append(round1Div);
  round2.append(round2Div);
  round3.append(round3Div);

  const team1Score = document.getElementById("team-1-goals");
  const team2Score = document.getElementById("team-2-goals");
  const team3Score = document.getElementById("team-3-goals");
  const team4Score = document.getElementById("team-4-goals");   
}

function updateScores() {
  console.log("scores updated");
  let team1Points = 0;
  let team2Points = 0;
  let team3Points = 0;
  let team4Points = 0;

  console.log(team1Input.value)
  console.log(team1Points);
  console.log(team2Points);
}
