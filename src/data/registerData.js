const registerData = {
    data :[
        {
            value: 'Select a team to join',
        }, {
            value: 'Team Alex',
        }, {
            value: 'Team Amber',
        }, {
            value: 'Columbus Buddy Walk Event',
        }, {
            value: 'Stride',
        }]
    
    }

    getRegisterData = () => {
        return new Promise((resolve, reject) => {
            if(registerData){
                resolve(registerData);
              } else {
                reject("error");
              };
          });
      }

     export default getRegisterData;