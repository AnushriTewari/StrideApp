const accountdata = {
    email: '',
    password: '',
    lastName: '',
    firstName: '',
    phoneNo: '',
    Team: ''
}

getAccountData = () => {
    return new Promise((resolve, reject) => {
        if (accountdata) {
            resolve(accountdata)
        }
        else {
            reject("error");
        }
    })
}
export default getAccountData;

