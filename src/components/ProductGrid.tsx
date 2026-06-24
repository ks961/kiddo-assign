import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProductGridData } from '../types';
import { useTheme } from '../context/ThemeContext';
import GridItem from './GridItem';

export type ProductGridProps = {
  data: ProductGridData
}

function ProductGrid({ data }: ProductGridProps) {

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.grid}>
        {
          data.items.map((item) => (
            <GridItem 
              key={item.id} 
              item={item} 
              primaryColor={theme.primary} 
            />
          ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12, 
    paddingHorizontal: 12
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10
  },
  grid: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 12
  }
});

export default memo(ProductGrid);