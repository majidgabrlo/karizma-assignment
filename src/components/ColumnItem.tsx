import { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { useAppDispatch } from '../store/hooks';
import { addNewItem } from '../store/selected/selectedAction';

type ColumnItemProps = {
    title: string,
    subtitle: string
}
const ColumnItem: FC<ColumnItemProps> = ({ title, subtitle }) => {
    const dispatch = useAppDispatch();
    return (
        <div onClick={() => {dispatch(addNewItem(title))}}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={title} secondary={subtitle} />
                </ListItem>
            </List>
        </div>
    )
}

export default ColumnItem