import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Searchbar = ({ placeHolder, onChange }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.input}>
                <Ionicons style={{ paddingHorizontal: 10 }} size={19} name='search-outline' color={'white'} />
                <TextInput
                    style={{color:'white'}}
                    placeholderTextColor={'white'}
                    placeholder={placeHolder} onChangeText={onChange} />
            </View>
            <Pressable style={styles.filterbtn}>
                <Ionicons style={{ paddingHorizontal: 10 }} size={19} name='ios-filter-outline' color={'white'} />
            </Pressable>
        </View>
    )
}

export default Searchbar

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        backgroundColor: '#323232',
        alignItems: 'center',
        borderRadius: 25,
        width: '80%'
    },
    filterbtn: {
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#323232'
    },
    wrapper: {
        alignItems:'center',
        margin:10,
        justifyContent:'space-around',
        flexDirection: 'row'
    }
})