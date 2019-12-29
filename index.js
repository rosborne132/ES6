const { linkNew, linkOld } = require("./components/defaultParams")
const { oldTempLit, newTempLit, oldMultiLineStr, newMultiLineStr } = require("./components/templateLiterals")
const { destructuringExercise } = require("./components/destructuring")
const { explicitMessageReturn, implicitMessageReturn } = require("./components/arrowFuncs")
const { wait1000 } = require("./components/promises")
const { calculateTotalAmountLet, calculateTotalAmountConst } = require("./components/letAndConst")
const Rectangle = require("./components/classes")

console.log(`
//-------------------------------------------------------
//--------------------Default Params---------------------
//-------------------------------------------------------
`)

linkOld()
linkNew()


console.log(`
//-------------------------------------------------------
//--------------------Template Literals------------------
//-------------------------------------------------------
`)

oldTempLit("John", "Doe")
newTempLit("John", "Doe")
oldMultiLineStr()
newMultiLineStr()


console.log(`
//-------------------------------------------------------
//--------------------Destructuring----------------------
//-------------------------------------------------------
`)

destructuringExercise()


console.log(`
//-------------------------------------------------------
//--------------------Arrow Functions--------------------
//-------------------------------------------------------
`)

console.log("Explicit Message Return")
console.log(explicitMessageReturn)

console.log("Implicit Message Return")
console.log(implicitMessageReturn)


console.log(`
//-------------------------------------------------------
//--------------------Const and Let----------------------
//-------------------------------------------------------
`)

calculateTotalAmountLet(true)
calculateTotalAmountConst(true)


console.log(`
//-------------------------------------------------------
//--------------------Classes----------------------------
//-------------------------------------------------------
`)

const square = new Rectangle(20, 20);
console.log(`
    Square Information
    Height: ${square.height}
    Width: ${square.width}
    Area: ${square.area}
`)


console.log(`
//-------------------------------------------------------
//--------------------Promises---------------------------
//-------------------------------------------------------
`)

wait1000()
    .then(() => {
        console.log("First Message!")
        return wait1000()
    })
    .then(() => console.log("Second Message!"))
