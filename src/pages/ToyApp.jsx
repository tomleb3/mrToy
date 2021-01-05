import { Component } from 'react'
import { ToyList } from '../cmps/ToyList.jsx'
import { loadToys, addToy, removeToy } from '../store/actions/toyActions.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class _ToyApp extends Component {

    componentDidMount() {
        this.props.loadToys()
    }

    render() {
        const { toys, removeToy } = this.props
        return <section className="toy-app">
            <section>
                <Link to="/toy/update">Add Toy</Link>
                <ToyList toys={toys} onRemove={removeToy} />
            </section>
        </section>
    }
}

const mapStateToProps = (state) => {
    return {
        toys: state.toyModule.toys
    }
}

const mapDispatchToProps = {
    loadToys,
    addToy,
    removeToy
}

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)