export interface cardType {
  name: string;
  img: string;
}

export interface idxType {
  idx: number;
}

export interface selectCardType extends idxType {
  selected: boolean;
}
