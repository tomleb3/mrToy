import { Link } from 'react-router-dom'
// import React from 'react'
import { Button } from '@material-ui/core'

export function ToyPreview({ toy, onRemove }) {

    return <div className="toy-preview flex col">
        <h2>{toy.name}</h2>
        <h4>${toy.price}</h4>
        <p>Category: {toy.type}</p>
        <Button color='secondary' onClick={() => onRemove(toy._id)}>X</Button>
        <Link to={`/toy/${toy._id}`}>Details</Link>
        <Link to={`/toy/update/${toy._id}`}>Edit</Link>
    </div>
}