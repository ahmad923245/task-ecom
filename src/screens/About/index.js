import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>About</Text>
        <View style={styles.manueView}>
          <Text style={styles.manueText}>Related links</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              style={{ color: 'white' }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.headerView}>
        <Text style={styles.headerShopText}>Shop policies</Text>
        <View style={styles.manueView}>
          <Text style={styles.manueText}>Shipping</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              style={{ color: 'white' }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.manueView}>
          <Text style={styles.manueText}>Returns and exchanges</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              style={{ color: 'white' }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.manueView}>
          <Text style={styles.manueText}>Payment methods</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              style={{ color: 'white' }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.datText}>Last updated on Jan 29, 2021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerView: {
    margin: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    borderBottomWidth: 0.2,
    borderColor: 'white',
    padding: 5,
  },
  headerShopText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',

    padding: 5,
  },
  manueView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: 'white',
  },
  manueText: {
    fontSize: 16,
    padding: 5,
    color: 'white',
    paddingVertical: 16,
  },
  datText: {
    color: 'gray',
    padding: 5,
    paddingVertical: 16,
  },
});
