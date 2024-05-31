import { WinnerStatus } from '../interfaces/winner-status';

export type GetMovieProps = {
  page?: number;
  size?: number;
  year: string;
  winnerStatus: WinnerStatus;
};
