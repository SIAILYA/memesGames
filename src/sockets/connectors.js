import openSocket from "socket.io-client";

let socket;

export const connectSocket = () => {
    socket = openSocket('http://localhost:5010');
}

export const createRoom = (room_name) => {
    console.log(room_name)
    socket.emit("create room", room_name)
}

export const connectRoom = (room_name) => {
    console.log(room_name)
    socket.emit("join room", room_name)
}
