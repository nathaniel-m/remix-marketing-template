import * as change from '../resources/changelog.json'


export const getChangeLogs = async () => {
  const changeLogs = change.default.changelog
  return changeLogs;
};