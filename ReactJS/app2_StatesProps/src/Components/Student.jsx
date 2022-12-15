import { Component } from 'react';
export class Student extends Component {
    constructor() {
        super()
        this.state = {
            welcome: "welcome to ReactJS training Class",
            studentDetails: {
                lname: "prasad",
                fname: "bhanu",
                email: "bhanuprasad@gmail.com"
            },
            subject: ["HTML", "CSS", "Bootstrap", "JavaScript", "ReactJS"]
        }
    }
    render() {
        return <div>

            <h2>{this.state.welcome}</h2>
            <h2>Welcome to StudentDetails</h2>
            <ul>
                {Object.values(this.state.studentDetails).map((val) => {
                    return <li>{val}</li>
                })}
            </ul>
            <h2>Data from Array</h2>
            {this.state.subject.map((val,i) => {
                return <li key={i}>{val}</li>
            })
            }
            <h2>Data from an Array</h2>
            <ul>{this.state.subject.map((val,i)=> <li key={i}>{val}</li>)}</ul>
        </div>
    }
}