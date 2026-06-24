import React, { useEffect, useState } from 'react';

import { keyExtractor } from '../utils';
import { FlashList } from '@shopify/flash-list';
import homepageData from '../data/homepage.json';
import { Block, HomepagePayload } from '../types';
import { useTheme } from '../context/ThemeContext';
import { BlockRenderer } from '../components/BlockRenderer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});


export function Homepage() {
  const theme = useTheme();

  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const load = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setBlocks((homepageData as unknown as HomepagePayload).blocks);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return (
      <View style={[styles.loader, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <FlashList
        data={blocks}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <BlockRenderer block={item} />}
      />
    </SafeAreaView>
  );
};