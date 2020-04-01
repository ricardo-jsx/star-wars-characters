import { useQuery } from '@apollo/react-hooks';

import { GET_LUKE, GET_PAGE } from './Home.queries';
import { useMemo } from 'react';

export function useCharacter() {
  const { loading, data } = useQuery(GET_LUKE, {
    variables: { id: 1 },
  });

  const imgs = useMemo(() => {
    if (loading) return [];

    return [
      { id: data.character.id, name: data.character.name, img: data.character.img },
      ...data.character.starships.map(({ id, img, name }) => ({ id, name, img })),
    ];
  }, [data, loading]);

  const character = loading ? {} : data.character;

  return { loading, character: { ...character, imgs } };
}

export function usePage() {
  const { loading, data } = useQuery(GET_PAGE, {
    variables: { page: 1 },
  });

  const pageOfCharacters = loading ? {} : data.pageOfCharacters;

  return { loading, pageOfCharacters };
}
