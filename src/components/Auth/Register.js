import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Dimensions, Image, TextInput, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';
import { Actions } from 'react-native-router-flux';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import { bindActionCreators } from 'redux';
import styles from '../.././styles/registerStyles'
import { register } from '../.././actions/authAction/registerAction';
import { connect } from 'react-redux';
const { height: h, width: w } = Dimensions.get('window');

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            lastName: '',
            firstName: '',
            phoneNo: '',
            checked: false,
        };
    }
    componentWillMount() {
        this.props.register();
    }

    render() {
        if (this.props.RegisterReducers.register_data) {
            const registerData = this.props.RegisterReducers.register_data
            return (
                <KeyboardAwareScrollView
                    { ...ifIphoneX({ scrollEnabled: false }, { scrollEnabled: true }) }
                >
                    <View style={styles.container1}>
                        <View style={styles.main}>
                            <Image
                                source={require('../../image/logo.png')} />
                        </View>
                        <View style={{ flex: 0.77 }}>
                            <Image
                                style={styles.img}
                                source={require('../../image/bg.png')} >
                                <View style={styles.nexttext}>
                                    <Text style={styles.textfront}>READY.SET.SIGN.UP.</Text>
                                </View>
                                <View style={styles.registerview}>
                                    <View style={styles.regview}>
                                        <Text style={styles.regtext}>Register*</Text>
                                    </View>
                                    <View style={styles.textinput}>
                                        <TextInput
                                            onChangeText={(firstName) => this.setState({ firstName })}
                                            value={this.state.firstName}
                                            placeholder='First name*'
                                            placeholderTextColor='#BFCACF'
                                            style={styles.textInputtext}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={styles.textinput}>
                                        <TextInput
                                            onChangeText={(lastname) => this.setState({ lastname })}
                                            value={this.state.lastname}
                                            placeholder='Lastname*'
                                            placeholderTextColor='#BFCACF'
                                            style={styles.textInputtext}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={styles.textinput}>
                                        <TextInput
                                            onChangeText={(Email) => this.setState({ Email })}
                                            value={this.state.Email}
                                            placeholder='Email*'
                                            placeholderTextColor='#BFCACF'
                                            style={styles.textnext}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={styles.textinput}>
                                        <TextInput
                                            onChangeText={(phoneNo) => this.setState({ phoneNo })}
                                            value={this.state.phoneNo}
                                            placeholder='PhoneNo*'
                                            placeholderTextColor='#BFCACF'
                                            style={styles.textnext}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={styles.textinput}>
                                        <TextInput
                                            password={true}
                                            secureTextEntry = {true}
                                            onChangeText={(password) => this.setState({ password })}
                                            value={this.state.password}
                                            placeholder='Password*'
                                            placeholderTextColor='#BFCACF'
                                            style={styles.textnext}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={styles.dropdown}>
                                        <Dropdown
                                            data={registerData.data}
                                            itemColor="#f89e59"
                                            baseColor="white"
                                            style={{ color: '#f89e59' }}
                                            IconStyle={{ color: 'white' }}
                                            selectedIndex={0}
                                        />
                                    </View>
                                    <View style={styles.checkbox}>
                                        <CheckBox
                                            size={19}
                                            checked={this.state.checked}
                                            onClick={() => null}
                                            checkBoxColor='white'
                                        />
                                        <Text style={{ color: 'white' }}>Receive text notifications</Text>
                                    </View>
                                    <View style={styles.signview}>
                                        <TouchableOpacity style={styles.signtext}>
                                            <Text style={styles.signup}>SIGN UP</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Image>
                            <View style={styles.loginview}>
                                <TouchableOpacity>
                                    <Text onPress={() => Actions.login()} style={styles.accexists}>Already have an Account?Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        RegisterReducers: state.RegisterReducers,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ register }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);



