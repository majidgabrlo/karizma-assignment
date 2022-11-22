import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from '../axios/fakeApi';
import ColumnItem from './ColumnItem';

type product = {
    title: string,
    description: string
}

function Products() {
    const [users, setUsers] = useState<product[]>([])
    const [filter, setFilter] = useState("")
    const getUsers = async () => {
        const data = await axios.get('/products')
        setUsers(data.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <TextField fullWidth margin={'dense'} onChange={(e) => { setFilter(e.target.value) }} value={filter} id="outlined-basic" label="Filter" />
            <div>{users.filter(product => product.title.toLowerCase().includes(filter.toLowerCase())).map(product => <ColumnItem key={product.description} title={product.title} subtitle={product.description} />)}</div>
        </div>
    )
}

export default Products