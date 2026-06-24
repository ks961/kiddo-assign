export interface Theme {
  primary: string;
  background: string;
  text: string;
  card: string;
  accent: string;
}

export interface Action {
  type: string;
  payload: Record<string, unknown>;
}

export interface BannerHeroData {
  image_url: string;
  title: string;
  subtitle: string;
  cta_label: string;
  action: Action;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  action: Action;
}

export interface DynamicCollectionData {
  title: string;
  theme_color: string;
  items: ProductItem[];
}

export interface ProductGridData {
  title: string;
  items: ProductItem[];
}

export interface Block {
  id: string;
  type: string;
  data: BannerHeroData | DynamicCollectionData | ProductGridData | Record<string, unknown>;
}

export interface Campaign {
  id: string;
  name: string;
  overlay: {
    type: string;
    animation_url: string;
  };
}

export interface HomepagePayload {
  theme: Theme;
  blocks: Block[];
  campaign: Campaign;
}