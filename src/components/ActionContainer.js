import './components.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addTodo, clearTodos, editTodo } from '../actions/actions'
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';


export const ActionContainer = (props) => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [color, setColor] = useState('#ff9146');

    let { editData, resetEditData } = props;

    useEffect(() => {
        if (editData) {
            setEditableData(editData)
        }
    }, [editData]);

    const setEditableData = (data) => {
        setTitle(data.title)
        setDesc(data.description)
        setColor(data.color)
    }

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!title) {
            alert('Empty title')
            return
        }
        let pushData = {
            title: title,
            description: desc,
            color: color
        }
        if (editData) {
            dispatch(editTodo(pushData, editData._id));
        } else {
            dispatch(addTodo(pushData));
        }
        resetForm()
    }

    const resetForm = () => {
        setTitle('');
        setDesc('');
        setColor('#ff9146');
        resetEditData('')
    }

    return (

        <div className="action_container">
            <button onClick={() => dispatch(clearTodos(todos))}
                className="delete_all_button" disabled={!!editData}>
                Delete All
            </button>
            <form onSubmit={addTodoHandler} id="add_form">
                <div className="add_form_header">{editData ? 'Edit Todo' : 'Add Todo'}</div>
                <input type="text" placeholder="Title*" value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" value={desc} form="add_form"
                    onChange={(e) => setDesc(e.target.value)} />
                <div className="add_form_color_cont">
                    Color: <ColorPicker color={color}
                        onChange={(data) => setColor(data.color)} placement="topRight" />
                </div>
                <div className="add_form_action_buttons">
                    <button type="submit">{editData ? 'Edit' : 'Add'}</button>
                    {editData && <button type="button" onClick={resetForm}>Cancel</button>}
                </div>
            </form>
        </div>
    )
}