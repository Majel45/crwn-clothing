import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySeletions = createSelector(
  [selectDirectory],
  directory => directory.sections
);