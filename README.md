CarechartHarrison Web Application

## Build and run steps

To build/run project:

1. Install NODE.JS v10 or higher ([https://nodejs.org/en/download](https://nodejs.org/en/download))
2. Open CLI and go to project directory
3. Run `npm i` to install third party packages
4. After the intallation is complete run:
   1. `npm start` to run in dev mode
   2. `npm run build` to build for production

## Using with Firebase Emulator Suite

To use with emulator:

1. Install NODE.JS v10 or higher ([https://nodejs.org/en/download](https://nodejs.org/en/download))
2. Install Java version 1.8 or higher ([https://openjdk.java.net/install/](https://openjdk.java.net/install/))
3. Install Firebase CLI (run `npm install -g firebase-tools` in CLI)
4. Open CLI and go to the `firebase` project directory (or open the project with VSCode and use its terminal)
5. Run `firebase emulators:start --import=./data --export-on-exit --project carechartharrison-develop` to start emulator (see [available commands](https://firebase.google.com/docs/emulator-suite/install_and_configure?authuser=0#startup) for details)
6. Create `src/.env.development.local` with `REACT_APP_USE_FIREBASE_EMULATOR=true` inside
7. Run CarechartHarrison web-client project (see section **"Build and run steps"**)

## Environments

There are 2 environments supported as of now: development and production. Backend settings are kept in `src/.env.development` and `src/.env.production` accordingly. These files are used during the build time at [npm run build:cd](https://dev.azure.com/aquariusconsulting/Carechart/_git/Harrison/commit/42bd579ae651a9679f92531670d131fde0974225/?_a=contents&path=%2Fpackage.json&line=47) command
Development environment uses [CarechartHarrison-develop](https://console.firebase.google.com/u/1/project/carechartharrison-develop/overview) firebase backend.
Production environment uses [CarechartHarrison](https://console.firebase.google.com/u/1/project/carechartharrison/overview) firebase backend.
_FYI_: process.env.NODE_ENV === `production` for both `CarechartHarrison-develop` and `CarechartHarrison` (TODO: not clear where it's set). When running locally (`npm start`) it should be process.env.NODE_ENV === `development`

## Using with "real" Development (CarechartHarrison-develop) Firebase

To use with a "real" Development (CarechartHarrison-develop) Firebase ensure your `src/.env.development.local` file doesn't contain the value of the `REACT_APP_USE_FIREBASE_EMULATOR` variable. Then run CareChart project (see section **"Build and run steps"**)

## Working with Dates in CarechartHarrison

Firestore has Timestamp data type ([https://firebase.google.com/docs/reference/unity/struct/firebase/firestore/timestamp](https://firebase.google.com/docs/reference/unity/struct/firebase/firestore/timestamp)). It's a number of seconds in UTC Epoch time, so it's actually a moment on the timeline. App gets it as a number. Firestore Web UI shows it as a datetime respecting your browser TZ.

Considering we have 2 sort of dates in the app. First, the dates you're not interested the TZ for (ex., date of birth). Second, the dates you might be interested TZ for (ex., document creation timestamp).

Type#1 dates:
Write: value should be persisted in Firestore as a Moment with UTC offset containing correct values for the date (ex., DOB would be 2020-09-15 00:00:00 UTC+00).
Read: value will be read from Firestore as a Moment with UTC offset.
Making alignment to UTC offset allows us to get the same actual datetime value when reading/writing the value from browsers with different TZs. Also we can correctly compare two dates (being sure they're saved within the same TZ offset value).

Type#2 dates:
Write: value can be persisted in Firestore as a Moment with any offset the app needs (meaning it's the timestamp moment and app can pass it within any TZ it wants, the value will be sent as number of seconds to that exact moment)
Read: value will be read from Firestore as a Moment with UTC offset. It's up to the app logic to convert this Moment to another TZ if required.
DISCLAIMER: currently all Moment objects are processed with .utc(true) (see `/api/firebase/data-converter.ts`) which is actually applicable for Type#1 dates. To work with Type#2 dates we need to improve that logic (to disinguish the behaviour)

### Timestamp as id

If id of a document is a timestamp, the `getTimestampedDocId` method should be used to generate new id (see `/utils/object/get-timestamp-id.ts`).

## Third Party Libraies

- [React](https://reactjs.org) (JS library for building UI)
- [MobX-react-lite](https://github.com/mobxjs/mobx-react-lite) (react state management)
- [Material UI](https://material-ui.com) (css framework)
- [Husky](https://github.com/typicode/husky) (git hooks management)
- [Lint-staged](https://github.com/okonet/lint-staged) (runs linters against staged git files)
- [Prettier](https://prettier.io) (code formatter)
- [Stylelint](https://stylelint.io) (linter for css styles)

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
