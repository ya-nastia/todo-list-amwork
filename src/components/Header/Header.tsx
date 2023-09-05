import React from  'react';
import { ReactComponent as PlusIcon } from '../../assets/img/add-todo.svg';
import './Header.scss';
import { useStore } from '../../store';
import { observer } from "mobx-react-lite";

const Header: React.FC = observer(() => {
    const store = useStore();
    
    return (
        <div className='header'>
            <div className='header__today'>Today</div>
            <div className='header__right'>
                <button className='header__add-todo'>
                    <PlusIcon />
                </button>
                <div className='header__todos-amount'>{store.todos.length}</div>
            </div>
        </div>
    );
});

export default Header;