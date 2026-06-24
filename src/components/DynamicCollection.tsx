import React, { memo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { DynamicCollectionData } from '../types';
import CollectionItem from './CollectionItem';

export type DynamicCollectionProps = {
  data: DynamicCollectionData
}

export function DynamicCollection({ data }: DynamicCollectionProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: data.theme_color }]}>{data.title}</Text>
      <FlatList
        data={data.items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CollectionItem item={item} />}
        getItemLayout={(_, index) => ({ length: 130, offset: 130 * index, index })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginVertical: 12 },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 12, marginBottom: 10 },
});

export default memo(DynamicCollection);