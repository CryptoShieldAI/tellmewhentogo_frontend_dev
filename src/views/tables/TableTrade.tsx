import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (date: string, name: string, executed: string, price: number) => {
    return { date, name, executed, price }
}
const rows: any[] = [
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1),
    // createData('02/05/2022', 'DAR', 'BUY', 208.1)
]

const TableTrade = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align='right'>Name</TableCell>
                        <TableCell align='right'>Executed</TableCell>
                        <TableCell align='right'>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.date} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                            <TableCell component='th' scope='row'>
                                {row.date}
                            </TableCell>
                            <TableCell align='right'>{row.name}</TableCell>
                            <TableCell align='right'>{row.executed}</TableCell>
                            <TableCell align='right'>{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableTrade