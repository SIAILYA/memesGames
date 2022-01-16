import {setGameData, playerConnected, settingsUpdated} from "./actions/gameActions";
import {socket} from "./socket";
import {push} from "redux-first-history";
import {hideLobbyCreatingSpinner} from "./actions/appActions";

export const socketMiddleware = (store) => {
    socket.on('player_connected', (player) => {
        console.log("Player connected")
        console.log(player)

        store.dispatch(playerConnected(player));
    });

    socket.on("room_created", (gameData) => {
        console.log("Game room created")
        console.log(gameData)

        store.dispatch(setGameData(gameData))
        store.dispatch(hideLobbyCreatingSpinner())
        store.dispatch(push("/lobby"))
    })

    socket.on("connected_to_room", (gameData) => {
        console.log("Connected to game")
        console.log(gameData)

        store.dispatch(setGameData(gameData))
        store.dispatch(push("/lobby"))
    })

    socket.on("settings_updated", (settings) => {
        console.log("Settings updated")
        console.log(settings)

        store.dispatch(settingsUpdated(settings))
    })

    return (next) => (action) => {
        next(action);
    }
}
