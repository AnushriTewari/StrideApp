import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import styles from '.././styles/donationStyles'
import { bindActionCreators } from 'redux';
import { donationPage } from '.././actions/donationAction';
import { connect } from 'react-redux';
const { height: h, width: w } = Dimensions.get('window');

class Donation extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.donationPage()
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        if (this.props.DonationReducers.donation_data) {
            const donationData = this.props.DonationReducers.donation_data
            return (
                <View style={styles.main}>
                    <View style={styles.headerview}>
                        <View style={styles.imageview}>
                            <Image source={require('../image/donationIcon.png')} style={styles.image} />
                        </View>
                        <View style={styles.titleview}>
                            <Text style={styles.texthead}>Donations</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.flatlist}>
                            <FlatList
                                data={donationData.users}
                                keyExtractor={this._keyExtractor.bind(this)}
                                renderItem={({ item, key, index }) =>
                                    <View style={[styles.listview, { backgroundColor: index % 2 == 0 ? "#f5f5f5" : "white", marginVertical: '1%' }]}>
                                        <View style={styles.name}>
                                            <Text style={styles.nametext}>{item.Name}</Text>
                                        </View>
                                        <View style={styles.amount}>
                                            <Text style={styles.nametext}>{item.Amount}</Text>
                                        </View>
                                        <View style={styles.date}>
                                            <Text style={styles.nametext}>{item.Date}</Text>
                                        </View>
                                    </View>
                                }
                            />
                        </View>
                        <View style={styles.bottomview}></View>
                        <View style={styles.amountcollected}>
                            <View style={{ flex: .4, flexDirection: 'row' }}>
                                <View style={styles.viewdiv}>
                                    <Text style={styles.statics}>Goal:{donationData.cost}</Text>
                                </View>
                                <View style={[styles.bottomview, { alignItems: 'center' }]}>
                                    <Text style={styles.statics}>|</Text>
                                </View>
                                <View style={styles.viewdiv}>
                                    <Text style={styles.statics}>Raised:{donationData.raised}</Text>
                                </View>
                            </View>
                            <View style={styles.donornumberview}>
                                <Text style={styles.numberdonor}>Raised by 30 donors</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.activityindicator}>
                <ActivityIndicator />
            </View>)
    }
}
const mapStateToProps = state => {
    return {
        DonationReducers: state.DonationReducers,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ donationPage }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Donation);