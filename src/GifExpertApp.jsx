
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Sons of anarchy']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />            

            {
                categories.map((item) =>(
                    <GifGrid key={item} category={item} />
                )
            )
            }

        </>
    )
}
