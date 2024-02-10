import inquirer from 'inquirer';
import { exec } from 'child_process';
const questions1 = [
  {
    type: 'input',
    name: 'gh-user',
    message: "What is the owner of the GitHub repository's username?"
  }
];

inquirer.prompt(questions1).then(answers => {
  const username = answers['gh-user'];
  const questions2 = [
    {
      type: 'input',
      name: 'gh-repo_name',
      message: "What is the name of the GitHub repository?"
    }
  ];

  inquirer.prompt(questions2).then(answers => {
    const repo_name = answers['gh-repo_name'];
    exec(`git clone https://github.com/${username}/${repo_name}/`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  });
});
