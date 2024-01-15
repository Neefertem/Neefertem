/**
 * makeid
 * @param length Number of chars to include in return value
 * @returns Number (length) of random alphanumeric characters in a string
 * @author Scott Gingras Dec.11 2019
 */
function makeid( length ) {
    let result = ''
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789',
        charactersLength = characters.length
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt( Math.floor( Math.random() * charactersLength ) )
    }
    return result
}
