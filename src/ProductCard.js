import './App.css';

function ProductCard(props) {
    //console.log(data.data)
    return (
        <div className='relative pb-5 lg:pb-8'>
            <img className='rounded-xl w-full' alt={props.data.name} src={props.data.image}></img>
            <div className=''>
                <div className="flex justify-between items-center mt-3 ">
                    <div className="text-light-secondary">{props.data.name}</div>
                    <div className="py-1 px-3 rounded-md bg-light-secondary text-xs font-bold">{props.data.price}</div>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center">
                        <img alt='rating' src={`${props.data.rating ? 'Star_fill.svg' : 'Star.svg'}`}></img>
                        <div className='ml-1 text-light-primary text-sm'>{props.data.rating ?? ''}</div>
                        <div className='ml-1 text-dark-tertiary text-sm'>{props.data.rating ? `(${props.data.rating} votes)` : `No rating`}</div>
                    </div>
                    {props.data.available ||
                        <div className="text-sm text-rose self-end">Sold out</div>
                    }
                </div>
            </div>
            {props.data.popular &&
                <div className='absolute top-2 left-2 bg-light-tertiary px-4 py-1 rounded-full text-[0.625rem] font-bold'>Popular</div>
            }
        </div>
    )
}

export default ProductCard;