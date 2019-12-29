const calculateTotalAmountLet = vip => {
    var amount = 0 // probably should also be let, but you can mix var and let
    if (vip) {
        let amount = 1 // first amount is still 0
    } 
    { // more crazy blocks!
        let amount = 100 // first amount is still 0
        {
        let amount = 1000 // first amount is still 0
        }
    }  
    console.log(amount)
}

const calculateTotalAmountConst = vip => {
    const amount = 0  
    if (vip) {
        const amount = 1 
    } 
    { // more crazy blocks!
        const amount = 100 
        {
        const amount = 1000
        }
    }  
    console.log(amount)
}

module.exports = { calculateTotalAmountLet, calculateTotalAmountConst }
