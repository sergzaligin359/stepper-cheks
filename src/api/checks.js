import checks from './mockData/mockChecks'

export const fetchChecks = async () => {
    return new Promise((resolve, reject) => {
        resolve(checks)
    })
}