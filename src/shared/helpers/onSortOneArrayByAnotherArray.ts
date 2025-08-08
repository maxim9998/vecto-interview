export function onSortOneArrayByAnotherArray<T, J>(initialArr: T[], sortByIdsArr: J[], getId: (item: T) => string | number) {
  const initialArrCopy = [...initialArr];
  if (sortByIdsArr.length === 0) {
    return initialArr;
  }

  const result: T[] = [];

  for (const id of sortByIdsArr) {
    const movieIndex = initialArrCopy.findIndex(movie => getId(movie) === id);
    if (movieIndex !== -1) {
      const [movie] = initialArrCopy.splice(movieIndex, 1);
      result.push(movie);
    }
  }

  return [...result, ...initialArrCopy];
}
