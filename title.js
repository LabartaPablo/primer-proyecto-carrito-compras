import { Component } from 'react'

const styles ={
    titulo: {
        marginButton: '30px',
    }
}

class Title extends Component {
    render () {
        return (
            <h1 style={styles.titulo}>Tienda de Pablo</h1>
        )
    }
}


export default Title