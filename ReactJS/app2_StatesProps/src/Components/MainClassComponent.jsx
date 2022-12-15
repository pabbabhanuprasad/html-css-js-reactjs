import { Component } from "react";

export class MainClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            fname: "Bhanu",
            lname: "Prasad",
            person: { fname: "Bhanu", lname: "Prasad", email: "bhanuprasad@gmail.com" },
            users: ["bhanu", "prasad", "Mohan"]
        }
    }
    // constructor(){
    //     super()
    //     this.fname="Bhanu",
    //     this.lname="Prasad",
    //     this.mail="bhanuprasad@gmail.com"
    // }
    render() {
        return <div>
            <h2>fname from string {this.state.fname}</h2>
            <h2>lname from string {this.state.lname}</h2><hr></hr>
            <h2>Data fron Object</h2>
            <ul>
                <li>{this.state.person.fname}</li>
                <li>{this.state.person.lname}</li>
                <li>{this.state.person.email}</li>
            </ul><hr></hr>
            {/* <h2>Data fron Array</h2>
            <ul>
                <li>{this.state.users[0]}</li>
                <li>{this.state.users[1]}</li>
                <li>{this.state.users[2]}</li>
            </ul> 
it is difficult to mention every index value in an array,so we are using Map*/}
            <h2>Data from Array</h2>
            {this.state.users.map((val) => {
                return <li>{val}</li>
            })
            }

{/* //object is not having method like Map to writen every element in an Object
to get elements in Object, Object should be coverted into an array after that use Map.         */}
       <h2>Object from Object</h2>
        <ul>
            {Object.values(this.state.person).map((val)=>{
                return <li>{val}</li>
            })}
        </ul>
        </div>
    }
}