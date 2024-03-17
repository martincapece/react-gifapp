import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const capitalize = str => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( capitalize(newCategory) ) ) return;

        setCategories([ capitalize(newCategory), ...categories ])
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ onAddCategory }
            />

            
            { 
                categories.map( category => (
                        <GifGrid 
                            key={ category } 
                            category={ category } />
                    ))
            }
            
        </>
    );
};