### Quickstart
```sh
$ git clone git@github.com:digital-futures-academy/user-auth.git && cd user-auth
$ npm install
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npm start
```

### Env vars
Add a `.env` file with the appropriate env vars. Follow the format given in `.env.example` to help.

### Databases
Prefix the below commands with NODE_ENV=test if you intend to work with a test database
```sh
# create and migrate database
$ [NODE_ENV=test] npx sequelize-cli db:create
$ [NODE_ENV=test] npx sequelize-cli db:migrate
```

### Run tests
Prefix the below commands with NODE_ENV=test if you intend to work with a test database
```sh
# run Cypress tests
$ [NODE_ENV=test] npm start
$ [NODE_ENV=test] npx cypress open
```


## User Registations

#### Instructions

- Read through `registations.spec.js` to understand the sequence of events
- Use sequelize-cli to generate a User model with `email:string` and `passwordHash:string`
```sh
$ npx sequelize-cli model:generate --name User --attributes email:string,passwordHash:string
$ npx sequelize-cli db:migrate
```
- Complete the controller action for `POST /registrations`, following the hints in the `registrations` router
- Remember to use `bcryptjs` to store the hashed password, not the plaintext password
- Once completed, `registrations.spec.js` should pass.

## User Sessions

- Read through `sessions.spec.js` to understand the sequence of events
- Complete the controller action for `POST /sessions`, following the hints in the `sessions` router
- Complete the controller action for `DELETE /sessions`, following the hints in the `sessions` router
- Once completed, `sessions.spec.js` should pass.
