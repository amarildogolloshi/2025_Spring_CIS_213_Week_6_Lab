import { useState } from "react";

const GiphyForm = ({ setQueryApp }) => {
    const [query, setQueryForm] = useState("");

    const handleInput = (e) => {
        setQueryForm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQueryApp(query)
    }
    
    return(
        <div className="form-group">
            <form onSubmit={handleSubmit}>
                <label>Enter a word or phrase:</label>
                <input 
                    type="text" 
                    value={query}
                    onChange={ (e) => { handleInput(e) } }
                    placeholder="cat" />
                <button type="submit">Search</button>
            </form>
            
        </div>
    )
}

export default GiphyForm