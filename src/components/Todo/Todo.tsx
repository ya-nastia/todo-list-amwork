import React, { useCallback, useMemo, useState } from 'react';
import './Todo.scss';
import { ReactComponent as AvatarImg } from '../../assets/img/avatar.svg';
import { faker } from '@faker-js/faker';
import { formatDate } from '../../utils/formatDate';
import { ITodo } from '../../types/todo.types';

interface ITodoProps {
    todo: ITodo,
}

const Todo: React.FC<ITodoProps> = ({ todo }) => {
    const [isChecked, setIsChecked] = useState(todo.completed);

    const taskDescription = useMemo(() => faker.lorem.lines({ min: 1, max: 3 }), []);
    const firstTag = useMemo(() => faker.lorem.word({ length: { min: 4, max: 12 }}), []);
    const secondTag = useMemo(() => faker.lorem.word({ length: { min: 4, max: 12 }}), []);

    const startDate = useMemo(() => formatDate(faker.date.past()), []);
    const endDate = useMemo(() => formatDate(faker.date.future()), []);

    const handleCheckTodo = useCallback((): void => {
        setIsChecked(current => !current);
    }, []);

    return (
        <div className='todo-container'>
            <div className='todo'>

                <div className='todo__header'>
                    <input 
                        className="todo__checkbox" 
                        type="checkbox" 
                        checked={isChecked} 
                        onChange={handleCheckTodo} 
                    />
                    <p className="todo__header-text">{todo.title}</p>
                </div>

                <div className="todo__dates">
                    <div>{startDate}</div>
                    <div className="todo__end-date todo__date">{endDate}</div>
                </div>

                <div className="todo__description">{taskDescription}</div>

                <div className="todo__footer">

                    <div className="todo__tags">
                        <div className="todo__first-tag">{firstTag}</div>
                        <div className="todo__last-tag-container">
                            <div className="todo__last-tag">{secondTag}</div>
                        </div>
                    </div>

                    <div className="todo__avatar">
                        <AvatarImg />
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Todo;