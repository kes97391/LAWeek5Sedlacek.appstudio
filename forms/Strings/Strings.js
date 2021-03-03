
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
alert(`Upper case string is: ${quoteString.toUpperCase()}`)
console.log(quoteString)

let authorString = "- Henry Ford"
alert(authorString)
console.log(authorString)

let completeString = quoteString.concat('\n', authorString)
alert(completeString)
console.log(completeString)

let found = completeString.includes("Henry")
found ? alert("Henry was in completeString") : alert("Henry was NOT in completeString")
console.log(found)