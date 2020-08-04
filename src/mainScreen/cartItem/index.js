import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from '../styles'

const CartItem = ({item}) => {
  return (
    <View style={[styles.cartContainer, {marginBottom: item.number === 45 ? 30 : null}]}>
      <View style={styles.imgContainer}>
        <Image source={{uri: item.link}} style={styles.img} resizeMode={'contain'} />
      </View>
      <View style={[styles.descriptionContainer, {backgroundColor: item.number % 2 ? '#d7dae0' : '#fff',}]}>
        <View style={styles.titleContainer}>
          <Text>{item.number} - {item.president}</Text>
        </View>
        <View style={styles.partyContainer}>
          <Text>Party: {item.party}</Text>
        </View>
        <View style={styles.year}>
          <Text>{`Birth year: ${item.birth_year}, ${item.death_year ? `Death year ${item.death_year}` : ''}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
