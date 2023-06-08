import { atom } from 'recoil';
import { levelType } from '../core/levelType';

export const cardsLevel = atom({
  key: 'cardsLevel',
  default: levelType.EASY,
});

export const cardsReset = atom({
  key: 'cardsReset',
  default: false,
});
