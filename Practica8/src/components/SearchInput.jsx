function SearchInput({ value, onChange, placeholder }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default SearchInput;