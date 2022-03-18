import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Items = () => {

    const List = [
        {
            id: 0,
            productName: 'Christmas tree pet hat cost',
            price: 10,
            productImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80'

        },
        {
            id: 1,
            productName: 'Christmas tree pet hat cost',
            price: 10,
            productImage: 'https://images.unsplash.com/photo-1609576931337-4a104686847b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'

        },
        {
            id: 2,
            productName: 'Christmas tree pet hat cost',
            price: 10,
            productImage: 'https://images.unsplash.com/photo-1609576931337-4a104686847b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'

        },
        {
            id: 3,
            productName: 'Christmas tree pet hat cost',
            price: 10,
            productImage: 'https://images.unsplash.com/photo-1609576931337-4a104686847b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'

        },
        {
            id: 4,
            productName: 'Christmas tree pet hat cost',
            price: 10,
            productImage: 'https://images.unsplash.com/photo-1609576931337-4a104686847b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'

        },
        {
            id: 5,
            productName: 'Christmas tree pet hat cost',
            price: 10,
            productImage: 'https://images.unsplash.com/photo-1609576931337-4a104686847b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'

        },


    ]




    const renderItem = ({ item }) => {
        return (
            <Pressable
                key={item.id}
                onPress={() => alert('item clicked')}
                style={styles.card}>

                <Image style={styles.cardimg} source={{ uri: item.productImage }} />
                <TouchableOpacity
                    onPress={() => alert('added to fav')}
                    style={styles.heartbtn}>
                    <Ionicons size={19} name='heart-outline' color={'black'} />
                </TouchableOpacity>
                <Text style={{ color: 'white' }} numberOfLines={1}>{item.productName}</Text>
                <Text style={styles.pricetext}>{`$${item.price}`}</Text>

            </Pressable>
        )
    }



    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                placeHolder={`Search all ${List.length}  items`}
            />

            <View style={{ alignItems: 'center', flex: 1 }}>

                <FlatList

                    data={List}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>


        </SafeAreaView>
    )
}

export default Items

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    pricetext: {
        color: 'white',
        fontWeight: 'bold'
    },
    card: {

        margin: 2,

    },
    cardimg: {
        height: 180,
        width: 180
    },
    heartbtn: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 10,
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        backgroundColor: '#fff',
        borderRadius: 30 / 2
    }
})