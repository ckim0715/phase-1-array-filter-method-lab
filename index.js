// Code your solution here

function findMatching (drivers, name) {
    return drivers.filter(function (match) {

     return match.toLowerCase() === name.toLowerCase()
    });
    
}

