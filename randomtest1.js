function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
      delete obj[prop]
      return true
    } else {
      return false
    }
  }

var obj = {
    name: 'xin',
    age: 10
}
console.log(typeof obj)
var ret = removeProperty(obj, "age")
console.log(obj, ret)

/// -----------------------------------
String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0
    padString = String(padString || ' ')
    if (this.length > targetLength) {
        return String(this)
    }
    else {
        targetLength = targetLength - this.length
        while (targetLength > padString.length) {
            padString += padString
        }
        return padString.slice(0, targetLength) + String(this)
    }
}

console.log('abc'.padStart(10, '0'))

function formatDate(userDate) {
    let array = userDate.split('/')
    if (array.length != 3) {
        return ""
    }
    return array[2].padStart(4, '0') + array[0].padStart(2, '0') + array[1].padStart(2, '0')
  }
  
  console.log(formatDate("12/31/2014"));
  console.log(formatDate("2/3/2014"));
  console.log(formatDate("2/3/17"));