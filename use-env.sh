# Create an `.env` file depending on the input param 1.
# We already have env files named like `.env-[param1]` in the project root.
# If the file exists, copy it to `.env` file.
# If the file does not exist, show an error.

# Check if the input param is empty
if [ -z "$1" ]; then
  echo "Please input env name to use. Example: use-env.sh dev"
  return
fi

# Check if the file exists
if [ -f ".env-$1" ]; then
  cp ".env-$1" .env
  echo "Copied .env-$1 to .env"
else
  echo "Env file .env-$1 does not exist."
fi
