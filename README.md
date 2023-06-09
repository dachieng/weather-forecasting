<p align="center">
   Weather Forecasting App
</p>

<p align="center">
    <a href="https://github.com/dachieng/weather-forecasting">
        weatherapp
    </a>
</p>

# Weather Forecasting App

Everything for the web project lives here. As we are using NextJS 13 - the paths of the file correlates to the url of the particular page (eg. `src/app/abc` correlates to `http://localhost:3001/abc`).

## Technologies

- NextJS (13)
- ReactJS (18)
- TypeScript
- Redux
- NodeJS (16.15.1)

## Setting up the development enviroment

This project requires `nvm` installed, and the version of NodeJS used in this project is specified in `.nvmrc` file. To use the right NodeJS version, run the following at the root of this project before starting development:

```bash
nvm use
```

## Running the app

To install all the dependencies through yarn run:

```bash
yarn install
```

````

## Apis utilized
- OpenWeatherMap API
- GeoDB Cities API


Run the following to set environment variables for code to connect to the app and the apis variables required in the setup:

```bash
cp .env.example .env.local
```

## Starting the app

Run the command below to start the app

```bash
yarn run dev
````

- The app should start at **http://localhost:3000**

- The app url can be accessed via

<p align="center">
    <a href="https://dorcas-weather-app.netlify.app/">
        weatherapp
    </a>
</p>

## App use

- Searchh for any city to view its weather results
