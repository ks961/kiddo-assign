import { Action } from '../types';

export function handleAction(action: Action): void {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('Add to cart:', action.payload);
      break;
    case 'DEEP_LINK':
      console.log('Navigate to:', action.payload.url);
      break;
    case 'APPLY_MYSTERY_GIFT_COUPON':
      console.log('Applying mystery gift coupon:', action.payload);
      break;
    default:
      console.warn('Unknown action type:', action.type);
  }
}