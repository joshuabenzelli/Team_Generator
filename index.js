const fs = require("fs");
const inquirer = require("inquirer");


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const addManagerCard = require("./src/manager-card");
const addEngineerCard = require("./src/engineer-card");
const addInternCard = require("./src/intern-card");
const wrapProfileCards = require("./src/wrapper-card");

const team = [];

const addManager = [
  {
    name: "role",
    type: "confirm",
    message: "Welcome to the Team Profile Generator! Are you ready to begin?",
  },
  {
    name: "name",
    type: "input",
    message: "Please enter the name of the manager:",
  },
  {
    name: "id",
    type: "input",
    message: "What is your employee ID?",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter your email address:",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is your office number?",
  },
  {
    name: "upNext",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
    message: "What would you like to do next?",
  },
];

const addEngineer = [
  {
    name: "name",
    type: "input",
    message: "Please enter the name of the engineer:",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the ID of the engineer:",
  },
  {
    name: "email",
    type: "input",
    message: "What is the engineer's email address?",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter the engineer's Github username:",
  },
  {
    name: "upNext",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
    message: "What would you like to do next?",
  },
];

const addIntern = [
  {
    name: "name",
    type: "input",
    message: "What is the intern's name?",
  },
  {
    name: "id",
    type: "input",
    message: "What is the intern's employee ID?",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the intern's email address:",
  },
  {
    name: "school",
    type: "input",
    message: "What college or university does the intern attend?",
  },
  {
    name: "upNext",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
    message: "What would you like to do next?",
  },
];

ask(addManager);

function ask(questionArr) {
  inquirer
    .prompt(questionArr)
    .then((member) => {
      team.push(member);

      if (member.upNext === "Add Engineer") {
        ask(addEngineer);
      } else if (member.upNext === "Add Intern") {
        ask(addIntern);
      } else {
        createProfiles(team);
      }
    })
    .catch((err) => console.log(err));
}

function createProfiles(team) {
  const profiles = team.map((member) => {
    const { name, id, email } = member;

    if (member.hasOwnProperty("officeNumber")) {
      const { officeNumber } = member;
      return new Manager(name, id, email, officeNumber);
    }

    if (member.hasOwnProperty("github")) {
      const { github } = member;
      return new Engineer(name, id, email, github);
    }

    if (member.hasOwnProperty("school")) {
      const { school } = member;
      return new Intern(name, id, email, school);
    }
  });

  generateHtml(profiles);
}

function generateHtml(profiles) {
  let profileCards = "";
  profiles.forEach((profile) => {
    if (profile instanceof Manager) {
      const card = addManagerCard(profile);
      profileCards += card;
    } else if (profile instanceof Engineer) {
      const card = addEngineerCard(profile);
      profileCards += card;
    } else if (profile instanceof Intern) {
      const card = addInternCard(profile);
      profileCards += card;
    }
  });

  const newHtml = wrapProfileCards(profileCards);

  writeHtml(newHtml);
}

function writeHtml(newHtml) {
  fs.writeFile("./dist/team-profile.html", newHtml, (err) => {
    if (err) throw err;
    console.log("HTML document successfully created in the /dist folder.");
  });
}
