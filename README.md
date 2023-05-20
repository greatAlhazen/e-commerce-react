# [REACT E-COMMERCE WEBSITE](https://turkish-cuisine.onrender.com/)

|            Main             |           Foods            |
| :-------------------------: | :------------------------: |
| ![](siteImages/my_app3.png) | ![](siteImages/my_app.png) |

|            Food             |             Add             |
| :-------------------------: | :-------------------------: |
| ![](siteImages/my_app2.png) | ![](siteImages/my_app4.png) |

Amazing e-commerce website buid with react and firebase.

## Links:

- [Live Preview](https://turkish-cuisine.onrender.com/)

## Installation

- Clone the repo:

```
git clone git@github.com:greatAlhazen/e-commerce-react.git
```

- Get into main directory and execute this command

```
yarn
```

- In the main directory create .env file and specify these

```
REACT_APP_FIREBASE_API_KEY: <YOUR_FIREBASE_API_KEY>
REACT_APP_FIREBASE_APP_ID: <YOUR_FIREBASE_APP_ID>
REACT_APP_STRIPE_PUBLISHABLE_KEY: <YOUR_MONGO_STRIPE_PUBLISHABLE_KEY>
STRIPE_SECRET_KEY: <YOUR_STRIPE_SECRET_KEY>
```

- After,get into terminal and execute this command for preview

```
yarn start
```

- After those get into browser and go to specified http://localhost:<YOUR_PORT>

## Dependencies

- [cloudinary](https://cloudinary.com/documentation) - The cloud for image upload
- [connect-flash](https://github.com/jaredhanson/connect-flash) - For UI messages
- [connect-mongo](https://github.com/jdesboeufs/connect-mongo) - For session store in mongo
- [dotenv](https://github.com/motdotla/dotenv) - For specified environment variables in development mode
- [ejs](https://ejs.co/) - For UI
- [ejs-mate](https://github.com/JacksonTian/ejs-mate) - For UI boilerplate
- [express](https://expressjs.com/) - For handling http requests
- [express-mongo-sanitize](https://github.com/fiznool/express-mongo-sanitize) - For guarding mongo injection
- [express-session](https://github.com/expressjs/session) - For session store
- [helmet](https://helmetjs.github.io/) - For handling security issues
- [joi](https://joi.dev/api/?v=17.9.1) - For server-side validation
- [method-override](https://www.npmjs.com/package/method-override) - For handnling post requests
- [mongoose](https://mongoosejs.com/docs/) - For managing mongo database
- [multer](https://github.com/expressjs/multer) - For handling form-files
- [opencage-api-client](https://opencagedata.com/api) - For handling geocoding
- [passport](https://www.passportjs.org/docs/) - For configuring passport authentication package
- [passport-local](https://www.passportjs.org/docs/) - For handling authentication in local
- [passport-local-mongoose](https://github.com/saintedlama/passport-local-mongoose) - For handling authentication in local
- [sanitize-html](https://github.com/apostrophecms/sanitize-html) - For guarding script injections

## Copyright

Copyright 2023 [Enes Uraz](https://github.com/greatAlhazen)
