import { NEW_MESSAGE } from "./types";

export const newMessage = text => {
    return { type: NEW_MESSAGE, text };
}