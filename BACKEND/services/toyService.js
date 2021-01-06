const fs = require('fs')
const gToys = require('../data/toys.json')


module.exports = {
    query,
    getById,
    save,
    remove
}


function query(filterBy) {
    var toys = gToys;

    return Promise.resolve(toys.filter(toy => {
        return toy.name.includes(filterBy.name)
    }))
    return Promise.resolve(toys)
}

function getById(toyId) {
    const toy = gToys.find(toy => toy._id === toyId)
    if (toy) return Promise.resolve(toy)
    else return Promise.reject('NO TOY')
}

function remove(toyId) {
    const idx = gToys.findIndex(toy => toy._id === toyId)
    console.log(toyId)
    if (idx >= 0) {
        gToys.splice(idx, 1)
        _saveToysToFile()
        return Promise.resolve()
    }
    else return Promise.reject('NO TOY')
}

function save(toy) {
    if (toy._id) {
        const idx = gToys.findIndex(currToy => currToy._id === toy._id)
        gToys[idx] = toy;
    } else {
        toy._id = _makeId()
        toy.createdAt = Date.now()
        gToys.unshift(toy)
    }
    _saveToysToFile()
    return Promise.resolve(toy)
}





function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _saveToysToFile() {
    fs.writeFileSync('./.json', JSON.stringify(gToys, null, 2))
}
