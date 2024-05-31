export type MaxMinWinIntervalForProducersItem = {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
};

export class MaxMinWinIntervalForProducersEntity {
  max: MaxMinWinIntervalForProducersItem[] | undefined;
  min: MaxMinWinIntervalForProducersItem[] | undefined;
}
