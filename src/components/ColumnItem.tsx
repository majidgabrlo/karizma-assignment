import { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

type ColumnItemProps = {
    title: string,
    subtitle: string
}
const ColumnItem: FC<ColumnItemProps> = ({title,subtitle}) => {
    return (
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
    )
}

export default ColumnItem