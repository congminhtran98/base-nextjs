export async function fetchData(endpoint: string) {
  return fetch(endpoint).then((res) => res.json());
}
