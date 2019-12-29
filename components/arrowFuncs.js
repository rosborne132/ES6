var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
const explicitMessageReturn = ids.map(function (value, index) {
  return 'ID of ' + index + ' element is ' + value + ' '
})

const implicitMessageReturn = ids.map((value, index) => `ID of ${index} element is ${value} `)

// Something new learn explicit and implicit return

module.exports = { explicitMessageReturn, implicitMessageReturn }
