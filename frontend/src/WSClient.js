import { createContext } from 'react';
import wsConfig from './ws.config';

export const WebSocketContext = createContext();

class WSClient {
    constructor() {
        const listeners = [];
        this.listeners = listeners;

        this.ws = new WebSocket(wsConfig.url, wsConfig.protocols);
        this.ws.onmessage = function(e) {
            let data = JSON.parse(e.data);
            listeners.forEach(l => l(data))
        };
    }

    addListener = listener => {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener)
        }
    }

    send = message => {
        this.ws.send(JSON.stringify(message));
    }
}

export default WSClient;