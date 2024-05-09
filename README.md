# My Portfolio
Hello, my name is Niles and I'm a recent graduate of a Software Engineering bootcamp. This portfolios displays what I was able to learn in the course as well as what I've learned since.

## Frontend
I am using React along with axios to make the appropriate calls to my backend. Utilzinzing the .map function allowed me to dynamically access all of my projects.

## How to use Front End
- Fork and Clone This Repository
```
npm i
```
- This is to install all necessary dependencies
```
npm start
```
- This will open my portfolio in a new page, ensure the backend is running and you're good to go!

## Backend
This is a MongoDB backend with only one schema and endpoints for getting all my projects as well as projects by ID.

[Backend Repo](https://github.com/nilestoomer/portfolio-backend)

Schema
- "title": { type: String},
- "description": { type: String},
- "screenshot": { type: String},
- "github": { type: String},
- "languages": { type: String},
- "frameworks": { type: String}

## How to use

If you want to use this API follow these instructions:

- Fork and clone repository
```
npm i
```
- This is to install all necessary dependencies

```
node seed/data.js
```
- This will run the seed file and create a local database

```
node server.js
```
- This will run the server so you can see the information on the local host

```
http://localhost:3020/api/projects/
```
- This will show you all of the projects available in the seed file

