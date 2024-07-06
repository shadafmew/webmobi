import React, { useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IonIcon from 'react-native-vector-icons/Ionicons';


const { width, height } = Dimensions.get('window');

interface Props { }
const HomeScreen: FC<Props> = (): JSX.Element => {

    const [isVisible, setIsVisible] = useState(false)


    const toggleScanner = () => {
        setIsVisible(!isVisible)
    }

    const linkToWebsite = () => {
        Linking.openURL('https://www.nexalink.co/');

    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.shareButton} onPress={toggleScanner}>
                        <View>
                            {isVisible?(
                                <MaterialCommunityIcons name="chevron-up" size={20} color="#fff" style={{ marginRight: 10, alignSelf: 'center', textAlign: 'center', }} />
                            ):(
                                <MaterialCommunityIcons name="chevron-down" size={20} color="#fff" style={{ marginRight: 10, alignSelf: 'center', textAlign: 'center', }} />
                            )
                            }
                        </View>
                        <Text style={styles.shareButtonText}>Share my card</Text>
                    </TouchableOpacity>
                    {
                        isVisible &&
                        <TouchableOpacity onPress={linkToWebsite}>
                            <Image source={require('../images/scanner.png')} style={styles.qr} />
                        </TouchableOpacity>
                    }
                    <View style={styles.card}>
                        <View style={styles.title}>
                            <FontAwesome name="share-square-o" color={'#606060'} size={18} style={styles.icon} />
                            <Text style={styles.text}>Share my card</Text>
                        </View>
                        <View style={styles.title}>
                            <MaterialCommunityIcons name="wallet-outline" color={'#606060'} size={18} style={styles.icon} />
                            <Text style={styles.text}>Add card to wallet</Text>
                        </View>
                        <View style={styles.title}>
                            <SimpleLineIcons name="screen-smartphone" color={'#606060'} size={18} style={styles.icon} />
                            <Text style={styles.text}>Add card to homescreen </Text>
                        </View>
                        <View style={styles.title}>
                            <Fontisto name="email" color={'#606060'} size={18} style={styles.icon} />
                            <Text style={styles.text}>Create Email signature</Text>
                        </View>
                        <View style={styles.title}>
                            <IonIcon name="image-outline" color={'#606060'} size={18} style={styles.icon} />
                            <Text style={styles.text}>Create virtual background</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.shareButtonAirdrop}>
                        <View><Entypo name="signal" size={20} color="#fff" style={{ marginRight: 5, }} /></View>
                        <Text style={styles.shareButtonText}>Share with Airdrop</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
    },
    content: {
        marginTop: width * 0.2,
        flex: 1,
        display: 'flex',
        justifyContent:'center',
    },
    card: {
        backgroundColor: '#dfdfdf',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        width: width * 0.7,
    },
    title: {
        flexDirection: 'row',
        marginBottom: width * 0.04,
    },
    icon: {
        marginRight: 8,
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 14,
        color: "#606060",
        fontWeight: '600',
    },
    shareButton: {
        flexDirection: 'row',
        backgroundColor: '#D46F2F',
        paddingLeft: width * 0.17,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: width * 0.1,
        marginTop: width * 0.08,
    },
    shareButtonAirdrop: {
        flexDirection: 'row',
        backgroundColor: '#D46F2F',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: width * 0.1,
        width: width * 0.7,

    },
    shareButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center',
    },
    qr: {
        height: width * 0.45,
        width: width * 0.45,
        marginBottom: width * 0.08,
        alignSelf: 'center',
    },
});