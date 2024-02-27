import './App.css'
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [data]);

  return (
    <div className='bg-dark-primary font-dmsans'>
      <img src='bg-cafe.jpg' alt='Cafe'></img>
      <div className='shadow-md bg-dark-secondary mx-3 lg:mx-36 text-center -translate-y-8 sm:-translate-y-16 md:-translate-y-24 lg:-translate-y-24 xl:-translate-y-36 rounded-xl'>
        <div className="flex justify-center pt-6">
          <div className='py-0 px-5 w-[520px] overflow-hidden' style={{ background: 'url(vector.svg) top right no-repeat' }}>
            <h1 className='text-[2rem] text-light-primary mt-12 pb-2'>
              Our Collection
            </h1>
            <p className='text-dark-tertiary'>
              Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
          </div>
        </div>
        <div className="flex justify-center align-center p-5 text-light-primary gap-5 pb-10">
          <input type="button" value="All Products" className={`active:bg-rose hover:bg-neutral-700 cursor-pointer py-2 px-3 rounded-lg ${!filter && 'bg-dark-tertiary'}`} onClick={(e) => setFilter(false)} />
          <input type="button" value="Available Now" className={`active:bg-rose hover:bg-neutral-700 cursor-pointer py-2 px-3 rounded-lg ${filter && 'bg-dark-tertiary'}`} onClick={(e) => setFilter(true)} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-20 md:px-14 lg:px-10 xl:px-20 pb-2'>

          {data.map(d => {
            if (!filter) return <ProductCard key={d.id} data={d} />;
            else {
              return d.available && <ProductCard key={d.id} data={d} />;
            }
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
