const submitButton = document.getElementById("submit-btn");
const resultSubmitButton = document.getElementById("scores-submit-btn");

const groupNameInput = document.getElementById("group-name-input");
const team1Input = document.getElementById("team-1-input");
const team2Input = document.getElementById("team-2-input");
const team3Input = document.getElementById("team-3-input");
const team4Input = document.getElementById("team-4-input");

const team1InTable = document.getElementById("first-team-name");
const team2InTable = document.getElementById("second-team-name");
const team3InTable = document.getElementById("third-team-name");
const team4InTable = document.getElementById("fourth-team-name");

const groupNameTeamList = document.getElementById("group-name-team-list");
const groupNameTable = document.getElementById("group-name-table");

const roundsTeam1Name = document.getElementsByClassName("team-1-name");
const roundsTeam2Name = document.getElementsByClassName("team-2-name");
const roundsTeam3Name = document.getElementsByClassName("team-3-name");
const roundsTeam4Name = document.getElementsByClassName("team-4-name");

submitButton.addEventListener("click", confirmTeams);
resultSubmitButton.addEventListener("click", updateScores);

function confirmTeams() {
  const groupTeamsList = document.getElementById("group-teams");
  const teamsList = document.getElementById("teams-list");

  groupNameTeamList.innerText = `Group ${groupNameInput.value}`;
  groupNameTable.innerText = `Group ${groupNameInput.value}`;

  teamsList.innerHTML = `
  <p>${team1Input.value}</p>
  <p>${team2Input.value}</p>
  <p>${team3Input.value}</p>
  <p>${team4Input.value}</p>
  `;

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
    <input placeholder="goals" type="text" id="team-1r1-goals" />
    <input placeholder="goals" type="text" id="team-2r1-goals" />
    <p>${team2Input.value}</p>
    </div>
    <div>
    <p>${team3Input.value}</p>
    <input placeholder="goals" type="text" id="team-3r1-goals" />
    <input placeholder="goals" type="text" id="team-4r1-goals" />
    <p>${team4Input.value}</p>
    </div>
    `;

  round2Div.innerHTML = `
    <div>
    <p>${team1Input.value}</p>
    <input placeholder="goals" type="text" id="team-1r2-goals" />
    <input placeholder="goals" type="text" id="team-3r2-goals" />
    <p>${team3Input.value}</p>
    </div>
    <div>
    <p>${team2Input.value}</p>
    <input placeholder="goals" type="text" id="team-2r2-goals" />
    <input placeholder="goals" type="text" id="team-4r2-goals" />
    <p>${team4Input.value}</p>
    </div>
    `;

  round3Div.innerHTML = `
    <div>
    <p>${team1Input.value}</p>
    <input placeholder="goals" type="text" id="team-1r3-goals" />
    <input placeholder="goals" type="text" id="team-4r3-goals" />
    <p>${team4Input.value}</p>
    </div>
    <div>
    <p>${team3Input.value}</p>
    <input placeholder="goals" type="text" id="team-3r3-goals" />
    <input placeholder="goals" type="text" id="team-2r3-goals" />
    <p>${team2Input.value}</p>
    </div>
    `;

  groupTeamsList.append(teamsList);
  round1.append(round1Div);
  round2.append(round2Div);
  round3.append(round3Div);
}

function updateScores() {
  const team1ScoreR1 = document.getElementById("team-1r1-goals");
  const team2ScoreR1 = document.getElementById("team-2r1-goals");
  const team3ScoreR1 = document.getElementById("team-3r1-goals");
  const team4ScoreR1 = document.getElementById("team-4r1-goals");

  const team1ScoreR2 = document.getElementById("team-1r2-goals");
  const team2ScoreR2 = document.getElementById("team-2r2-goals");
  const team3ScoreR2 = document.getElementById("team-3r2-goals");
  const team4ScoreR2 = document.getElementById("team-4r2-goals");

  const team1ScoreR3 = document.getElementById("team-1r3-goals");
  const team2ScoreR3 = document.getElementById("team-2r3-goals");
  const team3ScoreR3 = document.getElementById("team-3r3-goals");
  const team4ScoreR3 = document.getElementById("team-4r3-goals");

  const team1TablePoints = document.getElementById("first-team-points");
  const team2TablePoints = document.getElementById("second-team-points");
  const team3TablePoints = document.getElementById("third-team-points");
  const team4TablePoints = document.getElementById("fourth-team-points");

  const team1TableGoalsScored = document.getElementById(
    "first-team-goals-scored"
  );
  const team2TableGoalsScored = document.getElementById(
    "second-team-goals-scored"
  );
  const team3TableGoalsScored = document.getElementById(
    "third-team-goals-scored"
  );
  const team4TableGoalsScored = document.getElementById(
    "fourth-team-goals-scored"
  );

  const team1TableGoalsLost = document.getElementById("first-team-goals-lost");
  const team2TableGoalsLost = document.getElementById("second-team-goals-lost");
  const team3TableGoalsLost = document.getElementById("third-team-goals-lost");
  const team4TableGoalsLost = document.getElementById("fourth-team-goals-lost");

  let team1Points = 0;
  let team2Points = 0;
  let team3Points = 0;
  let team4Points = 0;

  if (team1ScoreR1.value > team2ScoreR1.value) {
    team1Points += 3;
  } else if (team1ScoreR1.value < team2ScoreR1.value) {
    team2Points += 3;
  } else {
    team1Points += 1;
    team2Points += 1;
  }
  if (team3ScoreR1.value > team4ScoreR1.value) {
    team3Points += 3;
  } else if (team3ScoreR1.value < team4ScoreR1.value) {
    team4Points += 3;
  } else {
    team3Points += 1;
    team4Points += 1;
  }

  if (team1ScoreR2.value > team3ScoreR2.value) {
    team1Points += 3;
  } else if (team1ScoreR2.value < team3ScoreR2.value) {
    team3Points += 3;
  } else {
    team1Points += 1;
    team3Points += 1;
  }
  if (team2ScoreR2.value > team4ScoreR2.value) {
    team2Points += 3;
  } else if (team2ScoreR2.value < team4ScoreR2.value) {
    team4Points += 3;
  } else {
    team2Points += 1;
    team4Points += 1;
  }

  if (team1ScoreR3.value > team4ScoreR3.value) {
    team1Points += 3;
  } else if (team1ScoreR3.value < team4ScoreR3.value) {
    team4Points += 3;
  } else {
    team1Points += 1;
    team4Points += 1;
  }
  if (team2ScoreR3.value > team3ScoreR3.value) {
    team2Points += 3;
  } else if (team2ScoreR3.value < team3ScoreR3.value) {
    team3Points += 3;
  } else {
    team2Points += 1;
    team3Points += 1;
  }

  // team1TableGoalsScored.innerText =
  //   +team1ScoreR1.value + +team1ScoreR2.value + +team1ScoreR3.value;
  // team2TableGoalsScored.innerText =
  //   +team2ScoreR1.value + +team2ScoreR2.value + +team2ScoreR3.value;
  // team3TableGoalsScored.innerText =
  //   +team3ScoreR1.value + +team3ScoreR2.value + +team3ScoreR3.value;
  // team4TableGoalsScored.innerText =
  //   +team4ScoreR1.value + +team4ScoreR2.value + +team4ScoreR3.value;

  // team1TableGoalsLost.innerText =
  //   +team2ScoreR1.value + +team3ScoreR2.value + +team4ScoreR3.value;
  // team2TableGoalsLost.innerText =
  //   +team1ScoreR1.value + +team4ScoreR2.value + +team3ScoreR3.value;
  // team3TableGoalsLost.innerText =
  //   +team4ScoreR1.value + +team1ScoreR2.value + +team2ScoreR3.value;
  // team4TableGoalsLost.innerText =
  //   +team3ScoreR1.value + +team2ScoreR2.value + +team1ScoreR3.value;

  let teamsPointsObject = {};

  teamsPointsObject[team1Input.value] = team1Points;
  teamsPointsObject[team2Input.value] = team2Points;
  teamsPointsObject[team3Input.value] = team3Points;
  teamsPointsObject[team4Input.value] = team4Points;

  const teamsSortedByScores = Object.entries(teamsPointsObject)
    .sort(([, a], [, b]) => a - b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  const result = Object.keys(teamsSortedByScores).map((key) => [
    String(key),
    teamsSortedByScores[key],
  ]);

  team1InTable.innerText = `${result[3][0]}`;
  team2InTable.innerText = `${result[2][0]}`;
  team3InTable.innerText = `${result[1][0]}`;
  team4InTable.innerText = `${result[0][0]}`;

  team1TablePoints.innerText = `${result[3][1]}`;
  team2TablePoints.innerText = `${result[2][1]}`;
  team3TablePoints.innerText = `${result[1][1]}`;
  team4TablePoints.innerText = `${result[0][1]}`;


  console.log(teamsPointsObject);
  console.log(teamsSortedByScores);
  console.log(result);
}
