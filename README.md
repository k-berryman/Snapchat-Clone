# Starting the build
`cd snapchat-clone`
`npx create-react-app snapchat-clone --template redux`
Remember the --template redux part on the end!

Then, `cd snapchat-clone`
`code-insiders .` ...?  skipping this
`npm start`
Go to localhost:3000


Open up firebase.google.com
We'll use firebase for our auth, database, uploading assistance through firebase storage. as well as hosting.
- Go to console (in firebase)
- Click add project
- Name it snapchat-clone
- No google analytics


Clean up time!
go to `src/app.test.js` and delete it
Also delete `logo.svg`
Also delete `setupTests.js`
Delete entire contents of `App.css`

Go to index.css and add this at the top
`* {
  margin: 0;
}`

Go to App.js and delete the header and change `App` class name to `app`

Only imports in App.js should be
`import React from 'react';
import './App.css';`

Go to `src/features/counter` and delete `counter.module.css` and also `Counter.js`
Drag `counterSlice.js` to `features/` dir
Delete `counter/` dir
Rename `counterSlice.js` to `appSlice.js` and every inside of that file saying counter, change it to app, meaning counterSlice now is appSlice
`import { fetchCount } from './counterAPI';` <- delete that line
just clean it up a lot

Go to `src/app/store.js` and do the same

# Setting up Firebase
Open up firebase.google.com again
- Click continue
- On the left, click Authentication. We're going to be using Google Authentication
- Click Get Started
- Under Sign-In Providers, click google, click Enable
- Enter personal email for Project Support Email
- Save

- Next, go to Cloud Firestone (renamed Firestone Db)
- Click Create Database
- Click Start in Test Mode, next, then enable
- Click Rules. This actually allows us access to the db
- `allow read, write;` for dev - NOT PRODUCTION

- Click Storage
- Click Rules. `allow read, write;` for dev - NOT PRODUCTION

- Click Hosting
- Get started, next x3,

- Click gear, Click Project Settings
- Under Your apps, go to web app icon and click
- Add app name
- Check the button (although we already set-it up so it doesn't really matter)
- Click next
- `sudo npm install -g firebase-tools`
- Click continue to console
- Under Your apps, snapchat-clone (still in project settings), under SDK setup and configuration, click Config
- Copy the config
- in `src/` create `firebase.js` and paste in there
- in terminal, `npm install firebase`
Add into firebase.js
`import firebase from 'firebase';
...pasted stuff...
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };`

# Building Webcam Capture Screen
Add `<WebcamCapture />` in App.js
In terminal, `npm install react-webcam`
Create `src/WebcamCapture.js`
Add videoConstraints
import Webcam from "react-webcam";

Go to material-ui.com
`npm install @mui/material @emotion/react @emotion/styled`
`npm install @material-ui/core`
In material-ui.com, search for icons
`npm install @mui/icons-material`
`npm install @material-ui/icons`
See all icons here - https://mui.com/components/material-icons/
We're getting the RadioButtonUnchecked and copy the import line

When that icon is hit, take a screenshot

Set up redux data storing
In `features/` create `cameraSlice.js` to store camera-related state
Copy appSlice to cameraSlice & make customizations
Connect it to store.js

Install chrome(?) redux devtools (skipping for now)

Now to add a redirect. We want to use react router.
Go to reactrouter.com
`npm install react-router-dom@6
`
Grab the whole router section from https://v5.reactrouter.com/web/guides/quick-start
Put it in div. Grab those imports too.

Update  // react-router-dom v6 replaced "Switch" with "Routes"

Update for react-router-dom V6 in App.js
Update "Switch" to "Routes"

<div className='app__body'>
  <Routes>
    <Route exact path="/" element={<WebcamCapture />}/>
  </Routes>
</div>

In WebcamCapture.js, useHistory() is replaced by useNavigate()
import { useHistory } from "react-router-dom"
const history = useHistory();
history.push('/preview')

is now

import { useNavigate } from "react-router-dom"
const history = useNavigate();
history('/preview')


Also in Preview.js, useHistory() is replaced with useNavigate()



Now, Add the Preview Component


Install uuid because we need unique ids for img upload
`npm install uuid`
`import { v4 as uuid } from "uuid";` in Preview.js
