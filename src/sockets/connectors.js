import openSocket from "socket.io-client";

let socket;

export const connectSocket = () => {
    socket = openSocket('http://localhost:5010');

    socket.on("room connection", (msg) => {
        console.log(msg)
    })
}

export const createRoom = (room_name) => {
    connectSocket()

    socket.emit("create room", room_name)
}

export const connectRoom = (room_name, name, avatar) => {
    connectSocket()

    socket.emit("join room", {room_name, name, avatar})
}

