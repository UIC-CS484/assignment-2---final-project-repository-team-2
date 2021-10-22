module.exports = {
    _jsonError: function (text, ...payload) {
        return {
            error: text,
            ...payload
        }
    }
}