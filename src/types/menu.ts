export interface MenuItem {
  id: string;
  name: string;
  price: number;
  calories: number;
  protein: number;
  category: 'high-protein' | 'anti-aging' | 'bowls';
  description?: string;
  isVegetarian?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
} 