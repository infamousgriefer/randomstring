module.exports = function (len = 3)  {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" // Every letter a-z, A-Z and every number 0-9
    let res = ''

    for(i=0; i<len; i++) {
        res += charset[
            Math.floor( Math.random() * charset.length)
        ]
    }

    return res;
}
