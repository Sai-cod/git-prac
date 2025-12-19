function createResult(error, data) {
    const obj = {}
    if(error) {
        obj.status = "Failed",
        obj.error = error
    }
    else {
        obj.status = "Success",
        obj.data = data
    }
    return obj
}

module.exports = {createResult}