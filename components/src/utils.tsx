import { PATH } from './constants/constants';

export async function getData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}

export default function searchData() {
  return getData(`${PATH._URL}`);
}
