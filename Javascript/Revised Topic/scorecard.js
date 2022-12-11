function scorecard(){
    fetch("http://localhost:3000/scoreCard").then((response)=>{
    return response.json()
    }).then((data)=>{
        console.log(data)
    })
}
scorecard()