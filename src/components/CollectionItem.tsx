import { memo } from "react";
import { ProductItem } from "../types";
import { handleAction } from '../actions/dispatcher';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export type CollectionItemProps = {
  item: ProductItem
}

function CollectionItem({ item }: CollectionItemProps ) {
  return (
    <>
      <TouchableOpacity style={styles.item} onPress={() => handleAction(item.action)}>
        <Image source={{ uri: item.image_url }} style={styles.image} />
        <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </TouchableOpacity>
    </>
  )
};

const styles = StyleSheet.create({
  item: {
    width: 120, 
    marginLeft: 12, 
    alignItems: 'center'
  },
  image: {
    width: 110, 
    height: 110, 
    borderRadius: 10
  },
  name: {
    fontSize: 12, 
    marginTop: 6, 
    textAlign: 'center'
  },
  price: {
    fontSize: 13, 
    fontWeight: 'bold', 
    marginTop: 2, 
    color: '#333'
  },
})

export default memo(CollectionItem);