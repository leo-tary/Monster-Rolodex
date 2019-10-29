import React from 'react';

import './SearchBox.styles.css';

    const SearchBox = (props) => {

        return(
            <div className="search">
                <label>Monster Search</label>
                    <input 
                        type='text' 
                        placeholder = {props.placeholder} 
                        onChange={props.onChange}>
                    </input>
            </div>
        )

    }

export default SearchBox;