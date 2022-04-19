export const handleError = (
  state: { isLoading: boolean; hasError: boolean },
  { error }: { error: any }
) => {
  state.isLoading = false;
  state.hasError = true;

  console.error(error);
};

export const handlePending = (state: { isLoading: boolean }) => {
  state.isLoading = true;
};
