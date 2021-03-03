let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
console.log(`Upper case string is: ${quoteString.toUpperCase()}`)

let authorString = "-Henry Ford"
let completeString = quoteString.concat(authorString)
console.log(completeString)

let found = completeString.includes("Henry")
  if (found == false)
    console.log("Henry was not in completeString")
  else
    console.log("Henry was in completeString")