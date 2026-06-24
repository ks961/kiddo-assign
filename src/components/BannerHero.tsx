import React, { memo } from 'react';
import { BannerHeroData } from '../types';
import { useTheme } from '../context/ThemeContext';
import { handleAction } from '../actions/dispatcher';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export type BannerHeroProps = {
  data: BannerHeroData
}

export function BannerHero({ data }: BannerHeroProps) {

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image_url }} style={styles.image} />
      <View style={styles.textOverlay}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>{data.subtitle}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() => handleAction(data.action)}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonLabel}>{data.cta_label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    color: '#ddd',
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default memo(BannerHero);