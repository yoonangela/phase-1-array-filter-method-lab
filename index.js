function findMatching(array, string){
    
    return array.filter((value)=>value.toUpperCase()===string.toUpperCase())
}

function fuzzyMatch(array, string){
    return array.filter((value)=> value.startsWith(string))
}

function matchName(arrayOfo, string){
    return arrayOfo.filter((object)=> object["name"]===string)
}

