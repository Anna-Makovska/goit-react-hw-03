import s from "../SearchBox/SearchBox.module.css"


const SearchBox = ({ value, onChange }) => {
    

    const handleInputValue = (evt) => {
      evt.preventDefault();
      onChange(evt.target.value);
    };


    return (
    <div className={s.SearchBox}>
        <label className={s.label} >
            Find contacts by name
                <input onChange={handleInputValue} value={value} className={s.input}></input>
      </label>
    </div>
    )
}
export default SearchBox;