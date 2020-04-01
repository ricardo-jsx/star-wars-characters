import { useQuery } from '@apollo/react-hooks';

import { GET_LUKE, GET_PAGE } from './Home.queries';
import { useMemo, useState, useEffect } from 'react';

export function useCharacter(id) {
  const { loading, data } = useQuery(GET_LUKE, {
    variables: { id },
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
  const [page, setPage] = useState(1);
  const { loading, data = {}, fetchMore } = useQuery(GET_PAGE, {
    variables: { page: 1 },
  });

  useEffect(() => {
    if (page > 1 && !loading) {
      fetchMore({
        variables: { page },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          return {
            ...prev,
            pageOfCharacters: {
              ...prev.pageOfCharacters,
              results: [...prev.pageOfCharacters.results, ...fetchMoreResult.pageOfCharacters.results],
            },
          };
        },
      });
    }
  }, [page, loading, fetchMore]);

  return {
    loading,
    pageOfCharacters: data.pageOfCharacters || {},
    nextPage() {
      setPage(page + 1);
    },
  };
}
