import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        //console.log(target.value)
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <div class="container">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Search gifs..."
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </div>

    )
}
