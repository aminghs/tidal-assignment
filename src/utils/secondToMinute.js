export const secondToMinute = (e) => {
    return Math.floor(e / 60) + ':' + ('0' + Math.floor(e % 60)).slice(-2)
}