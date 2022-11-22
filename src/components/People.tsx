import axios from '../axios/fakeApi';
import { useEffect, useState } from 'react';
import ColumnItem from './ColumnItem';
import { TextField } from '@mui/material';

type user = {
    email: string,
    username: string
}

function People() {
    const [filter, setFilter] = useState("")
    const [users, setUsers] = useState<user[]>([])
    const getUsers = async () => {
        const data = await axios.get('/users')
        setUsers(data.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <TextField fullWidth margin={'dense'} onChange={(e) => { setFilter(e.target.value) }} value={filter} id="outlined-basic" label="Filter" />
            <div>{users.filter(user => user.username.toLowerCase().includes(filter.toLowerCase())).map(user => <ColumnItem key={user.username} title={user.username} subtitle={user.email} />)}</div>
        </div>
    )
}

export default People