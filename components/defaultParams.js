console.log("The old way of using default params")
var linkOld = function (height, color, url) {
    var height = height || 50
    var color = color || 'red'
    var url = url || 'http://azat.co'
    console.log(color, height, url)
}

console.log("The new way of using default params")
var linkNew = function(height = 50, color = 'red', url = 'http://azat.co') {
    console.log(color, height, url)
}

// Something new learned. Default Params
// Question: When should we use them? Seems like a bad practice

module.exports = { linkNew, linkOld }
