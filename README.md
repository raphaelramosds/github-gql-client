# Github GraphQL API

This project scaffolds a web page that connects to the GitHub GraphQL API using Vite as the build tool.

## Dependencies

```bash
# Install Node.js with npm
curl -fsSL https://raw.githubusercontent.com/mklement0/n-install/stable/bin/n-install | bash -s 22
```

## Github access token

Create the file that will contain the enviroment variables

```bash
cp .env.example .env
```

Create a Fine-grained personal access token on your Github account and fill it on

```
VITE_GITHUB_ACCESS_TOKEN=
```

> Vite exposes the environment variable VITE_GITHUB_ACCESS_TOKEN to the browser runtime

## How to run

```bash
# Install dependencies
npm ci

# Run Vite server
npm run dev
```

Access the web page on http://localhost:5173