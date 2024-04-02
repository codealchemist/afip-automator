# AFIP Automator

A little automation tool to ease the burden of tedious accounting tasks.

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
SELL_POINT_OPTION=[SELL_POINT_OPTION]
COUNTRY_OPTION=[COUNTRY_OPTION] # 225=Uruguay
COUNTRY_ID=[TARGET_COUNTRY_ID]
COMPANY_ID=[TARGET_COMPANY_ID]
COMPANY_NAME=[TARGET_COMPANY_NAME]
COMPANY_ADDRESS=[TARGET_COMPANY_ADDRESS]
COMPANY_EMAIL=[TARGET_COMPANY_EMAIL]
DESCRIPTION=Software development services
```

## Run it

`npm start`

It will ask for the invoice amount and do the rest on its own.
Currently the only supported workflow is services expo for activity code `620100`
(information technology).
