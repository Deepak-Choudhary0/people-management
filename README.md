# People Management App

<p align="center">
<a href="https://twitter.com/c72124925" alt="Twitter Follow">
<img src="https://img.shields.io/twitter/follow/c72124925.svg?label=Follow+Deepak&style=social" /></a>
<a href="https://www.linkedin.com/in/deepakchoudhary2003/">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></p>a
</p>
The People Management App is a web application built using the MEAN stack, which stands for MongoDB, Express, Angular, and Node.js. It allows you to manage a database of people, including their names, ages, genders, and mobile numbers.

## Authors

- [@Deepak-Choudhary](https://github.com/Deepak-Choudhary0/)
  
## Features
- Add a new person to the database with their name, age, gender, and mobile number.
- View a list of all people in the database.
- Edit the details of a person, including their name, age, gender, and mobile number.
- Delete a person from the database.

## Technologies Used
- MongoDB: A NoSQL database for storing the people data.
- Express: A web application framework for building the backend API.
- Angular: A JavaScript framework for building the frontend user interface.
- Node.js: A JavaScript runtime environment for running the server-side code.
- TypeScript: A statically typed superset of JavaScript used in Angular development.
- Material UI: A popular UI component library for Angular applications.

## Installation Guide

- Clone the repository: `git clone https://github.com/Deepak-Choudhary0/people-management.git`
- Navigate to the project directory: `cd people-management`
- Install the dependencies for the frontend part: `npm install`
- Navigate to the backend directory: `cd src/app/backend`
- Install the dependencies for the backend part: `npm install`

## Configuration
Before running the application, make sure to configure the following:

MongoDB Connection: create a database named `person` and a collection in it as `person_data`

## Usage

#### Start the backend server first: 
- make sure you are in the `cd people-management/src/app/backend` folder.
- now start the mongodb by running command `sudo systemctl start mongod` for linux , and check same for windows if you are on windows OS.
- now start the express server by running `node index.js` .
  
#### Start the frontend development server:
- Go to the project root at people-management without killing the above processes as the frontend part purely depend on the backend part , you can do this by opening the root folder in another tab of terminal.
- Run `ng serve` here for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please submit a pull request or open an issue.

## Further help
Raise an issue for any kind of bug , issue , or help in this Repo.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
