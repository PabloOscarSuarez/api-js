module.exports = (detail) => {
    return {
        code: 403,
        text: "Bad Request",
        detail,
    }
}