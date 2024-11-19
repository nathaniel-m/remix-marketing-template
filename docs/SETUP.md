# Setup

This is a guide on using this repo. 

- Run `npm run install` to install dependencies if you haven't already.

  - Efforts have have been made to ensuring we're using the latest package versions, and some incompatibility issues always pop up while installing. 

- Build your `.env` file based on `.env.example`

- NPM Scripts

  - `dev`: Run in dev mode.
  - `build`: Use Vite to build React into `dist/client`. If you don't run build, you cannot serve anything in dev / production modes.
  - `start`: Run in production mode. Please run `npm run build` before to compile client side.

- Running the Site

  - In another terminal window (preferrably in your IDE), `npm run dev` or `npm run start` depending on how you want to test your app.

- Deploy at Cloudflare
  - Run `npm run deploy` to push the project to cloudflare pages
