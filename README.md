# Fink

## Setup
```bash
$ npm install
```

## Deploy
```bash
$ npx serverless deploy
```

## Run
```bash
$ ENDPOINT=$(npx serverless info | awk '{ if ($1 ~ /wss/) { print $1 } }')
$ websocat $ENDPOINT
```

## Cleanup
```bash
$ npx serverless remove
```