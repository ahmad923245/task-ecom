import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const demoimg = 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'

export default function ReviewsCard(props) {
  const { myitem } = props;
  
  return (
    <View key={myitem.id} style={styles.container}>
      <View style={{ padding: 14 }}>
        <View style={styles.cardHeaderView}>
          <Image
            style={styles.tinyLogo}
            source={{uri:demoimg}}
          />
          <View style={{ padding: 5 }}>
            <Text style={{ color: 'white' }}>{myitem.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'white' }}>Dec 11, 2021</Text>
            </View>
          </View>
        </View>
        <View style={{ marginStart: 8 }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 16,
            }}>
            {[1, 2, 3, 4].map((item) => (
              <FontAwesome name="star-o" size={18} style={styles.startIcon} />
            ))}
          </View>
          <Text style={{ color: 'white' }}>
            {myitem.des}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Image
              style={styles.tinyLogo2}
              source={{uri:demoimg}}
            />
            <Text
              style={{
                color: 'gray',
                padding: 5,
                textDecorationLine: 'underline',
              }}>
              Set of 6 Felt Macarons Dessert Catnip Cat Toy
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
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
  cardHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    width: '90%',
    alignSelf: 'center',
  },
});
