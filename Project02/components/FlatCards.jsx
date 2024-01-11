import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  const cardArr = [
    {
      style: styles.cardOne,
      text: 'Red',
    },
    {
      style: styles.cardTwo,
      text: 'Green',
    },
    {
      style: styles.cardThree,
      text: 'Blue',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={[styles.heading]}>FlatCards</Text>
      <View style={styles.cardContainer}>
        {cardArr.map(item => {
          return (
            <View style={[styles.card, item.style]}>
              <Text>{item.text}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
  },
  container: {
    paddingHorizontal: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
});
