import { memo } from "react";
import { TouchableOpacity, Image, Text, StyleSheet, Dimensions } from "react-native";
import { ProductItem } from "../types";
import { handleAction } from "../actions/dispatcher";

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 36) / 2;

export type GridItempProps = {
  item: ProductItem; 
  primaryColor: string
}

function GridItem({ item, primaryColor }: GridItempProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => handleAction(item.action)}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
      <Text style={[styles.price, { color: primaryColor }]}>₹{item.price}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE, backgroundColor: '#fff',
    borderRadius: 10, padding: 8,
    shadowColor: '#000', shadowOpacity: 0.08,
    shadowRadius: 4, elevation: 2,
  },
  image: {
    width: '100%', 
    height: 130, 
    borderRadius: 8
  },
  name: {
    fontSize: 13, 
    marginTop: 6
  },
  price: {
    fontSize: 14, 
    fontWeight: 'bold', 
    marginTop: 4
  }
})

export default memo(GridItem);