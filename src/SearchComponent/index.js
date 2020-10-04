import React, { useEffect, useState } from 'react'
// style
import './index.scss'
// function
import findUser from './findUser'

function SearchComponent() {
    const [value, setValue] = useState('')
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(findUser(value))
    }, [value])

    return (
        <div className="container">
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button placeholder="nome do usuário" onClick={() => findUser(value)}>buscar</button>
            <div className="user-info">
                <img src={user?.avatar_url} alt={user?.login} className="user-image"></img>
                <span>{user?.login}</span>
                <span>{user?.following} seguindo</span>
                <span>{user?.followers} seguidor(es)</span>
                <a href={user?.html_url} target="_blank" rel="noopener noreferrer">visitar perfil</a>
            </div>
        </div>
    )
}

export default SearchComponent