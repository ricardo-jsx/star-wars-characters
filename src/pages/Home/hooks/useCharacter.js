import { useQuery } from '@apollo/react-hooks';

import { GET_LUKE } from '../Home.queries';
import { useMemo } from 'react';

export default function useCharacter() {
  const { loading, error, data } = useQuery(GET_LUKE);

  const imgs = useMemo(() => {
    if (loading) return [];

    console.log("I'M HERE", data.character);

    return [
      { id: data.character.id, name: data.character.name, img: data.character.img },
      ...data.character.starships.map(({ id, img, name }) => ({ id, name, img })),
    ];
  }, [data, loading]);

  const character = loading ? {} : data.character;

  return { loading, character: { ...character, imgs } };
}
