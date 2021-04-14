export const GET_MESSAGE = "GET_MESSAGE";

export default function getMessage(message) {
    return {
        type: GET_MESSAGE,
        message
    }
}
