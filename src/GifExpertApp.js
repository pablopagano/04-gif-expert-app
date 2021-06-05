import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid'


export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);
    // console.log(categories)
    // const handleAdd= () => {
    //     //setCategories([...categories, 'Otro Punch'])
    //     setCategories(cats => [...categories, 'Otro Punch'])
        
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            {/* <GiftGrid key= 'ono punch' category= 'ono punch'/> */}
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick= {handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( category => 
                        // return <li key={category}>{category}</li>
                        (
                        <GiftGrid                             category = {category}

                        />)

                    )
                }
            </ol>
        </>
    )
}



