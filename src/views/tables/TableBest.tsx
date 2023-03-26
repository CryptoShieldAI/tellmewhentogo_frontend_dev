import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'


const TableBest = ({ data, onSelectColume }: { data: any, onSelectColume: Function }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell align='right'>Name</TableCell>
                        <TableCell align='right'>Spot</TableCell>
                        <TableCell align='right'>Number of Pump</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row: any, index: number) => (
                        <TableRow key={row.symbol} sx={{
                            '&:last-of-type  td, &:last-of-type  th': { border: 0 },
                            ':hover': { cursor: 'pointer' }
                        }}
                            onClick={() => onSelectColume(row.symbol)}
                        >
                            <TableCell component='th' scope='row'>
                                {index + 1}
                            </TableCell>
                            <TableCell align='right'>{row.symbol}</TableCell>
                            <TableCell align='right'>{row.spot}</TableCell>
                            <TableCell align='right'>{row.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableBest