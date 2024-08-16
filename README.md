# About
Moonbot is a mood-tracking app designed primarily for PMS and PMDD.
It was built with Django, React, Docker, Firestore, and a custom JWT Auth system.
- [Backend repo](https://github.com/Elijer/moonbot)
- [Live Demo](https://mymoonbot.netlify.app/login)

# Ports
- Django port: `7000`
- React Port: `9000`
- Firestore emulators: `8090`

**To change ports:**
- In react, change port by changing an environmental variable: `export PORT=9000`
- In django, go into Pipfile and change `run` command to reflect desired port.

# Frontend
Clone this directory as and cd into it, then run:
```bash
npm i;
npm start;
```

# To run backend
Install Pipenv.

```bash
// Clone the backend repo:
git clone https://github.com/Elijer/moonbot backend;
cd backend;
pipenv run run;
```

# Firebase Implementation

Package:
`npm install firebase@9.3.0 --save`
