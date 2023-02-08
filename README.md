# COE EXPRESS MOCA CHAI

Example of unit test integration using moca and chai.

## Description about the project
This is a node application built with expressjs framework. We have created a demo path named '/home' accessible via get method(http://localhost:3000/home).
We have used moca to write unit test cases, chai for assertion and supertest for api call.  
## Env variables or configuration (if required)
Currently we dont need any env variable. But users can use .env files to save critical information.
## How to run
We can simply run 'npm test' to execute unit test cases.
## How to deploy
Generally we execute locally before deployment.
## Dependencies
  - mocha
  - chai
  - supertest
## Description of the setup and configuration
Unit test cases are defined inside tests folder. In package.json we have defined that all .js files inside tests folder should be executed. Users can modify the current logic to their needs.
## Best practices integrated and how to follow
It is best to write both positive and negative test cases. Also use test cases that fails. Also try to get max code coverage.