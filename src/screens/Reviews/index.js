import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,FlatList } from 'react-native';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const demoimg = 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'

export default function Reviews() {

  const array=[
    {
    id:1,
    name:'niriall',
    des:'Beautiful quality. Was a hit when I put it in a long little box like real ones as a gift!.',
  },
    {
    id:2,
    name:'Qasim',
    des:'Beautiful quality. Was a hit when I put it in a long little box like real ones as a gift!.',
  },
    {
    id:3,
    name:'Gujjar',
    des:'Beautiful quality. Was a hit when I put it in a long little box like real ones as a gift!.',
  },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image
          style={styles.tinyLogo}
          source={{uri:demoimg}}
        />
        <View style={{ padding: 5 }}>
          <Text style={{ color: 'white' }}>PetsPettos</Text>
          <View style={{ flexDirection: 'row' }}>
            {[1, 2, 3, 4].map((item) => (
              <FontAwesome name="star-o" size={18} style={styles.startIcon} />
            ))}
            <Text style={styles.reviewText}>25 reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
     <FlatList
        data={array}
        keyExtractor={item => item.id}
        renderItem={({item})=>( <ReviewCard  myitem={item} />)}


      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  tinyLogo2: {
    width: 30,
    height: 30,
  },
  startIcon: {
    color: 'white',
    padding: 1,
  },
  headerView: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewText: {
    color: 'white',
    paddingHorizontal: 14,
  },
  line: {
    borderBottomWidth: 0.3,
    borderColor: 'gray',
    width: '90%',
    alignSelf: 'center',
  },
});
