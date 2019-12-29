// Template Literals

console.log("The old way of using variables in strings")
const oldTempLit = (first, last) => {
    console.log( 'Your name is ' + first + ' ' + last + '.')
}

const newTempLit = (first, last) => {
    console.log( `Your name is ${first} ${last}.`)
}

// Multi-line Strings
const oldMultiLineStr = () => {
    console.log(
        'You have the right to be you.\n\
        You can only be you when you do your best.'
    )
}

const newMultiLineStr = () => {
    console.log( 
        `You have the right to be you.
        You can only be you when you do your best.`
    )
}

// Something new learned! Multiline strings

module.exports = { oldTempLit, newTempLit, oldMultiLineStr, newMultiLineStr }
