import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput} from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import {Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { height: h, width: w } = Dimensions.get('window');
export default class Login extends Component {
   constructor(props) {
     super(props);
     this.state={
       email:'',
       password:'',
       disable:true,
     }
     //this.login=this.login.bind(this);
     }
    // login(){
    //  if( this.state.email && this.state.password !==''){
    //     alert("not null")
    //     this.setState({disable: false});
    //     Actions.drawer();
    //     }
    //     else{
    //       alert('null')
    //       this.setState({disable: !this.state.disable});
    //     }
    //   }
    
   render() {
     return (
       <KeyboardAwareScrollView contentContainerStyle={{ height: h * 0.96  }}>
      <View style={{ height: h * 0.96 , backgroundColor: 'white' }}>
          <View style={{ flex: 0.1, justifyContent: 'center',marginLeft:'5%' }}>
            <Image source={require("../../Image/logo.png")}></Image>
          </View>
        <View style={{ flex: 0.8}}>
        <Image source={ require('../../Image/bg@4x.png')} style={{ width: w , height: h * 0.8 }}>
           <View style={{ height: h * 0.3, backgroundColor: 'transparent' }}>
             <View style={{ flex: 0.7 ,justifyContent:'center', alignItems:'center'}}>
               <Text style={{ color:'white',fontSize:40, fontStyle:'italic'}}>ON THE GO</Text>
               <Text style={{ color:'white',fontSize:40, fontStyle:'italic'}}>Fundraising</Text>
             </View>
             <View style={{ flex:  0.2 , paddingBottom:'2%'}}>
             <Text style={{ textAlign: 'center', color:'white' ,fontSize: w * 0.055, fontWeight: "400" }}>READY.SET.WALK.</Text>
            </View>
            </View>
            <View style={{ height: h* 0.25 , backgroundColor: 'rgba(0, 0, 0, 0.2)', marginHorizontal: 35,justifyContent:'center', alignItems:'center'}}>
             <View style={{ flex: 0.5 , flexDirection:'row' , borderBottomWidth:1, borderBottomColor:'white',marginHorizontal:'3%'}}>
               <View style={{flex: 0.1, marginLeft:"4%", justifyContent:'center', alignItems:"flex-end"}}>
                <Image source={ require('../../Image/others/user.png')} style={{ height: h* 0.03 }}/>
               </View>
               <View style={{ flex: 0.9, justifyContent:'center', marginRight:"4%"}}>
               <FloatingLabel
                        labelStyle={{ color: '#BFCACF', fontSize: w * 0.035 }}
                        inputStyle={{ borderWidth: 0, color: 'white', fontSize: w * 0.04}}
                        underlineColorAndroid={'transparent'}
                        autoCorrect={false}
                        onChangeText={(email)=>this.setState({email:email, disable:false                                                                                                                                       })}
                        style={{ fontSize: w * 0.035 }}
                        value={this.state.email}>Username or Email</FloatingLabel>
              </View>
             </View>
             <View style={{ flex: 0.5 , flexDirection:'row' , borderBottomWidth:1, borderBottomColor:'white', marginBottom:'5%',marginHorizontal:'3%'}}>
             <View style={{flex: 0.1,  marginLeft:"4%", justifyContent:'center', alignItems:"flex-end", marginTop:"3%"}}>
                <Image source={ require('../../Image/others/locked-padlock.png')} style={{ height: h* 0.025  }}/>
                </View>
                <View style={{ flex: 0.7, justifyContent:'center',marginRight:"4%"}}>
                    <FloatingLabel
                          password
                          labelStyle={{ color: '#BFCACF', fontSize: w * 0.035 }}
                          inputStyle={{ borderWidth: 0, color: 'white', fontSize: w * 0.04, fontWeight: 'bold' }}
                          underlineColorAndroid={'transparent'}
                          autoCorrect={false}
                          onChangeText={(text) => {this.setState({password:text})}}
                          style={{fontSize: w * 0.035 }}
                          value={this.state.password}>Password</FloatingLabel>
              </View>
                </View>
            </View>
            <View style={{ justifyContent:'center', alignItems:'center',backgroundColor:"transparent"}}>
           <TouchableOpacity
              disabled={this.state.disable}
              onPress={()=>Actions.drawer()} style={{ height: h * 0.07 ,width: w * 0.55,backgroundColor: 'white', borderRadius:30, justifyContent:'center',  marginTop: "4%" }}>
             <Text style={{ color: '#db9a55', textAlign:'center', fontSize: w * 0.045, backgroundColor:'transparent' }}>LOGIN</Text>
           </TouchableOpacity>
           </View>
           <View style={{ height: h * 0.2 , backgroundColor: "transparent", alignItems:'center',paddingTop:'5%'}}>
             <TouchableOpacity onPress={()=>Actions.register()}>
               <Text style={{ color: 'white', fontSize: w *0.04 }}>Dont have an account? SignUp!</Text>
                </TouchableOpacity>
           </View>
        </Image>
        </View>
       <View style={{ flex: 0.1, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
         <TouchableOpacity style={{ }}>
         <Text onPress={()=>Actions.passwordReset()} style={{ color: 'steelblue', fontSize: w * 0.034 }}>Forgot your password?</Text>
         </TouchableOpacity>
         </View>
       </View>
       </KeyboardAwareScrollView>
     )
   }
 }