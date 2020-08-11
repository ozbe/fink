# Fink

## Setup
```bash
$ yarn install
```

## Deploy
```bash
$ npx serverless deploy
$ npx serverless client build
$ npx serverless client deploy --no-confirm
```

## Run Frontend
```bash
$ REACT_APP_WS_URL=$(npx serverless info | awk '{ if ($1 ~ /wss/) { print $1 } }')
$ yarn workspace frontend run start
```

## Cleanup
```bash
$ npx serverless remove
```

## Debug

### Connect to backend
```bash
$ REACT_APP_WS_URL=$(npx serverless info | awk '{ if ($1 ~ /wss/) { print $1 } }')
$ websocat $REACT_APP_WS_URL
```

### Connect local frontend to and run mock backend
```bash
# Configure
$ REACT_APP_WS_URL=ws://127.0.0.1:8080
# Serve
$ websocat -s 8080
# Start local
$ yarn workspace frontend run start
```

### Example new message action
```json
{"type":"NEW_MESSAGE","text":"hi"}
```