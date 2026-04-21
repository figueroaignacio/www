import { MATE_UI_API } from '@/lib/constants';

export async function getNachUiComponents() {
  const res = await fetch(`${MATE_UI_API}/api/v1/registry`, {
    cache: 'no-store',
  });
  const data = await res.json();

  return data;
}
