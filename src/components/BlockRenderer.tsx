import { Block } from "../types";
import { renderBlock } from "../registry";

export type BlockRendererProps = {
  block: Block
};

export function BlockRenderer({ block }: BlockRendererProps) {
  return renderBlock(block);
}