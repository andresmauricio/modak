import { createAction } from '@ngrx/store';

const showLoading = createAction('[UI] Show Loading');
const hiddenLoading = createAction('[UI] Hidden Loading');

export { showLoading, hiddenLoading };
