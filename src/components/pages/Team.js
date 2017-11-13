import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, ScrollView ,StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProgressCircle from 'react-native-progress-circle';
// import Card from './Card';


const {height: h, width: w} = Dimensions.get("window");

export default class Team extends Component {
   constructor(props)
   {
       super(props);
       this.state={
         teamName:'Team Malone',
         percent:25,
         goal:'$5,000',
         raised:'$1,250',
         data:[
             {  
                 name: 'Bob',
                 contri: '$1250'

              },
              {  
                name: 'Alex',
                contri: '$1250'

             },
             {  
                name: 'Tom Hanks',
                contri: '$1250'

             },
             {  
                name: 'Matt Smith',
                contri: '$1250'

             },
             {  
                name: 'Matt Smith',
                contri: '$1250'

             },
             {  
                name: 'Matt Smith',
                contri: '$1250'

             },
             {  
                name: 'Matt Smith',
                contri: '$1250'

             },{  
                name: 'Matt Smith',
                contri: '$1250'

             },{  
                name: 'Matt Smith',
                contri: '$1250'

             },{  
                name: 'Matt Smith',
                contri: '$1250'

             },
         ]
       }
   }
   _keyExtractor = (item, index) => index;

render(){
    return(
       <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 0.09, flexDirection:'row', backgroundColor: '#2f6884'}}>
              <View style={{ flex: 0.44, alignItems:'flex-end', justifyContent:'center'}}>
                  <Image source={require('../../Image/team@2x.png')} />
              </View>
              <View style={{ flex:0.55, justifyContent:'center',paddingLeft:'2%' }}>
                  <Text style={{ color: 'white', fontSize: h * 0.03, fontWeight: '500' }}>Team</Text>
              </View>
          </View>
          <View style={{ flex: 0.52, backgroundColor: 'white' }}>
             <View style={{ flex: 0.15, justifyContent:'center' }}>
                        <Text style={{ color: "#2f658c", fontSize: w * 0.055, fontWeight: '400', textAlign: 'center'}}>{this.state.teamName}</Text>
                    </View>
              <View style={{ flex: 0.55, backgroundColor: 'white', alignItems:'center' }}>
                    <ProgressCircle
                        percent={this.state.percent}
                        radius={68}
                        borderWidth={11}
                        color="#db9a55"
                        shadowColor="#f5f5f5"
                        bgColor="white"
                      >
                        <Text style={{ fontSize: w * 0.042, color: '#db9a55', fontWeight: '500' }}>{this.state.percent}%</Text>
                        <Text style={{ fontSize: w * 0.042, color: '#db9a55', fontWeight: '500' }}>to goal</Text>
                    </ProgressCircle>
                  </View>
                  <View style={{ flex: 0.3, justifyContent:'flex-start',backgroundColor:'white' }}>
                  <Text style={{ color: "#db9a55", fontSize: w * 0.036, fontWeight:'400', textAlign:'center', paddingTop:'4%' }}>goal: {this.state.goal}    |    raised: {this.state.raised}</Text>
                  <Text style={{ color: "#38383a", fontSize: w * 0.033, fontWeight:'400', textAlign:'center', paddingTop:'2%', textDecorationLine:'underline'}}>raised by 30 donors</Text>
                    </View>
          </View>
            <View style={{ flex: 0.06, backgroundColor:'white' }}>
                 <Text style={{ color: "#2f658c", fontSize: w * 0.053, fontWeight: '400', textAlign: 'center'}}>Team Activity</Text>
              </View>
          <View style={{ flex: 0.40,paddingBottom:"5%"}}>
              <View style={{ flex: 1, paddingHorizontal:'5%' }}>    
                    <FlatList
                       style={{ flex: 1, backgroundColor:'white' }}
                       data={this.state.data}
                       keyExtractor={this._keyExtractor}                       
                       numColumns={2}
                       renderItem={ ({ item, index }) =>
                       <View style={{ flex: 1, height: h * 0.1, flexDirection:'column', padding:'2%'}}>
                            <View style={{ flex: 0.5, height: h * 0.04, backgroundColor:'#f5f5f5' }}> 
                            <Text style={{ color: "#2f658c", fontSize: w * 0.04, fontWeight: '400', textAlign: 'center' }}>{item.name}</Text>
                            </View>
                            <View style={{ felx: 0.5, height: h * 0.04, backgroundColor:'#f5f5f5' }}>
                            <Text style={{ color: "#db9a55", fontSize: w * 0.035, fontWeight: '400', textAlign: 'center' }}>raised: ${item.contri}</Text>
                            </View>
                        </View> 
                       }
                        />
                      
                
              </View>
          </View>
       </View>
    )
}
}
