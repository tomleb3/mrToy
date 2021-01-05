import { utilService } from './utilService.js';
import axios from 'axios'

var gToys
const URL = `http://localhost:3000/toys`

export const toyService = {
    query,
    getToyById,
    saveToy,
    removeToy
}

function query() {
    return axios.get(URL).then(res => { return res.data })
}

function getToyById(toyId) {
    return axios.get(`${URL}/${toyId}`)
        .then(res => res.data)
}

function saveToy(toyToSave) {
    if (toyToSave._id) {
        // UPDATE
        return axios.put(`${URL}/${toyToSave._id}`, toyToSave)
            .then(res => res.data)
    } else {
        // CREATE
        return axios.post(URL, toyToSave)
            .then(res => res.data)
    }
}

function removeToy(toyId) {
    return axios.delete(`${URL}/${toyId}`)
}