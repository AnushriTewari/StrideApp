
const newupdateData = {

    data: [
        {
            value: 'Team Alex',
        }, {
            value: 'Team Amber',
        }, {
            value: 'Columbus Buddy Walk Event',
        }, {
            value: 'Stride',
        }
    ],

    dropData: ['Columbus Buddy Walk Update', 'Team Amber', 'Columbus Buddy Walk Event', 'Stride'],

}

getNewupdateData = () => {
    return new Promise((resolve, reject) => {
        if (newupdateData) {
            resolve(newupdateData);
        }
        else {
            reject('error');
        }
    })
}

export default getNewupdateData;

