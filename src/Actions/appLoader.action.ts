import { ACTION_TYPES } from '.';

const updateLoader = (isLoading: boolean) => ({
  type: ACTION_TYPES.TOGGLE_APP_LOADING,
  payload: isLoading,
});
export const toggleAppScreenLoader = (isLoading: boolean) => {
  return (dispatch: any) => {
    if (!isLoading) {
      setTimeout(() => {
        dispatch(updateLoader(isLoading));
      }, 100);
    } else {
      dispatch(updateLoader(isLoading));
    }
  };
};
