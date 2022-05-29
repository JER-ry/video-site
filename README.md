# video-site

Built with `React` and `TailwindCSS`.

Except all data are fake, the website looks quite real since all functions seem to work. (Login with the user id `1000`.)

## How to run

Since I created this with `create-react-app`, you know what to do:

```powershell
npm start
```

You also know how to deploy this to Netlify or so right?

## Things to do

I mainly worked in a single file, `src/App.js`.

The app hasn't been able to communicate with the server through APIs now. I wrote some fake functions for demonstration purposes (`recommendMoreUpdate()`, `checkUserId()`, `registerNewUserId()`), but it's not hard to change them into real ones that work. You'll also need to complete `handleWatch()`, `handleLike()` and `handleUnlike()` in the `App` class.

Also you need to integrate a video player that turns fetched `videoToPlay.url` into playing videos. Currently a YouTube embed player lies in the `Player` class.
