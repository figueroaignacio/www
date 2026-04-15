import { NACH_UI_API } from '@/lib/constants';

export async function getNachUiComponents() {
  const res = await fetch(`${NACH_UI_API}/api/v1/registry`, {
    cache: 'no-store',
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_NACHUI_API_KEY as string,
    },
  });
  const data = await res.json();

  return data;
}
