import { WinnerStatus } from '../../../presentation/view/shared/constants/winner-status';

export const convertWinnerStatusInBoolean = (winnerStatus: WinnerStatus) => {
  if (winnerStatus === WinnerStatus.YES) {
    return 'true';
  }
  if (winnerStatus === WinnerStatus.NO) {
    return 'false';
  }

  return WinnerStatus.EMPTY;
};
