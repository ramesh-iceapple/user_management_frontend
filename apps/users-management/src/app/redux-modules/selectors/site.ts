import { RootState } from '../../store';

export const getSitesInfoSelector = (state: RootState) =>
  state.site.sites;