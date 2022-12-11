// function getMatchheadres() {
//     fetch("http://localhost:3000/matchHeader").then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data.matchId)
//         fetch("http://localhost:3000/scoreCard/"+data.matchId).then((matchresponse)=>{
//             return matchresponse.json()
//         }).then(matchData=>{
//             console.log(matchData)
//         });

//     });
// }
// getMatchheadres();

//to avoid then loopings like above we are writing asynchronous code like below
async function getMatchheadres() {
    var allMatchheaders = await (await fetch("http://localhost:3000/matchHeader")).json();
    var matchData = await (await fetch("http://localhost:3000/scoreCard/" + allMatchheaders.matchId)).json();
    // console.log(matchData.partnershipData)
    displayPartnershipData(matchData.partnershipData)
}
function displayPartnershipData(Data){
    console.log(Data)
}
getMatchheadres();