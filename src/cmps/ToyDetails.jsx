import { Component } from 'react'
import { connect } from 'react-redux'

class _ToyDetails extends Component {

    state = {
        toy: ''
    }

    componentDidMount() {
        console.log('tom is the bestest!')
        const { toyId } = this.props.match.params
        console.log(this.props.match.params);
        if (toyId) {
            const toy = this.props.toys.find(toy => {
                return toy._id === +toyId
            })
            this.setState({ toy })
        }
    }

    render() {
        const { toy } = this.state
        console.log(toy);
        return (
            <div>
                <h1>help tom</h1>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toys: state.toyModule.toys
    }
}


export const ToyDetails = connect(mapStateToProps)(_ToyDetails)