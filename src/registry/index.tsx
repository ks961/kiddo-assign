import React from 'react';
import { Block } from '../types';
import BannerHero from '../components/BannerHero';
import DynamicCollection from '../components/DynamicCollection';
import ProductGrid from '../components/ProductGrid';

type RendererFn = (block: Block) => React.ReactElement | null;

const registry: Record<string, RendererFn> = {
  BANNER_HERO: (block) => (
    <BannerHero data={block.data as any} />
  ),
  DYNAMIC_COLLECTION: (block) => (
    <DynamicCollection data={block.data as any} />
  ),
  PRODUCT_GRID_2X2: (block) => (
    <ProductGrid data={block.data as any} />
  ),
};

export function renderBlock(block: Block): React.ReactElement | null {
  const renderer = registry[block.type];

  if (!renderer) {
    console.warn(`Unknown block type: "${block.type}".`);
    return null;
  }

  return renderer(block);
}