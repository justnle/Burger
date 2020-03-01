# Cutie-Burger

A burger logger web application that allows the user to create a list of burgers that they would like to eat. They can 'eat' it, which will set the burger to the DEVOURED side and from there the user can also 'trash' the burger. The application demonstates usage of the MVC (Model-View-Controller) design pattern, along with a self-created ORM (Object-Relational-Mapping) to improve altering/readability of the code.

The application is deployed on [Heroku](https://cutie-burger.herokuapp.com/).

## Usage

To install and use locally,

1. `git clone` this repository to a local directory
2. Run the `schema.sql` file in MySQLWorkbench, or from the terminal to initialize and begin using the database
3. Optionally, run the `seed.sql` file to seed the database with some information
4. Install the dependencies via the terminal by running:

```bash
npm i
```

5. Then run the application with:

```bash
npm start
```

6. Open the browser and visit [http://localhost:3000/](http://localhost:3000/)

To use the deployed application, click [here](https://cutie-burger.herokuapp.com/)

### Interaction

The user can add burgers by typing in a name for the burger in the input field followed by pressing the red 'Cook it up!' button. The burgers can be eaten by clicking the green teeth button, which will move the eaten burgers from the MENU side to the DEVOURED side. The user may also remove the burgers from the database by hitting the yellow garbage button, or 'remake' the burgers by hitting the blue redo button.

### Screenshots

![app-screenshot](https://github.com/twopcz/Burger/blob/master/public/assets/images/burger.png?raw=true)

# Technologies

This application was built with:

- CSS
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
- JavaScript
- [jQuery](https://api.jquery.com/)
- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/guide/)
- [MySQL](https://dev.mysql.com/doc/)
- [Node](https://nodejs.org/en/)

The dependencies required:

```
  "dependencies": {
    "express": "^4.17.1",
    "express-handlebars": "^3.1.0",
    "mysql": "^2.18.1"
  }
```

Documentation on dependencies:

- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [mysql](https://www.npmjs.com/package/mysql)

# Enhancements

Burger name validation is a must since currently users can add any 'burger name' that they want, which is not intentional. Also, since the burgers are listed with their ID (was shown in the demo video for the assignment), the ID numbers will continue to increase. Not sure if I quite enjoy that, but it is interesting to see how many times users have interacted with the application.

# References

- [www.freevector.com](https://www.freevector.com) - Free Burger Vector
- [www.fontawesome.com](https://www.fontawesome.com) - Free icons

# License

This project is licensed under the MIT License - see the LICENSE.md file for details
