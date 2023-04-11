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
import { wrapper } from "src/@core/store"
import { initializeUser } from "src/@core/serverSideProps"
import { AppContext } from 'next/app'
import { useDispatch, useSelector } from 'react-redux'
import actions from 'src/@core/store/actions'
import { RootState } from 'src/@core/store/types/global.types'

const CurrentDump = () => {
    const [time, setTime] = useState(new Date())
    const [currentSignals, setCurrentSignals] = useState<any>([])
    const [leverage, setLeverage] = useState<number | number[] | string | null>(null)
    const dispatch = useDispatch()

    const token = useSelector((state: RootState) => state.authentication.token)
    useEffect(() => {
        if (token) {
            dispatch(actions.getTradeList(token))
            dispatch(actions.getTradeSetting(token))
        }
    }, [token, dispatch])

    const tradeSetting = useSelector((state: RootState) => state.trade.tradeSetting)

    const tradeList = useSelector((state: RootState) => state.trade.currentTrades)

    const completedTrades = useSelector((state: RootState) => state.trade.completedTrades)


    useEffect(() => {
        if (tradeSetting && !leverage) {
            setLeverage(tradeSetting.leverageValue)
        }
    }, [tradeSetting, leverage])

    useEffect(() => {
        if (leverage && token) {
            dispatch(actions.setLeverageValue(token, leverage))
        }
    }, [dispatch, token, leverage])

    const handleChangeMarginEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (token)
            dispatch(actions.setIsLeverage(token, event.target.checked))
    }
    const handleChangeLeverageSlider = (event: Event, newValue: number | number[]) => {
        setLeverage(newValue)
    }
    const handleChangeLeverageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLeverage(event.target.value === '' ? '' : Number(event.target.value))
    }
    const handleLeverageInputBlur = () => {
        if (typeof leverage === 'number') {
            if (leverage < 0) {
                setLeverage(0)
            } else if (leverage > 100) {
                setLeverage(100)
            }
        }
    }
    const handleDynamicEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (token)
            dispatch(actions.setIsDynamic(token, event.target.checked))
    }
    const handleChangeStaticTradeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (token)
            dispatch(actions.setStaticTrade(token, Number(event.target.value)))
    }
    const handleChangeFTB = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
        if (newValue !== null && token) {
            dispatch(actions.setFTB(token, Number(newValue)))
        }
    }

    const startTrade = (symbol: string, type: string) => () => {
        if (token)
            dispatch(actions.startTrade(token, symbol, type === 'pump' ? 'buy' : 'sell', false))
    }

    const closeTrade = (trade_id: number) => () => {
        if (token)
            dispatch(actions.closeTrade(token, trade_id))
    }

    const onFastBuy = (market: any) => {
        console.log(market)
    }

    useEffect(() => {
        const fetchCurrentSignal = async () => {
            const signals = await getCurrentSignals()

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
                    {tradeSetting &&
                        <TableContainer component={Paper}>
                            <Table size='small' aria-label='setting board'>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align='right'>Leverage</TableCell>
                                        <TableCell align='center'>
                                            <Switch defaultChecked={tradeSetting.isLeverage} value={tradeSetting.isLeverage} onChange={handleChangeMarginEnable} />
                                        </TableCell>
                                        <TableCell align='right'>Dynamique Trade</TableCell>
                                        <TableCell align='left'>
                                            <Switch
                                                defaultChecked={tradeSetting.isDynamic}
                                                disabled={!tradeSetting.isLeverage}
                                                value={tradeSetting.isDynamic} onChange={handleDynamicEnable}
                                            />
                                        </TableCell>
                                        <TableCell align='center'>FTB=FAST TRADE BUY TIME</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Grid container spacing={2} alignItems='center'>
                                                <Grid item xs={9} sm={9} md={9}>
                                                    <Slider
                                                        disabled={!tradeSetting.isLeverage}
                                                        value={typeof leverage === 'number' ? leverage : 0}
                                                        onChange={handleChangeLeverageSlider}
                                                        aria-labelledby='leverage-slider'
                                                    />
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3}>
                                                    <Input
                                                        disabled={!tradeSetting.isLeverage}
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
                                                value={tradeSetting.staticTrade}
                                                disabled={tradeSetting.isLeverage && tradeSetting.isDynamic}
                                                variant='outlined' sx={{ width: '100px' }}
                                                onChange={handleChangeStaticTradeAmount}
                                            />
                                        </TableCell>
                                        <TableCell align='center'>
                                            <ToggleButtonGroup
                                                color='primary'
                                                value={String(tradeSetting.ftb)}
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
                    }

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
                                    <TableCell align='center' colSpan={2}>Start Trade</TableCell>
                                    <TableCell align='center' colSpan={2}>Close Trade</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentSignals.map((row: any) => {
                                    const currentTrade = tradeList.find(trade => !trade.endPrice
                                        && trade.symbol === row.symbol)

                                    return (
                                        <TableRow key={row.name} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                                            <TableCell align='center'>|{row.pi}/{row.rank_level}|</TableCell>
                                            <TableCell align='center'>{row.symbol}</TableCell>
                                            <TableCell align='center'>
                                                {row.signal_status === 'pump'
                                                    ? <img src='/images/pump-dump/pump.png' alt='signal pump' />
                                                    : <img src='/images/pump-dump/dump.jpg' alt='signal dump' />
                                                }
                                            </TableCell>
                                            <TableCell align='center'>{new Date(row.signal_start_time * 1000).toLocaleTimeString()}</TableCell>
                                            <TableCell align='right'>{row.spot}</TableCell>
                                            <TableCell align='right'>{currentTrade ? currentTrade.startPrice : row.spot}</TableCell>
                                            <TableCell align='center' style={{ width: '150px' }}>
                                                <Button variant='contained' color='success' style={{ display: "block", width: '100%' }}
                                                    onClick={startTrade(row.symbol, row.signal_status)} disabled={currentTrade}
                                                >
                                                    {row.signal_status === 'pump' ? 'Buy' : 'Sell'}
                                                </Button>
                                            </TableCell>
                                            <TableCell align='right'>
                                                {row.spot}
                                            </TableCell>
                                            <TableCell align='center' style={{ width: '150px' }}>
                                                <Button variant="contained" color='error' style={{ display: "block", width: '100%' }}
                                                    onClick={closeTrade(currentTrade?.id)} disabled={!currentTrade}
                                                >
                                                    CLOSE
                                                </Button>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Button variant="contained" color='primary' style={{ display: "block", width: '100%' }}
                                                    onClick={() => onFastBuy(row)}
                                                    disabled={currentTrade}
                                                >
                                                    FTB
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer >
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Trade Filled" titleTypographyProps={{ variant: 'h6' }} />
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Symbol</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Start Time</TableCell>
                                        <TableCell>Start Price</TableCell>
                                        <TableCell>End Time</TableCell>
                                        <TableCell>End Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {completedTrades.map((trade: any) => (
                                        <TableRow key={trade.id} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                                            <TableCell component='th' scope='row'>
                                                {trade.symbol}
                                            </TableCell>
                                            <TableCell align='right'>{trade.type}</TableCell>
                                            <TableCell align='right'>{trade.startTime}</TableCell>
                                            <TableCell align='right'>{trade.startPrice}</TableCell>
                                            <TableCell align='right'>{trade.endTime}</TableCell>
                                            <TableCell align='right'>{trade.endPrice}</TableCell>

                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>

            </Grid>
        </div>


    )
}


export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx: AppContext) => {
    await initializeUser(ctx, store)
})

export default CurrentDump