const { openSync } = require("fs")

/**
 * Max 32-bit signed integer
 */
const signedInteger = 2147483647 

function fireNginx() {
    if(!process.env.DYNO) return console.log("Sure? U're running nginx on development mode?")

    openSync("/tmp/app-initialized", "w")
    ping()

    return console.log("Initializing with heroku")
}

function ping(){
    return setTimeout(ping, signedInteger)
}

fireNginx()