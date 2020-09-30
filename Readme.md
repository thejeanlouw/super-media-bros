# Super Media Bros
## Mission
Our mission is to deliver mond-blowing visual online experiences catered to our clients' needs.

## Vision
Super Media Bros sees itself being the go-to platform for companies interested in delivering exciting web experiences on scale, such as area walk-throughs, AR data models, or social media integrations. Through the platform, they should have the ability to access services such as 3D area mapping, 3D model hosting, 3D geomapping, 3D art direction, 3D experience hosting (templated or bespoke),

## Goals
Develop an MVP page that can add/remove,update and return glb files Develop an MVP page that can display glb files Develop an MVP page that can interact with glb files Develop an MVP page that can zoom through glb scenes Develop an MVP page that can walk through glb scenes Develop an MVP page that project glb scenes as 360 degree VR Develop an MVP page that project glb scenes as AR models

## Guiding Principals
Super Media Bros employees strive to lead the industry on what is possible online by researching and implementing newest technologies combined with existing knowledge and standards to make experiences memorable

# React Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Github Scripts

## Setup Scripts

### Install Github Pages
We need to install [GitHub Pages](https://www.npmjs.com/package/gh-pages) package as a dev-dependency.

cd my-app
npm install gh-pages --save-dev

### Add Properties to package.json
The first property we need to add at the top level homepage second we will define this as a string and the value will be "http://{username}.github.io/{repo-name}" {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this :

"homepage": "http://yuribenjamin.github.io/my-app"

Second in the existing scripts property we to need to add predeploy and deploy.

"scripts": {
    //...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }

![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--MjMDNfNZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8kevraaawx8mi9ryx9lb.png "package json")

### Create Github Repository and Initialize
Create a Github repository and initialize it and add it as a remote in your local git repository.

Now, create a remote GitHub repository with your app name and go back initialize this
git init
add it as remote
git remote add origin git@github.com:Yuribenjamin/my-app.git```

5- Now deploy it to GitHub Pages.

just run the following command :

npm run deploy

### Commit and Push Commit to GitHub