// Enhanced Object Literals
const objBase = {port: 3000, url: 'azat.co'}
const getAccounts = function(){return [1,2,3]}

const dataObj = {
    __proto__: objBase,
    getAccounts,
}

// Destructuring
const destructuringExercise = () => {
    const { port, url, getAccounts } = dataObj
    console.log(`port: ${port}`)
    console.log(`url: ${url}`)
    
    const values = getAccounts()
    console.log(`values: ${values}`)
}

module.exports = { destructuringExercise }


