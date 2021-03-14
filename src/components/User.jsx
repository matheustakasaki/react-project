import { Component, React } from "react";

const user = {
    firstName : 'Matheus',
    lastName  : 'Antunes'
};

function formatUserName(user) {
    return user.firstName + ' ' + user.lastName
}

function saudacao(user) {
    if (user) {
        return <h1>Olá, {formatUserName(user)} </h1>
    }
    return <h1>Olá, estranho!</h1>
}

const element = (
    saudacao(user)
)

export class User extends Component {
    render() {
        return (
            element
        );
    }
}
