
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, TextInput, Platform } from 'react-native';
import styles from '../.././styles/myaccountStyles';
import FloatingLabel from 'react-native-floating-labels';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';
import { Actions } from 'react-native-router-flux';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import { bindActionCreators } from 'redux';
import { account } from '../../actions/accountAction'
import { connect } from 'react-redux';


class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            email: '',
            password: '',
            lastName: '',
            firstName: '',
            phoneNo: '',
            Team: ''
        };
        this.update = this.update.bind(this);
    }

    update() {
        let data = {
            email: this.state.email,
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            phoneNo: this.state.phoneNo,
            Team: this.state.Team,
            password: this.state.password
        }
        this.props.account(data);
        Actions.dashboardTeamCaptain();
    }

    render() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.main}
                { ...ifIphoneX({ scrollEnabled: false }, { scrollEnabled: (Platform.OS === 'ios') ? false : true }) }
            >
                <View style={styles.main}>
                    <View style={styles.headerView}>
                        <Text style={styles.headerText}>My Account</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.rowView}>
                            <View style={styles.rowText}>
                                <Text>FirstName</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    style={styles.inputStyles}
                                    onChangeText={(firstName) => this.setState({ firstName })}
                                    value={this.state.firstName}
                                    placeholder='First name'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.rowText}>
                                <Text>Lastname</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    style={styles.inputStyles}
                                    onChangeText={(lastname) => this.setState({ lastname })}
                                    value={this.state.lastname}
                                    placeholder='Last name'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.rowText}>
                                <Text>Email</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    style={styles.inputStyles}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    placeholder='Email'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.rowText}>
                                <Text>Phone no</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    style={styles.inputStyles}
                                    onChangeText={(phoneno) => this.setState({ phoneno })}
                                    value={this.state.phoneno}
                                    placeholder='Phone no'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.rowText}>
                                <Text>Password</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    secureTextEntry={true}
                                    password={true}
                                    style={styles.inputStyles}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                    placeholder='Password'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.rowText}>
                                <Text>Team</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    style={styles.inputStyles}
                                    onChangeText={(team) => this.setState({ team })}
                                    value={this.state.team}
                                    placeholder='Team'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                        <View style={styles.checkBoxView}>
                            <CheckBox
                                size={19}
                                checked={this.state.checked}
                                onClick={() => null}
                                checkBoxColor='black'
                            />
                            <Text style={{ color: 'black' }}>Receive text notifications</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity onPress={() => this.update()}
                                style={styles.buttonStyle}>
                                <Text style={styles.Update}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
const mapStateToProps = state => {
    return {
        AccountReducers: state.AccountReducers,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ account }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);

