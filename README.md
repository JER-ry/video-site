# video-site

Built with `React` and `TailwindCSS`.

Except all data are fake, the website looks quite real since all functions seem to work. (Login with the user id `1000`.)

## How to run

Since I created this with `create-react-app`, you know what to do:

> Make sure you’ve had Node.js installed (go to https://nodejs.org/ and download the LTS version). Open a terminal (see `README.md` of my `video-api` repo) and enter:

```powershell
npm start
```

You also know how to deploy this to Netlify or so right?

> It’s OK if you don’t. Since there are still some CORS problems, currently it’s recommended to run the site locally.

## Things to do

I mainly worked in a single file, `src/App.js`.

The app has been designed to be able to communicate with the server through APIs now but still needs debugging.

Also you need to integrate a video player that turns fetched `videoToPlay.url` into playing videos. Currently a YouTube embed player lies in the `Player` class.
