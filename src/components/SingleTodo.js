import '../App.scss';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../actions/actions';

export const SingleTodo = (props) => {


    const dispatch = useDispatch();

    let { todo } = props

    return (

        <div className='todo_single_cont'>
            <div style={{ backgroundColor: todo.color }} key={todo._id} className='todo_single'>
                <div>{todo.title}</div>
                <div>{todo.description}</div>
            </div>
            <div className="todo_single_buttons">
                <button onClick={() => props.setEditData(todo)}>Edit</button>
                <button onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
            </div>
        </div>

    )
}

