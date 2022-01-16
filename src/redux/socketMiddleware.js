import {setGameData, playersUpdate, settingsUpdated} from "./actions/gameActions";
import {socket} from "./socket";
import {push} from "redux-first-history";
import {hideLobbyCreatingSpinner} from "./actions/appActions";

export const socketMiddleware = (store) => {

    socket.on("room_created", (gameData) => {
        console.log("Game room created")
        console.log(gameData)

        store.dispatch(setGameData(gameData))
        store.dispatch(hideLobbyCreatingSpinner())
        store.dispatch(push("/lobby?gameid=" + gameData.game.gameId))
    })

    socket.on("connected_to_room", (gameData) => {
        console.log("Connected to game")
        console.log(gameData)

        store.dispatch(setGameData(gameData))
        store.dispatch(push("/lobby?gameid=" + gameData.game.gameId))
    })

    socket.on('player_connected', (players) => {
        console.log("Player connected")
        console.log(players)

        store.dispatch(playersUpdate(players));
    });

    socket.on("player_leave", (players) => {
        console.log("Player leave")
        console.log(players)

        store.dispatch(playersUpdate(players));
    })

    socket.on("player_kicked", (players) => {
        console.log("Player kicked")
        console.log(players)

        store.dispatch(playersUpdate(players));
    })

    socket.on("you_are_kicked", () => {
        console.log("You are kicked")
        //TODO: Страница кика
        window.location.href = "/kicked"
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
