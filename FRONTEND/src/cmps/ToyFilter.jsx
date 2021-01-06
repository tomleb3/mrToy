import { Component } from 'react'

export class ToyFilter extends Component {

    state = {
        filterBy: {
            name: '',
            inStock: true,
            type: ''
        }
    }

    handleChange = ({ target }) => {
        const field = target.name

        const value = (field === 'inStock') ? target.checked : target.value

        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { name, type, inStock } = this.state.filterBy
        return (
            <section className="toy-filter">
                <h1>Filter:</h1>
                <form onSubmit={this.onFilter}>
                    <label htmlFor="">By Name</label>
                    <input type="text" name='name' value={name} onChange={this.handleChange} />
                    <label htmlFor="">By Type</label>
                    <select onChange={this.handleChange} name="type" value={type}>
                        <option value="">All</option>
                        <option value="Educational">Educational</option>
                        <option value="Funny">Funny</option>
                        <option value="Adult">Adult</option>
                    </select>
                    <label>in Stock</label>
                    <input type="checkbox" checked={inStock} onChange={this.handleChange} name="inStock" />
                    <button>Filter</button>
                </form>
            </section>
        )
    }
}