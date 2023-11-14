import { ToggleButtonGroup } from '@mui/material'
import {
    Button, Card, CardHeader,
    Switch, TableBody, TableCell, TextField, ToggleButton
} from '@mui/material'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import Paper from '@mui/material/Paper'
import Slider from '@mui/material/Slider'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { getCurrentSignals } from 'src/service'
import TableTrade from 'src/views/tables/TableTrade'



const CurrentDump = () => {
    const [time, setTime] = useState(new Date())

    const [currentSignals, setCurrentSignals] = useState<any>([])

    // const [onGoingTrade, setOnGoingTrade] = useState<any>([])
    // const [tradeFilled, setTradeFilled] = useState<any>([])

    const [isMargin, setIsMargin] = useState<boolean>(true)
    const [leverage, setLeverage] = useState<string | number | Array<number | string>>(3)
    const [isDynamic, setIsDynamic] = useState<boolean>(true)
    const [staticTradeAmount, setStaticTradeAmount] = useState<number>(10000)
    const [ftb, setFTB] = useState<number>(10)

    const handleChangeMarginEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsMargin(event.target.checked)
    }
    const handleChangeLeverageSlider = (event: Event, newValue: number | number[]) => {
        setLeverage(newValue)
    }
    const handleChangeLeverageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLeverage(event.target.value === '' ? '' : Number(event.target.value))
    }
    const handleLeverageInputBlur = () => {
        if (leverage < 0) {
            setLeverage(0)
        } else if (leverage > 100) {
            setLeverage(100)
        }
    }
    const handleDynamicEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsDynamic(event.target.checked)
    }
    const handleChangeStaticTradeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStaticTradeAmount(Number(event.target.value))
    }
    const handleChangeFTB = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
        if (newValue !== null) {
            setFTB(Number(newValue))
        }
    }

    const onBuy = (market: any) => {
        console.log(market)
    }

    const onSell = (market: any) => {
        console.log(market)
    }

    const onFastBuy = (market: any) => {
        console.log(market)
    }

    useEffect(() => {
        const fetchCurrentSignal = async () => {
            const signals = await getCurrentSignals()

            // const signals = [
            //     {
            //         symbol: 'BTCUSDT',
            //         signal_status: 'pump'
            //     }
            // ]

            setCurrentSignals(signals)
        }

        // setInterval(() => fetchCurrentSignal(), 1000)
        fetchCurrentSignal()
    }, [currentSignals])

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Current Signal
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Typography variant='h4'>
                        {`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={9} md={9}>
                    <TableContainer component={Paper}>
                        <Table size='small' aria-label='setting board'>
                            <TableBody>
                                <TableRow>
                                    <TableCell align='right'>Leverage</TableCell>
                                    <TableCell align='center'>
                                        <Switch defaultChecked={isMargin} value={isMargin} onChange={handleChangeMarginEnable} />
                                    </TableCell>
                                    <TableCell align='right'>Dynamique Trade</TableCell>
                                    <TableCell align='left'>
                                        <Switch
                                            defaultChecked={isDynamic}
                                            disabled={!isMargin}
                                            value={isDynamic} onChange={handleDynamicEnable}
                                        />
                                    </TableCell>
                                    <TableCell align='center'>FTB=FAST TRADE BUY TIME</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Grid container spacing={2} alignItems='center'>
                                            <Grid item xs={9} sm={9} md={9}>
                                                <Slider
                                                    disabled={!isMargin}
                                                    value={typeof leverage === 'number' ? leverage : 0}
                                                    onChange={handleChangeLeverageSlider}
                                                    aria-labelledby='leverage-slider'
                                                />
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3}>
                                                <Input
                                                    disabled={!isMargin}
                                                    sx={{
                                                        width: '42px'
                                                    }}
                                                    value={leverage}
                                                    size="small"
                                                    onChange={handleChangeLeverageInput}
                                                    onBlur={handleLeverageInputBlur}
                                                    inputProps={{
                                                        step: 1,
                                                        min: 0,
                                                        max: 100,
                                                        type: 'number',
                                                        'aria-labelledby': 'leverage-slider'
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell align='right'>Static Trade</TableCell>
                                    <TableCell>
                                        <TextField
                                            value={staticTradeAmount}
                                            disabled={isMargin && isDynamic}
                                            variant='outlined' sx={{ width: '100px' }}
                                            onChange={handleChangeStaticTradeAmount}
                                        />
                                    </TableCell>
                                    <TableCell align='center'>
                                        <ToggleButtonGroup
                                            color='primary'
                                            value={String(ftb)}
                                            exclusive
                                            onChange={handleChangeFTB}
                                            aria-label="FTB"
                                        >
                                            <ToggleButton value='5'>5 seconds</ToggleButton>
                                            <ToggleButton value='10'>10 seconds</ToggleButton>
                                            <ToggleButton value='3'>3 seconds</ToggleButton>
                                        </ToggleButtonGroup>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 200 }} size='small' aria-label='a dump table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>(PI).</TableCell>
                                    <TableCell align='center'>Name</TableCell>
                                    <TableCell align='center'>Type</TableCell>
                                    <TableCell align='center'>Start Time</TableCell>
                                    <TableCell align='center' >Spot</TableCell>
                                    <TableCell align='center' colSpan={2}>Price puchased</TableCell>
                                    <TableCell align='center' colSpan={2}>Price Sold</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentSignals.map((row: any) => (
                                    <TableRow key={row.name} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                                        <TableCell align='center'>|{row.pi}/{row.rank_level}|</TableCell>
                                        <TableCell align='center'>{row.symbol}</TableCell>
                                        <TableCell align='center'>
                                            {row.signal_status === 'pump'
                                                ? <img src='/images/pump-dump/pump.png' />
                                                : <img src='/images/pump-dump/dump.jpg' />
                                            }
                                        </TableCell>
                                        <TableCell align='center'>{new Date(row.signal_start_time * 1000).toLocaleTimeString()}</TableCell>
                                        <TableCell align='right'>{row.spot}</TableCell>
                                        <TableCell align='right'>{row.trade ? row.trade.buy : row.spot}</TableCell>
                                        <TableCell align='center' style={{ width: '150px' }}>
                                            <Button variant='contained' color='success' style={{ display: "block", width: '100%' }}
                                                onClick={row.signal_status == 'pump' ? () => onSell(row) : () => onBuy(row)} disabled={row.trade}
                                            >
                                                {row.signal_status === 'pump' ? 'Sell' : 'Buy'}
                                            </Button>
                                        </TableCell>
                                        <TableCell align='right'>
                                            {row.spot}
                                        </TableCell>
                                        <TableCell align='center' style={{ width: '150px' }}>
                                            <Button variant="contained" color='error' style={{ display: "block", width: '100%' }}
                                                onClick={row.signal_status === 'pump' ? () => onBuy(row) : () => onSell(row)} disabled={!row.trade}
                                            >
                                                CLOSE
                                            </Button>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Button variant="contained" color='primary' style={{ display: "block", width: '100%' }}
                                                onClick={() => onFastBuy(row)}
                                            >
                                                FTB
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer >
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Trade Filled" titleTypographyProps={{ variant: 'h6' }} />
                        <TableTrade />
                    </Card>
                </Grid>

            </Grid>
        </div>


    )
}

export default CurrentDump