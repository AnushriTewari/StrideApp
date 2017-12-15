const logoutresponse = {
    
         response: '',
     
   }
  
getlogoutresponse =()=>{
    return new Promise((resolve, reject)=>{
       if(logoutresponse){
           resolve(logoutresponse)
       }
       else{
           reject("error");
       }
    })
  }
    export default getlogoutresponse;
  
  