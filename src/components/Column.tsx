import Box, { BoxProps } from '@mui/material/Box'
function Column({ sx, children }: BoxProps) {
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: "white",
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                overflowY: "scroll",
                ...sx,
            }}
            children={children}
        />
    );
}

export default Column