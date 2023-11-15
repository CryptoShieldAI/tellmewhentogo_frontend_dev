import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { border } from '@mui/system'


const TableOption = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size='small' aria-label='option table'>
                <TableBody>
                    <TableRow>
                        <TableCell>MARGIN</TableCell>
                        <TableCell>X3</TableCell>
                        <TableCell>Dynamique trade</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Diable</TableCell>
                        <TableCell colSpan={5}>Probability Index(PI)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>DISABLE</TableCell>
                        <TableCell>Static trade</TableCell>
                        <TableCell>10000</TableCell>
                        <TableCell>Enable</TableCell>
                        <TableCell>|1/5|</TableCell>
                        <TableCell>|2/5|</TableCell>
                        <TableCell>|3/5|</TableCell>
                        <TableCell>|4/5|</TableCell>
                        <TableCell>|5/5|</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default TableOption