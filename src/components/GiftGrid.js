import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getByTitle } from '@testing-library/dom'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/GetGifs';

export const GiftGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    console.log(loading)
    // console.log(data)

    //console.log(category)
    // const [count, setCount] = useState(0)

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    // getGifs(category)
    //     .then(imgs => setImages(imgs));
    // },[category])


    // getGifs(); 
    return (
        <>
            <h3 className ="animate__animated animate__fadeInLeft">${category}</h3>
            {/* {loading ? "...Cargando " : "Cargado"} */}
            {loading && <p className = "animate__animated animate__flash">"...Cargando "</p>  }
            <div className="card-grid">
                
                
                    {images.map( img => (
                        <GifGridItem 
                            key= {img.id}
                            {...img}/>))} 
                    

            </div>
        </>
    )
}
