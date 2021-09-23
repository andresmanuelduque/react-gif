import React from 'react'
import {GifGridItem} from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";


export const GifGrid = ({category})=>{

    const {data:images,loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className={"animate__animated animate__wobble"}>Loading</p>}

            <ol className="categoriesGrid">
                {images.map((img)=>
                    <GifGridItem className={"card"} key={img.id} {...img}
                    />
                )}
            </ol>
        </>
    )
}