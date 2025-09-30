import React from 'react';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery({ 
        queryKey: ['superheroes'],
        queryFn: () => axios.get('http://localhost:3000/superheroes'),
  });


  if (isLoading) {
    return <h2 className='text-center mt-40 items-center text-5xl font-extrabold'> Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center mt-40 items-center text-5xl font-extrabold'>{error.message}</h2>
  }

  return (
    <>
      <h2 className='text-center items-center font-extrabold text-5xl mt-40 mb-20'>RQSuperHeroes Page</h2>
      {data?.data.map((hero) => (
        <div className='text-center items-center font-bold text-xl' key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
