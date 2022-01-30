import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "#1 David de Gea",
            foto: "https://img.a.transfermarkt.technology/portrait/header/59377-1454414410.jpg?lm=1"
        },
        {
            id: 2,
            nombre: "#19 Raphaël Varane",
            foto: "https://img.a.transfermarkt.technology/portrait/header/164770-1598301905.jpg?lm=1"
        },
        {
            id: 3,
            nombre: "#5 Harry Maguire",
            foto: "https://img.a.transfermarkt.technology/portrait/header/177907-1520608280.jpg?lm=1"
        },
        {
            id: 4,
            nombre: "#3 Eric Bailly",
            foto: "https://img.a.transfermarkt.technology/portrait/header/286384-1641995676.jpg?lm=1"
        },
        {
            id: 5,
            nombre: "#23 Luke Shaw",
            foto: "https://img.a.transfermarkt.technology/portrait/header/183288-1469631475.jpg?lm=1"
        },
        {
            id: 6,
            nombre: "#4 Phil Jones",
            foto: "https://img.a.transfermarkt.technology/portrait/header/117996-1469631370.jpg?lm=1"
        },
        {
            id: 7,
            nombre: "#6 Paul Pogba",
            foto: "https://img.a.transfermarkt.technology/portrait/header/122153-1582114937.jpg?lm=1"
        },
        {
            id: 8,
            nombre: "#34 Donny van de Beek",
            foto: "https://img.a.transfermarkt.technology/portrait/header/288255-1642174403.jpg?lm=1"
        },
        {
            id: 9,
            nombre: "#31 Nemanja Matic",
            foto: "https://img.a.transfermarkt.technology/portrait/header/74683-1498839702.jpg?lm=1"
        },
        {
            id: 10,
            nombre: "#17 Fred",
            foto: "https://img.a.transfermarkt.technology/portrait/header/191614-1515442833.jpg?lm=1"
        },
        {
            id: 11,
            nombre: "#18 Bruno Fernandes",
            foto: "https://img.a.transfermarkt.technology/portrait/header/240306-1636537174.jpg?lm=1"
        },
        {
            id: 12,
            nombre: "#8 Juan Mata",
            foto: "https://img.a.transfermarkt.technology/portrait/header/44068-1527148066.jpg?lm=1"
        },
        {
            id: 13,
            nombre: "#10 Marcus Rashford",
            foto: "https://img.a.transfermarkt.technology/portrait/header/258923-1565603308.png?lm=1"
        },
        {
            id: 14,
            nombre: "#25 Jadon Sancho",
            foto: "https://img.a.transfermarkt.technology/portrait/header/401173-1632686361.jpg?lm=1"
        },
        {
            id: 15,
            nombre: "#7 Cristiano Ronaldo",
            foto: "https://img.a.transfermarkt.technology/portrait/header/8198-1631656078.jpg?lm=1"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)