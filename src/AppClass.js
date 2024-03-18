import React, { Component } from 'react'
import './App.css';
import BoxClass from "./component/boxclass.js"

const choice = {
    rock: {
        name: "rock",
        img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
    },
    scissors: {
        name: "scissor",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwNuMZFZH69OejlexMIWjjsNrhtWGQFGy8OkIPDEl-XxZUcZqqqKP7MuHkNbcR8xpZwM&usqp=CAU"
    },
    paper: {
        name: "paper",
        img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
    }
}

export default class AppClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: ""
        }
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        console.log("computerChoice: ", computerChoice)
        this.setState({
            // userSelect: { ...this.choice[userChoice] }
            userSelect: choice[userChoice],
            computerSelect: choice[computerChoice],
            result: this.judgment(choice[userChoice], choice[computerChoice]) /* 같은 현태로 2가지 값 넘겨줘서 비교하기 */
        }, () => {
            console.log("computerSelect: ", this.state.computerSelect)
        });
    }

    randomChoice = () => {
        let choiceArray = Object.keys(choice)
        let num = Math.floor(Math.random() * choiceArray.length)
        return choiceArray[num]
    }

    judgment = (user, computer) => {
        if (user.name == computer.name) {
            return "tie"
        } else if (user.name == "rock") return computer.name == "paper" ? "lose" : "win"
        else if (user.name == "scissor") return computer.name == "paper" ? "win" : "lose"
        else if (user.name == "paper") return computer.name == "rock" ? "win" : "lose"
    }

    render() {
        return (
            <div>
                <div className='main'>
                    <BoxClass title="YOU" item={this.state.userSelect} result={this.state.result} />
                    <BoxClass title="COMPUTER" item={this.state.computerSelect} result={this.state.result == "" ? "" : this.state.result == "tie" ? "tie" : this.state.result == "win" ? "lose" : "win"} />
                </div>

                <div className='main buttons'>
                    <button onClick={() => this.play("scissors")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>
            </div>
        )
    }
}
