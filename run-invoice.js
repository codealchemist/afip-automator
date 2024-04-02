import { exec } from 'child_process'
import inquirer from 'inquirer'
import pkgBanner from 'pkg-banner'

// Having `index.js`, the main package file, inside `/src`.
// We use the second param to go up one level to get the project's root folder,
// where `package.json` will most likely be placed.
pkgBanner(import.meta.url, './')

async function run () {
  const { amount } = await inquirer.prompt([
    {
      type: 'input',
      name: 'amount',
      message: 'Amount?'
    }
  ])

  // The idea is to run the invoice script with the amount passed as an environment variable.
  exec(`AMOUNT=${amount} npm run invoice`, (error, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)
  })
}

run()
