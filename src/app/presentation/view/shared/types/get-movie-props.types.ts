import { WinnerStatus } from '../../shared/constants/winner-status';

export type GetMovieProps = {
  page?: number;
  size?: number;
  year: string;
  winnerStatus: WinnerStatus;
};
