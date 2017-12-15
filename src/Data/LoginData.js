 const logindata = {
  
        email: '',
        password: ''
   
 }

 getLogindata =()=>{
  return new Promise((resolve, reject)=>{
     if(logindata){
         resolve(logindata)
     }
     else{
         reject("error");
     }
  })
}
  export default getLogindata;

