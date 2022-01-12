const fs = require("fs")

const FILE_LOG_NAME = 'user_log.txt'

module.exports = (req, res, next) => {
    if (req.user) {
        let fileContent = fs.readFileSync(FILE_LOG_NAME, "utf-8")
        fileContent += JSON.stringify({ time: new Date(), userId: req.user.id })
        fs.writeFileSync(FILE_LOG_NAME, fileContent)
    }
    next()
}