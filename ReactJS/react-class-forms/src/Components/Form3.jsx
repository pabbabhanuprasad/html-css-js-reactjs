import React, { Component } from 'react'

export default class Form3 extends Component {
    constructor() {
        super()
        this.state = {
            RegistrationDetails: {
                university: "",
                institute: "",
                branch: "",
                degree: "",
                status: "",
                avgCPI: "",
                thSemester: "",
                experience: "",
                webSite: ""
            },
            allusers: [
                {
                    university: "Mohan University",
                    institute: "Raman campus",
                    branch: "EEE",
                    degree: "B.Tech",
                    status :"Pursuing",
                    avgCPI: "83",
                    thSemester: "6",
                    experience: "0",
                    webSite: "Mohan Educational Institutes"
                },
                {
                    university: "Raghu University",
                    institute: "Pascal campus",
                    branch: "ECE",
                    degree: "B.Tech",
                    status :"Pursuing",
                    avgCPI: "94",
                    thSemester: "7",
                    experience: "0",
                    webSite: "Raghu Educational Institutes"
                },
                {
                    university: "Bhanu University",
                    institute: "Raman campus",
                    branch: "EEE",
                    degree: "B.Tech",
                    status :"Pursuing",
                    avgCPI: "73",
                    thSemester: "7",
                    experience: "0",
                    webSite: "Bhanu Educational Institutes"
                }
            ],
            editIndex : null
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        var newUsers = { ...this.state.RegistrationDetails };
        if (e.target.name === "branch") {
            // console.log(e.target.childNodes)
            // console.log(e.target.childNodes.length);
            e.target.childNodes.forEach((element, i) => {
                if (e.target.childNodes[i].selected) {
                    // console.log(e.target.childNodes[i].text);
                    newUsers[e.target.name] = e.target.childNodes[i].text;
                }
            })
        }
        else if (e.target.name === "degree") {
            e.target.childNodes.forEach((element, i) => {
                if (e.target.childNodes[i].selected) {
                    newUsers[e.target.name] = e.target.childNodes[i].text;
                }
            })
        }
        else {
            newUsers[e.target.name] = e.target.value
        }
        this.setState({ RegistrationDetails: newUsers });
    }
    addUser = () => {
        // console.log(this.state.RegistrationDetails);
        var newAllUsers = [...this.state.allusers];
        newAllUsers.push(this.state.RegistrationDetails);
        this.setState({ allusers: newAllUsers });
        this.clearForm();
    }
    clearForm(){
        var newUsers={
            university: "",
            institute: "",
            branch: "",
            degree: "",
            status :"",
            avgCPI: "",
            thSemester: "",
            experience: "",
            webSite: ""
        }
        this.setState({RegistrationDetails:newUsers});
    }
    deleteUser = (user)=>{
        var latestUsers = this.state.allusers.filter((myUser,i)=> myUser.university != user.university);
        this.setState({allusers:latestUsers})
    }
    editUser = (user,i) => {
        this.setState({RegistrationDetails:user,editIndex:i})
    }
    updateUser =()=>{
        var newLatestUser = [...this.state.allusers];
        newLatestUser[this.state.editIndex] = this.state.RegistrationDetails;
        this.setState({allusers:newLatestUser,editIndex:null});
        this.clearForm();
    }
    render() {
        return (
            <div>
                <h2>Univeristy Registration Details</h2> <br />
                <form>
                    <label htmlFor="">University : </label>
                    <input type="text" name="university" value={this.state.RegistrationDetails.university} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Insitute : </label>
                    <input type="text" name="institute" value={this.state.RegistrationDetails.institute} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Branch : </label>
                    <select name="branch" value={this.state.RegistrationDetails.branch}  onChange={(e) => { this.handleChange(e) }}>
                        <option value={""}>select branch</option>
                        <option value={"ECE"}>ECE</option>
                        <option value={"CSE"}>CSE</option>
                        <option value={"EEE"}>EEE</option>
                        <option value={"CIVIL"}>CIVIL</option>
                        <option value={"MECH"}>MECH</option>
                    </select> <br />
                    <label htmlFor="">Degree : </label>
                    <select name="degree" value={this.state.RegistrationDetails.degree}  onChange={(e) => { this.handleChange(e) }}>
                        <option value={""}>Degree</option>
                        <option value={"B.Tech"}>B.Tech</option>
                        <option value={"M.Tech"}>M.Tech</option>
                    </select> <br />
                    
                    <input type="radio" name="status" checked={this.state.RegistrationDetails.status == "Completed"} value={"Completed"} onChange={(e) => { this.handleChange(e) }} />
                    <label htmlFor="">Completed</label> <br />
                    <input type="radio" name="status" checked={this.state.RegistrationDetails.status == "Pursuing"} value= {"Pursuing"} onChange={(e) => { this.handleChange(e) }} />
                    <label htmlFor="">Pursuing</label> <br />
                    <label htmlFor="">Average CPI : </label>
                    <input type="number" name="avgCPI" id="" value={this.state.RegistrationDetails.avgCPI} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="">th Semester : </label>
                    <input type="number" name="thSemester" id="" value={this.state.RegistrationDetails.thSemester} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Experience : </label>
                    <input type="number" name="experience" id="" value={this.state.RegistrationDetails.experience} onChange={(e) => { this.handleChange(e) }} />Years<br />
                    <label htmlFor="">Your Website : </label>
                    <input type="text" name="webSite" id="" value={this.state.RegistrationDetails.webSite} onChange={(e) => { this.handleChange(e) }} /> <br /> <br />
                    {this.state.editIndex != null ? 
                    <button type='button' className='btn btn-primary' onClick={this.updateUser}>Update Details</button> :
                    <button type='button' className='btn btn-primary' onClick={this.addUser}>Add Details</button>}
                   {/* <button type='button' className='btn btn-primary' onClick={this.addUser}>Add Details</button> */}
                </form> <br /><hr />

                <table className="table">
                    <thead>
                        <tr>
                            <th>University</th>
                            <th>Institute</th>
                            <th>Branch</th>
                            <th>Degree</th>
                            <th>Status</th>
                            <th>Average CPI</th>
                            <th>th Semester</th>
                            <th>Experience</th>
                            <th>Website</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allusers.map((user, i) =>
                            <tr key={i}>
                                <td>{user.university}</td>
                                <td>{user.institute}</td>
                                <td>{user.branch}</td>
                                <td>{user.degree}</td>
                                <td>{user.status}</td>
                                <td>{user.avgCPI}</td>
                                <td>{user.thSemester}</td>
                                <td>{user.experience}</td>
                                <td>{user.webSite}</td>
                                <td>
                                    <button type='button' className='btn btn-warning' onClick={()=>{this.editUser(user,i)}}>EDIT</button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger' onClick={()=>{this.deleteUser(user)}}>DELETE</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}