const fs = require("fs")
const notFoundError = require('../errors/notFoundError')
const FILE_LOG_NOT_FOUND = 'not_found_log.txt'

module.exports = (req, res, next) => {
    let fileContent = fs.readFileSync(FILE_LOG_NOT_FOUND, "utf-8")
    fileContent += `\n${req.originalUrl} :: ${new Date}`
    fs.writeFileSync(FILE_LOG_NOT_FOUND, fileContent)

    res.json(notFoundError())
}