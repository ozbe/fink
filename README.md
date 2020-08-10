# Fink

## Setup
```bash
$ yarn install
```

## Deploy
```bash
# deploy backend
$ npx serverless deploy
# TODO - deploy the frontend
```

## Run Frontend
```bash
$ ENDPOINT=$(npx serverless info | awk '{ if ($1 ~ /wss/) { print $1 } }')
$ sed -e "s|URL|$ENDPOINT|" ./frontend/src/ws.config.template.json > ./frontend/src/ws.config.json
$ yarn workspace frontend run start
```

## Cleanup
```bash
$ npx serverless remove
```

## Debug

### Connect to backend
```bash
$ ENDPOINT=$(npx serverless info | awk '{ if ($1 ~ /wss/) { print $1 } }')
$ websocat $ENDPOINT
```

### Connect frontend to and run mock backend
```bash
# Configure
$ sed -e "s|URL|ws://127.0.0.1:8080|" ./frontend/src/ws.config.template.json > ./frontend/src/ws.config.json
# Serve
$ websocat -s 8080
```

### Example new message action
```json
{"type":"NEW_MESSAGE","text":"hi"}
```