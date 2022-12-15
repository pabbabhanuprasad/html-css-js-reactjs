import {Component} from "react";
export class Heading extends Component {
    constructor(){
        super()
        this.state={
            showHeading:false,
            welcome:"This Is a Main Heading",
            showImage:true,
            image:"https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0"
        }
    }
    render(){
        return <div>
            {/* & and ? operators are teminary operators */}
            {/* {this.state.showHeading && <h2>{this.state.welcome}</h2>} */}
            {/* condition based rendering */}
            {this.state.showHeading ?<h2>{this.state.welcome}</h2>:<p>There is No Heading</p>}


            {/* {this.state.showImage && this.state.image.map((imgVal,i)=>
            <img src={imgVal} alt="" key={i}/>)} */}
        </div>
    }
}