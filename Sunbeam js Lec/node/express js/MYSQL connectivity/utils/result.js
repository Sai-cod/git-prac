function createResult(error, data) {
    const obj = {}
    if(error) {
        obj.status = "Error"
        obj.error = error
    }
    else {
        obj.status = "Success"
        obj.data = data
    }
    return obj
}

module.exports = {createResult}