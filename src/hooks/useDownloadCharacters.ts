import { useAppSelector } from '@/store/hooks';

export const useDownloadCharacters = () => {
  const selectedCharacters = useAppSelector(
    (state) => state.selection.selectedCharacters,
  );

  const getFile = (data: string) => {
    const blob = new Blob([data], { type: 'text/csv' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url;
    a.download = `${selectedCharacters.length}_characters.csv`;

    a.click();
  };

  const createCsvString = (data: typeof selectedCharacters) => {
    const headers = Object.keys(data[0]);

    const values = data.map((obj) =>
      Object.values(obj)
        .map((value) => String(value).replace(/,/g, ';'))
        .join(','),
    );

    return [headers.join(','), ...values].join('\n');
  };

  const downloadCsv = () => {
    if (selectedCharacters.length === 0) {
      return;
    }

    const csvString = createCsvString(selectedCharacters);
    getFile(csvString);
  };

  return downloadCsv;
};
