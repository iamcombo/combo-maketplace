import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card';
import Screen from '../components/Screen'
import colors from '../config/colors';

const listing = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch for sale',
    price: 1000,
    image: require('../assets/couch.jpg')
  }, 
];

function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList 
        data={listing}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => 
          <Card 
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingScreen
