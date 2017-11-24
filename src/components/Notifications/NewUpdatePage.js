import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { bindActionCreators } from 'redux';
import { NotificationPage } from '../.././actions/listUserAction';
import { connect } from 'react-redux';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import styles from '../../Styles/NewUpdateStyles'
const { height: h, width: w } = Dimensions.get('window');

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: false,
            text: '',
        }
    }

    componentWillMount() {
        this.props.NotificationPage()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.Reducers.notification_data) {
            console.log(nextProps.Reducers.notification_data)
        }
    }

    render() {
        if (this.state.button === true) {
            return (
            <View style={styles.main}>
                <View style={styles.space}>
                </View>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>Your Update has been Posted</Text>

                    <TouchableOpacity
                        style={styles.ButtonView}>
                        <Text style={styles.ViewNotificationText}>View notification</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.space}>
                </View>
            </View>
            );
        }
        if (this.props.Reducers.notification_data) {
            const notificationData = this.props.Reducers.notification_data
            return (
                <KeyboardAwareScrollView 
                  { ...ifIphoneX( {scrollEnabled:false} , {scrollEnabled:true})}
                  contentContainerstyle={styles.container}>
                    <View style={styles.notificationview}>
                        <View style={styles.NotificationImage}>
                            <Image source={require('../../Image/notification.png')} style={styles.imageStyles} />
                        </View>
                        <View style={styles.newUpdateView}>
                            <Text style={styles.newUpdateText}>New Update</Text>
                        </View>
                    </View>

                    <View style={styles.secondView}>
                        <View style={[{ flex: 0.8 }, styles.NotificationImage]}>
                            <ModalDropdown options={notificationData.dropData}
                                style={styles.boardStyle}
                                textStyle={styles.dropdownText}
                                defaultValue='Select Receipients '
                                dropdownStyle={styles.dropdownMode}
                                dropdownTextStyle={styles.dropText}
                            />
                        </View>
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({ text })}
                            value={notificationData.text}
                            style={styles.textInputStyle}
                            textAlignVertical={'top'}
                            placeholder='Type update here...'
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={styles.sendUpdateView}>
                        <TouchableOpacity onPress={() => this.setState({ button: true })}
                            style={styles.sendUpdate}>
                            <Text style={styles.sendUpdateText}>Send Update</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAwareScrollView>

            );
        }
    }
}
const mapStateToProps = state => {
    return {
        Reducers: state.Reducers,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ NotificationPage }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);
