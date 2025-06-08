import { useEffect, useState } from 'react';
import '../assets/css/todo.css';
import { capitalizeEachWord } from '../utils/textUtils';

export const TodoList = () => {
    const [inputItem, setInputItem] = useState('');
    const [todoItem, setTodoItem] = useState(
        localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
    );
    const [editText, setEditText] = useState('');
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoItem));
    }, [todoItem]);

    // useEffect(() => {
    //     const allItems = localStorage.getItem('todos');
    //     if (allItems) {
    //         console.table('all', allItems);
    //         try {
    //             const parsedTodos = JSON.parse(allItems);
    //             setTodoItem(Array.isArray(parsedTodos) ? parsedTodos : []);
    //         } catch (error) {
    //             console.error('Error parsing localStorage data:', error);
    //         }
    //     }
    // }, []);

    const addTodo = () => {
        if (inputItem.trim() === '') {
            alert('add a to do.. this field cannot be empty');
            return;
        }
        // const maxId = todoItem.length > 0 ? Math.max(...todoItem.map((todo) => todo.id)) : 0;
        const newItem = {
            id: Date.now(),
            text: capitalizeEachWord(inputItem.trim()),
            isCompleted: false,
            isEditing: false,
        };
        /*method 1-Pushing to a copy of the array (not recommended for large apps, but beginner-friendly

        // const updatedList = [...todoItem];
        // updatedList.push(newItem);
        // setTodoItem(updatedList);
        */

        /* method 2- using concat() method*/

        /* const updatedList = todoItem.concat(newItem);
        console.log('Updated todo list:', updatedList);
        setTodoItem(updatedList);
        */

        /* method 3- using spred operator */
        /*This spreads out the old items, and adds the new one at the end*/
        /*❌ But: If React batches multiple updates or if the state is updated multiple times quickly, this may give outdated or unexpected results.*/

        /* setTodoItem([...todoItem, newItem]);*/

        /*method 4
        This is the functional form of updating state.
        It guarantees you get the most recent value of the state (prevItems), even if there are multiple state updates happening.
        Recommended when you're updating based on the previous state.*/
        setTodoItem((prevItems) => [...prevItems, newItem]);
        setInputItem('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };
    const toggleComplete = (id) => {
        setTodoItem(
            todoItem.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted,
                    };
                } else {
                    return todo;
                }
            })
        );
    };
    const handleDelete = (id) => {
        setTodoItem(todoItem.filter((todo) => todo.id !== id));
    };
    const handleEdit = (id) => {
        const editItem = todoItem.find((todo) => todo.id === id);
        const formattedEditText = capitalizeEachWord(editItem.text.trim());
        setEditText(formattedEditText);
        setTodoItem((prevItems) =>
            prevItems.map((todo) => (todo.id === id ? { ...todo, isEditing: true } : { ...todo, isEditing: false }))
        );
    };
    const handleUpdate = (id) => {
        if (editText.trim() !== '') {
            setTodoItem((prevItems) =>
                prevItems.map((todo) =>
                    todo.id === id ? { ...todo, text: capitalizeEachWord(editText.trim()), isEditing: false } : todo
                )
            );
            setEditText('');
        } else {
            alert('Please enter some text to update.');
            return;
        }
    };
    const handleCancel = (id) => {
        setTodoItem((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isEditing: false } : todo)));
    };

    return (
        <>
            <div className='wrapper'>
                <div className='header'>
                    <h1>get things done!</h1>
                    <div className='input-section'>
                        <input
                            type='text'
                            placeholder='Enter Todo'
                            className='field__input'
                            value={inputItem}
                            onChange={(e) => setInputItem(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button type='button' onClick={addTodo}>
                            Add
                        </button>
                    </div>
                </div>
                <div className='main'>
                    <div className='todo-continer'>
                        {todoItem.length === 0 ? (
                            <div className='no-todos'>
                                <img src='/Images/no-todos.png' alt='No tasks' />
                                <p>Empty...</p>
                            </div>
                        ) : (
                            <div className='todo-items'>
                                <ul>
                                    {todoItem.map((todo) => (
                                        <li key={todo.id}>
                                            {todo.isEditing ? (
                                                <>
                                                    <input
                                                        type='text'
                                                        className='update-todo-input'
                                                        value={editText}
                                                        onChange={(e) => setEditText(e.target.value)}
                                                        autoFocus
                                                    />
                                                    <div className='update-actions'>
                                                        <button
                                                            type='button'
                                                            onClick={() => handleUpdate(todo?.id)}
                                                            disabled={editText.trim() === ''}
                                                        >
                                                            <i className='fa-solid fa-check'></i>
                                                        </button>
                                                        <button type='button' onClick={() => handleCancel(todo?.id)}>
                                                            <i className='fa-solid fa-xmark'></i>
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <label className='custom-checkbox'>
                                                        <input
                                                            type='checkbox'
                                                            checked={todo.isCompleted}
                                                            onChange={() => toggleComplete(todo.id)}
                                                        />
                                                        <span className='checkmark'></span>

                                                        <span
                                                            className={
                                                                todo.isCompleted ? 'strike-through' : 'todo-text'
                                                            }
                                                        >
                                                            {todo.text}
                                                        </span>
                                                    </label>
                                                    <div className='actions'>
                                                        <button type='button' onClick={() => handleEdit(todo.id)}>
                                                            <i className='fa-regular fa-pen-to-square'></i>
                                                        </button>
                                                        <button type='button' onClick={() => handleDelete(todo.id)}>
                                                            <i className='fa-regular fa-trash-can'></i>
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
