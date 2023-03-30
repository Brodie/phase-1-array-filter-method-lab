// Code your solution here

const findMatching = (array, str) =>{
    return array.filter(function (name){
        return name.toLowerCase() === str.toLowerCase()
    })
}

const fuzzyMatch = (array, str) =>{
    return array.filter(function (name){
        let splitName = name.split('');
        let splitStr = str.split('');
        return (splitName[0] === splitStr[0])
    })
}

const matchName = (driver, str) =>{
    return driver.filter(function(person){
        return person.name === str
    })
}