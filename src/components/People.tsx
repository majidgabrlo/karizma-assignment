import axios from '../axios/fakeApi';
import { useEffect, useState } from 'react';
import ColumnItem from './ColumnItem';

type user = {
    email: string,
    username: string
}

function People() {
    const [users, setUsers] = useState<user[]>([])
    const getUsers = async () => {
        const data = await axios.get('/users')
        setUsers(data.data)
    }

    useEffect(() => {
        getUsers()
    }, [])
    console.log(users);
    
    return (
        <div>{ users.map(user=><ColumnItem title={user.username} subtitle={user.email} />) }</div>
    )
}

export default People