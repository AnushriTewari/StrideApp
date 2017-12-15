import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, Platform, ActivityIndicator } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { bindActionCreators } from 'redux';
import { NewupdatePage } from './../../actions/newupdateAction';
import { connect } from 'react-redux';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import styles from '../../styles/newupdateStyles'
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
        this.props.NewupdatePage()
    }

    render() {
        if (this.state.button === true) {
            return (
                <View style={styles.main}>
                    <View style={styles.spaceup}>
                    </View>
                    <View style={styles.headerView}>
                        <Text style={styles.headerText}>Your Update has been Posted</Text>
                        <TouchableOpacity onPress={() => Actions.notification()}
                            style={styles.ButtonView}>
                            <Text style={styles.ViewNotificationText}>View notification</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.space}>
                    </View>
                </View>
            );
        }
        if (this.props.NewupdateReducers.newupdate_data) {
            const newupdateData = this.props.NewupdateReducers.newupdate_data
            return (
                <KeyboardAwareScrollView
                    { ...ifIphoneX({ scrollEnabled: false }, { scrollEnabled: (Platform.OS === 'ios') ? false : true }) }
                    contentContainerstyle={styles.container}>
                    <View style={styles.notificationview}>
                        <View style={styles.NotificationImage}>
                            <Image source={require('../../image/notification.png')} style={styles.imageStyles} />
                        </View>
                        <View style={styles.newUpdateView}>
                            <Text style={styles.newUpdateText}>New Update</Text>
                        </View>
                    </View>

                    <View style={styles.secondView}>
                        <View style={[{ height: h * 0.09, width: w * 0.76 }, styles.NotificationImage]}>
                            <Dropdown
                                data={newupdateData.data}
                                itemColor="#f89e59"
                                baseColor="grey"
                                label='Select Recipients'
                                style={{ color: '#f89e59' }}
                                onChangeText={() => null}
                            />

                        </View>
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({ text })}
                            value={newupdateData.text}
                            style={styles.textInputStyle}
                            textAlignVertical={'top'}
                            placeholder='Type update here...'
                            placeholderTextColor='#8e8f91'
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
        return (
            <View style={styles.activityindicator}>
                <ActivityIndicator />
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        Reducers: state.Reducers,
        NewupdateReducers: state.NewupdateReducers,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ NewupdatePage }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);
