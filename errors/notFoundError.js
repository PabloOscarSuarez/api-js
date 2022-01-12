module.exports = (detail) => {
    return {
        code: 404,
        text: "Not Found",
        detail,
    }
}