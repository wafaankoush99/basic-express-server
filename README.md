# basic-express-server

## [Check the deployed app](https://basic-express-server-wafa.herokuapp.com/)


I built a basic Express server using best practices, including server modularization, use of middleware, and tests.

## Route: 
Method: GET
Path: /person
the route use the validator middleware to check the user’s input


## structure

```
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── server.test.js
│   ├── validator.test.js
│   ├── logger.test.js
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── middleware
│   │   ├── logger.js
│   │   ├── validator.js
│   ├── server.js
├── index.js
└── package.json
```

## Implementation Notes

index.js act as the “entry point” to the server.

src/server.js contain all of the module connections for the server

logger.js Performs a console.log with the request method and path

validator.js Checks the query string for a name property

404.js Sends a 404/Not-Found message as the response

500.js Sends a 500/Server Error message as the response

## Testing:

test all the status and the given name in the query string, if it is object is correct

## [Actions](https://github.com/wafaankoush99/basic-express-server/actions/runs/850851788)
![](https://scontent.famm9-1.fna.fbcdn.net/v/t1.15752-9/187017984_580570856240980_5565876536066305443_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHE6gEHxpicM3iOvfVIP9dP75A0jhpyGdvvkDSOGnIZ235obIZdQarPRBEo1mtRn7Buq9BBRYgNxrTb1nZo0afO&_nc_ohc=62ByMBEheIQAX8Dfgii&_nc_ht=scontent.famm9-1.fna&oh=69d699e80f0c8cc00c56b2988d9526ee&oe=60C8C0DD)

## Pull requests for this project :

## [PR1](https://github.com/wafaankoush99/basic-express-server/pull/1)

## [PR2](https://github.com/wafaankoush99/basic-express-server/pull/2)


## Dependencies 
(express, dotenv, supertest, jest)

## UML

![](https://scontent.famm9-1.fna.fbcdn.net/v/t1.15752-9/187990648_167646628531972_5902214225395498801_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHcZOr1_laWUOWTSltlPyrBQMG45t51G_dAwbjm3nUb9-UhVUDH7O1C3na5GyJF2Oo9j2y3HgYWqDfMaEdCCaXp&_nc_ohc=Ndt3dH9i-xIAX8V6dWQ&_nc_ht=scontent.famm9-1.fna&oh=52dfb7b69df4b35b07ba23a78d9f93fd&oe=60C6C9E2)


