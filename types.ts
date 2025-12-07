export interface PizzaItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'classic' | 'pocket' | 'dessert';
  badge?: string;
}

export interface CartItem extends PizzaItem {
  quantity: number;
}

export interface AiPizzaConcept {
  name: string;
  description: string;
  funFact: string;
}
