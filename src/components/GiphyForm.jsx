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
        <div className="">
            <form onSubmit={handleSubmit} className="form-group">
                <div className="input-group">
                    <label>Enter a word or phrase:</label>
                    <input 
                        type="text" 
                        value={query}
                        onChange={ (e) => { handleInput(e) } }
                        placeholder="cat" />
                </div>
                <div className="input-group">
                    <button type="submit">Search</button>
                </div>
                
            </form>
            
        </div>
    )
}

export default GiphyForm