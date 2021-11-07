import { FaTimes } from 'react-icons/fa'

const Item = ({ item, onDelete }) => {
  return (
    <div>
      <h3>
        {item.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(item.id)}
        />
      </h3>
    </div>
  )
}

export default Item