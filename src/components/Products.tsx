import { useEffect, useState } from 'react';
import axios from '../axios/fakeApi';
import ColumnItem from './ColumnItem';

type product = {
    title: string,
    description: string
}

function Products() {
    const [users, setUsers] = useState<product[]>([])
    const getUsers = async () => {
        const data = await axios.get('/products')
        setUsers(data.data)
    }

    useEffect(() => {
        getUsers()
    }, [])
    
    return (
        <div>{ users.map(user=><ColumnItem title={user.title} subtitle={user.description} />) }</div>
    )
}

export default Products