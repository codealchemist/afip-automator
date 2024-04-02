# AFIP Automator

A little automation tool to ease the burden of tedious accounting tasks.

<img width="567" alt="image" src="https://github.com/codealchemist/afip-automator/assets/1118293/ecf084ab-6a09-4ce1-a830-a793f48ab96a">


## About

It uses [Nightwatch.js](https://nightwatchjs.org/) to run an automation script on the AFIP platform using Chrome.

## Before first run

As usual, install dependencies:

`npm i`

## Environment

You'll need to provide the invoice details in an `.env` file:

```
# AFIP LOGIN
USERNAME=[YOUR_CUIT]
PASSWORD=[YOUR_PASSWORD]

# TRUELOGIC
COUNTRY_ID=[TARGET_COUNTRY_ID]
COMPANY_ID=[TARGET_COMPANY_ID]
COMPANY_NAME=[TARGET_COMPANY_NAME]
COMPANY_ADDRESS=[TARGET_COMPANY_ADDRESS]
COMPANY_EMAIL=[TARGET_COMPANY_EMAIL]
```

## Run it

`npm start`

It will ask for the invoice amount and do the rest on its own.
Currently the only supported workflow is services expo for activity code `620100`
(information technology).
