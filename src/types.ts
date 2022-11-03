export type Newsstory = {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  text?: string;
  title: string;
  type: string;
  url?: string;
  deleted?: boolean;
  dead?: boolean;
};