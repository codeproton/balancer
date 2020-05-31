const { openSync } = require("fs")

function fireNginx() {
    if(!process.env.DYNO) {
        return console.log("Sure? U're running nginx on development mode?")
    }

    openSync("/tmp/app-initialized", "w")
    return console.log("Initializing with heroku")
}

fireNginx()