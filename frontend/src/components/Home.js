import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import { MyContext } from '../context/'


export default class Home extends Component {
    render() {
        return (
            <div className="columns is-centered">
                <div className="column box main-wrapper is-10">
                    <div className="column">
                        <h2>IronProfile</h2>
                        <p>Today we will create an app with authoritation, adding some cool styles</p>
                    </div>
                    <div className="column Home-buttons">
                        <Link className="button is-primary button" to={'/signup'}>Sign up</Link>
                        <Link className="button is-primary button" to={'/login'}>Log in</Link>
                    </div>
                </div>
            </div>
        )
    }
}

Home.contextType = MyContext