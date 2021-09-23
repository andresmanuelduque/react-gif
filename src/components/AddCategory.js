import React,{useState} from 'react';
import PropsTypes from 'prop-types';

export const AddCategory = ({setCategories})=>{

    const [searchInputValue,setSearchInputValue] = useState('');

    const handleSearchInputChange = (e) =>{
        setSearchInputValue(e.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(searchInputValue.trim().length>2){
            setCategories((categories)=>[searchInputValue,...categories]);
        }

    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchInputValue}
                onChange={handleSearchInputChange}
            />
        </form>
    )

};


AddCategory.propTypes= {
    setCategories:PropsTypes.func.isRequired
};