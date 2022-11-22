import { TextField } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Chip from '@mui/material/Chip';
import { removeItem } from "../store/selected/selectedAction";

function SelectedItem() {
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState("")
    const selectedItems = useAppSelector(
        (state) => state.selectedItems
    );

    return (
        <div>
            <TextField fullWidth margin={'dense'} onChange={(e) => { setFilter(e.target.value) }} value={filter} id="outlined-basic" label="Filter" />
            {selectedItems.filter(item => item.title.toLowerCase().includes(filter.toLowerCase())).map(item => <Chip key={item.id} style={{ margin: ".3rem" }} clickable onClick={() => { dispatch(removeItem(item.id)) }} label={item.title} color="primary" />)}
        </div>
    )
}

export default SelectedItem