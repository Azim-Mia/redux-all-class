# Getting Started with Create React App
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
The package includes a precompiled ESM build that can be used as a <script type="module"> tag directly in the browser.

Documentation
The Redux Toolkit docs are available at https:redux-toolkit.js.org, including API references and usage guides for all of the APIs included in Redux Toolkit.

The Redux core docs at https:redux.js.org includes the full Redux tutorials, as well usage guides on general Redux patterns.

Purpose
The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

Configuring a Redux store is too complicated
"I have to add a lot of packages to get Redux to do anything useful"
"Redux requires too much boilerplate code"
We can't solve every use case, but in the spirit of create-react-app, we can try to provide some tools that abstract over the setup process and handle the most common use cases, as well as include some useful utilities that will let the user simplify their application code.

Because of that, this package is deliberately limited in scope. It does not address concepts like "reusable encapsulated Redux modules", folder or file structures, managing entity relationships in the store, and so on.

Redux Toolkit also includes a powerful data fetching and caching capability that we've dubbed "RTK Query". It's included in the package as a separate set of entry points. It's optional, but can eliminate the need to hand-write data fetching logic yourself.

What's Included
Redux Toolkit includes these APIs:

configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, add whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.
createReducer(): lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.
createAction(): generates an action creator function for the given action type string. The function itself has toString() defined, so that it can be used in place of the type constant.
createSlice(): combines createReducer() + createAction(). Accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.
createListenerMiddleware(): lets you define "listener" entries that contain an "effect" callback with additional logic, and a way to specify when that callback should run based on dispatched actions or state changes. A lightweight alternative to Redux async middleware like sagas and observables.
createAsyncThunk(): accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/resolved/rejected action types based on that promise
createEntityAdapter(): generates a set of reusable reducers and selectors to manage normalized data in the store
The createSelector() utility from the Reselect library, re-exported for ease of use.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
