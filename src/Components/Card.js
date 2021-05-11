import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <h3>{users.name}</h3>
                <p>{users.username}</p>
                <p>{users.website}</p>
                <p>{users.email}</p>
                <p>{users.company.name}</p>
                <p>{users.company.city}</p>
            </div>
        )
    }
}

