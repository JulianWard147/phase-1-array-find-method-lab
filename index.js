

function isSBWin(element, index, array) {

    return(element.result === "W")
}

// code your solution here
function superbowlWin(teamDataArray){
    if (typeof teamDataArray.find(isSBWin) !== 'undefined'){
      return teamDataArray.find(isSBWin).year}
    else{
        return} 
}


