import React, { useState } from "react";

export const TodoList = () => {
    const [task, setTask] = useState('');
    const [list, setList] = useState(['hacer compra', 'estudiar']);

    const handleSubmit = () => {
        event.preventDefault();
       if (task.trim() !== '') {
        setList([...list, task]);
        setTask('');
       }
       setTask('');
    }

    const deleteTask = (item) => {
        setList(list.filter((element) => element !== item))
    }

    return (
        <div className="container col-10 col-sm-8 col-md-6 bg-light rounded">
            <h3 className="text-dark">Mi listado de tareas</h3>
            <div className="mt-3">

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-secondary"><strong>Añadir tarea:</strong></label>
                        <input value={task} onChange={(event) => setTask(event.target.value)} 
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="addTask" />
                    </div>
                </form>
                <h3 className="text-warning rounded bg-light">Tareas</h3>
                           <ul className="list-group mt-3">
                            {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
                                {item}
                                <span onClick={() => deleteTask(item)}>
                                    <i className="fas fa-trash text-secondary"></i>
                                </span>
                                </li>)}
                            <li className="list-group-item bg-light text-end text-secondary"><small>{list.length} items left</small></li>
                            </ul> 
            </div>
        </div>
    );
}