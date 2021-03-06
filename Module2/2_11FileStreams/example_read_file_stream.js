function readFile(filename) {
    return ASQ(function (done) {

        var stream = fs.createReadStream(filename);
        var contents = "";

        stream.on("data", function (chunk) {
            console.log("data");
            contents += chunk;
        });

        stream.on("end", function () {
            done(contents);
        });
    });
}

function say(filename) {
    return readFile(filename)
        .then(delayMsg);
}

function delayMsg(done, contents) {
    setTimeout(function () {
        done(contents);
    }, 1000);
};

var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

module.exports.say = say;