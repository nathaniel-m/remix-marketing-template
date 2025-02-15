import * as change from '../data/changelog.json'


export const getChangeLogs = async () => {
  const changeLogs = change.default.changelog
  return changeLogs;
};