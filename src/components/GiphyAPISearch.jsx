const GiphyAPISearch = ({gif}) => {
    return(
        <div className="display-gif">
            <img src={gif.images.fixed_height.url} alt={globalThis.title} />
        </div>
    )
}

export default GiphyAPISearch