import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from "react-native";
import FloatingLabel from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '.././styles/directoryStyles';
import { bindActionCreators } from 'redux';
import { directoryPage } from '.././actions/directoryAction';
import { connect } from 'react-redux';
const { height: h, width: w } = Dimensions.get('window');

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: false,
            newMail: '',
            index: 0,
        };
    }
    componentWillMount() {
        this.props.directoryPage()
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        if (this.props.Reducersnext.directory_data) {
            const directoryData = this.props.Reducersnext.directory_data
            return (
                <View style={styles.main}>
                    <View style={styles.mainhead}>
                        <View style={styles.imageiconview}>
                            <Image source={require('../image/directory.png')} style={styles.img} />
                        </View>
                        <View style={styles.mainheadview}>
                            <Text style={styles.mainheadtext}>Directory</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.incontain}>
                            <View style={styles.headview}>
                                <Text style={styles.heading}>Name</Text>
                                <Text style={styles.headingTeam}>Team</Text>
                                <Text style={styles.heading}>Phone</Text>
                            </View>
                            <View style={styles.list}>
                                <FlatList
                                    data={directoryData.users}
                                    keyExtractor={this._keyExtractor.bind(this)}
                                    renderItem={({ item, key, index }) =>
                                        <View style={[styles.bottomView, { backgroundColor: index % 2 == 0 ? "#f5f5f5" : "white" }]}>
                                            <View style={styles.textname}>
                                                <Text style={styles.textlistName}>{item.Name}</Text>
                                            </View>
                                            <View style={styles.textteam}>
                                                <Text style={styles.textlistTeam}>{item.Team}</Text>
                                            </View>
                                            <View style={styles.phone}>
                                                <Text style={styles.textlist}>{item.phone}</Text>
                                            </View>
                                        </View>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </View>
            )
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
        Reducersnext: state.DirectoryReducers,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ directoryPage }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Directory);