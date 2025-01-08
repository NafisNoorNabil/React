
export default function ListItem({ fruit, handleDelete }) {

    return (
        <li key={fruit.id} className={fruit.completed ? "completed" : "incomplete"}>
            <span>{fruit.id} - {fruit.name}</span>
            <button onClick={() => handleDelete(fruit.id)} className='delete'>Delete</button>
        </li>
    );
}



