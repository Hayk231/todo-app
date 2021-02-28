import './App.scss';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from './actions/actions'
import { SingleTodo } from './components/SingleTodo';
import { Loader } from './components/Loader';
import { ActionContainer } from './components/ActionContainer';

export const App = () => {

    const dispatch = useDispatch();
    const { todos, showLoader } = useSelector(state => state);
    const [editData, setEditData] = useState('')

    useEffect(() => {
        dispatch(getTodos());
    }, []);

    const setEditDataHandler = (data) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setEditData(data);
    }

    return (
        <div className='todo_container'>
            {
                showLoader
                    ?
                    <Loader />
                    :
                    <>
                        <ActionContainer editData={editData} resetEditData={setEditData} />
                        <div className="todo_list" >
                            {[...todos].reverse().map(el => <SingleTodo todo={el} key={el._id}
                                setEditData={setEditDataHandler} />)}
                        </div>
                    </>
            }

        </div>
    );
}