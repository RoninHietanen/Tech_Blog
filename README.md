# Tech_Blog
https://git.heroku.com/limitless-tundra-93883.com

## Description
```md
This is a Tech_Blog where users can post and interact with eachother.
```

## User Story 

```md
AS A developer who writes about tech.
I WANT a CMS-style blog site.
SO THAT I can publish articles, blog posts, and my thoughts and opinions.
```

## What you will need

VS Code or another type of coding interface installed.

Node.js isntalled.

Gitbash installed.

MySQL installed.

## How to install

*Instructions*
```md
1. Fork the repository
2. Clone the repository to your computer
3. Navigate into the E-Commerce_Back_End folder
4. In the E-Commerce_Back_End folder use the following command `npm install`
5. The next command will be `npm init -y`
        if after completing this command you see: 
          "dependencies": {
            "bcrypt": "^5.0.1",
            "connect-session-sequelize": "^7.1.1",
            "dotenv": "^10.0.0",
            "express-handlebars": "^5.3.3",
            "express-session": "^1.17.2",
            "express.js": "^1.0.0",
            "mysql2": "^2.3.0",
            "sequelize": "^6.6.5"
          }
        Skip to 14 otherwise continue from 6
6. The next command will be `npm i bcrypt --save`
7. The next command will be `npm i connect-session-sequelize --save`
8. The next command will be `npm i dotenv --save`
9. The next command will be `npm i express-handlebars --save`
10. The next command will be `npm i express-session --save`
11. The next command will be `npm i express.js --save`
12. The next command will be `npm i sequelize --save`
13. The next command will be `npm i mysql2 --save`
14. navigate to the db folder and run `mysql -u root -p` and login
15. run SOURCE schema.sql
16. exit out of mySQL and navigate back into the root foler
17. You will then need to navigate to the file in file explorer and create a .env file like the following and save it:
    DB_USER='root'
    DB_PASSWORD=''
    DB_NAME='tech_blog'
18. Then run npm start
19. Then you should have a working site on your local host.
```

## Key Technologies Used

**Node.js**

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

**Sequelize**

Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

**Dotenv**

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

**MySQL**

MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.
