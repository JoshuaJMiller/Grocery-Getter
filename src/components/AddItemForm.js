import { useState } from "react"

const AddItemsForm = ({onAdd}) => {

const [text, setText] = useState('')

const onSubmit = (e) =>
{
    e.preventDefault()

    if(!text)
    {
        alert('Please add an item')
        return
    }

    onAdd({text})

    setText('')
}

    return (
        <form className="add-form" onSubmit={onSubmit}>
            
            <input className="form-control" type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Item' />
    
            <input className='btn' type='submit' value='Enter Item' />

        </form>
    )
}

export default AddItemsForm