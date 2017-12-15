import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { height: h, width: w } = Dimensions.get('window');
import { bindActionCreators } from 'redux';
import { NotificationPage, login } from '../.././actions/notificationAction';
import { connect } from 'react-redux';
import styles from '../../styles/notificationStyles';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';


class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onTabPressColor: '#f89e59',
            event: true,
            donation: false,
            onTabRelease: '#44859e'
        };

    }
    componentWillMount() {
        this.props.NotificationPage()
    }

    render() {
        if (this.props.NotificationReducers.notification_data) {
            const notificationData = this.props.NotificationReducers.notification_data
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.imageView}>
                            <Image source={require('../../image/notification.png')} style={styles.img} />
                        </View>
                        <View style={styles.headerText}>
                            <Text style={styles.notification_text}>Notifications</Text>
                        </View>
                    </View>
                    <View style={styles.tabView}>
                        <TouchableOpacity onPress={() => { this.setState({ onTabPressColor: '#f89e59' }), this.setState({ event: true }), this.setState({ onTabRelease: '#44859e' }) }}
                            style={[styles.tab, { flex: 0.45 }]}>
                            <Text style={[styles.tabText, { color: this.state.onTabPressColor }]}>EVENT</Text>
                        </TouchableOpacity>
                        <View style={[styles.tab, { flex: .1 }]}>
                            <Text style={styles.bar}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => { this.setState({ onTabRelease: '#f89e59' }), this.setState({ event: false }), this.setState({ donation: true }), this.setState({ onTabPressColor: '#44859e' }) }}
                            style={[styles.tab, { flex: 0.45 }]}>
                            <Text style={[styles.tabText, { color: this.state.onTabRelease }]}>DONATIONS</Text></TouchableOpacity>
                    </View>
                    <View style={styles.space}></View>
                    {
                        this.state.event === true
                            ?
                            <View style={[styles.tab, { flex: 1 }]}>
                                <View style={[styles.flatListView, { flex: 1 }]}>
                                    <FlatList
                                        data={notificationData.events}
                                        renderItem={({ item, key }) =>
                                            <View style={[styles.mainView, { marginVertical: '2%' }]}>
                                                <View style={styles.eventHeaderView}>
                                                    <Text style={styles.textStyle}>{item.eventHeader}</Text>
                                                </View>
                                                <View style={styles.events}>
                                                    <View style={[{ flex: .15 }, styles.textView]}>
                                                        <Text style={styles.textStyle}>{item.eventName}</Text>
                                                    </View>
                                                    <View style={styles.dateTimeView}>
                                                        <Text style={styles.textStyle}>{item.eventTime}, {item.eventDate}</Text>
                                                    </View>
                                                    <View style={styles.eventDescriptionView}>
                                                        <Text style={styles.fontView}>{item.eventDescription}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        } />
                                </View>
                            </View>
                            :
                            <View style={[styles.tab, { flex: 1 }]}>
                                <View style={[styles.flatListView, { flex: 0.85 }]}>
                                    <FlatList
                                        data={notificationData.donations}
                                        renderItem={({ item, key }) =>
                                            <View style={styles.mainViewdonation}>
                                                <View style={styles.eventHeaderView}>
                                                    <Image source={require('../../image/logo.png')} style={styles.imagelogo} />
                                                </View>
                                                <View style={styles.donations}>
                                                    <View style={[...ifIphoneX({ flex: .25 }, { flex: .2 }), styles.textView]}>
                                                        <Text style={styles.textStyle}>{item.donationHeading}</Text>
                                                    </View>
                                                    <View style={styles.dateTimeView}>
                                                        <Text style={styles.textStyle}>{item.donationTime}, {item.donationDate}</Text>
                                                    </View>
                                                    <View style={styles.donationView}>
                                                        <Text style={styles.fontView}>{item.donationDescription}</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        } />
                                </View>
                                <View style={styles.newUpdateButtonView}>
                                    <TouchableOpacity onPress={() => Actions.update()}
                                        style={styles.onPressNewUpdate}>
                                        <Text style={styles.newUpdateStyles}>+ New Update</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                </View>
            )
        }
     return(
            <View style={styles.activityindicator}>
                <ActivityIndicator />
                </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        NotificationReducers: state.NotificationReducers,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ NotificationPage }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Notification);