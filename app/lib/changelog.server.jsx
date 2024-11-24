import fs from 'fs/promises';

export const getChangeLogs = async () => {
  const rawFileContent = await fs.readFile('app/resources/changelog.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const changeLogs = data.changelog ?? [];
  return changeLogs;
};