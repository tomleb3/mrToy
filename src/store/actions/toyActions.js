import { toyService } from "../../services/toyService"
import { utilService } from "../../services/utilService"

export function loadToys() {
    return (dispatch) => {
        return toyService.query()
            .then(toys => {
                const action = {
                    type: 'SET_TOYS',
                    toys
                }
                dispatch(action)
            })
    }
}

export function addToy(toy) {
    return (dispatch) => {
        return toyService.saveToy(toy)
            .then((savedToy) => {
                const action = {
                    type: 'ADD_TOY',
                    toy: savedToy
                }
                dispatch(action)
            })
    }
}

export function updateToy(toy) {
    return (dispatch) => {
        return toyService.saveToy(toy)
            .then((toy) => {
                const action = {
                    type: 'SAVE_TOY',
                    toy
                }
                dispatch(action)
            })
    }
}

// export function addToy(title, desc) {
//     return (dispatch) => {
//         const action = {
//             type: 'ADD',
//             toy: {
//                 _id: utilService.makeId(),
//                 title,
//                 desc,
//                 createdAt: Date.now(),
//                 createdBy: 'USER',
//                 isDone: false
//             }
//         }
//         dispatch(action)
//     }
// }

export function removeToy(toyId) {
    return (dispatch) => {
        return toyService.removeToy(toyId)
            .then(() => {
                const action = {
                    type: 'REMOVE_TOY',
                    toyId
                }
                dispatch(action)
            })
    }
}