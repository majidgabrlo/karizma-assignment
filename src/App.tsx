import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Column from './components/Column'
import styles from './app.module.css';
import People from './components/People';
import Products from './components/Products';
import SelectedItem from './components/SelectedItem';
import { useAppDispatch } from './store/hooks';
import { clear } from './store/selected/selectedSlice';


function App() {
    const dispatch = useAppDispatch();
    return (
        <div className={styles.app}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: "100%" }}>
                <Column><People /></Column>
                <Column><Products /></Column>
                <Column><SelectedItem /></Column>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Button onClick={() => { dispatch(clear()) }} className={styles.clearbutton} variant="contained">Clear list</Button>
                <Button onClick={() => { dispatch(clear()) }} className={styles.clearbutton} variant="contained">Clear list</Button>
            </Box>
        </div>
    )
}

export default App