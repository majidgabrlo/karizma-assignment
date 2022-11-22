import Box from '@mui/material/Box'
import Column from './components/Column'
import styles from './app.module.css';
import People from './components/People';
import Products from './components/Products';
import SelectedItem from './components/SelectedItem';


function App() {
    return (
        <div className={styles.app}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',height:"100%" }}>
                <Column><People /></Column>
                <Column><Products /></Column>
                <Column><SelectedItem /></Column>
            </Box>
        </div>
    )
}

export default App