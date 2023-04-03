import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TableBest from "src/views/tables/TableBest"
import { useState, useEffect } from "react"
import { getBestDump } from "src/service"
import TVChartContainer from "src/component/tradingViewWidget"
import { wrapper } from "src/@core/store"
import { initializeUser } from "src/@core/serverSideProps"
import { AppContext } from 'next/app'

const BestDump = () => {
    const [dumpList1D, setDumpList1D] = useState<any>([])
    const [dumpList1W, setDumpList1W] = useState<any>([])
    const [chartSymbol, setChartSymbol] = useState<any>('')

    useEffect(() => {
        const fetchDumpList = async () => {
            const dump1D = await getBestDump('day')
            const dump1W = await getBestDump('week')
            setDumpList1D(dump1D)
            setDumpList1W(dump1W)
        }

        // setInterval(() => fetchDumpList(), 100)
        fetchDumpList()
    }, [])
    const onSelectMarket = (symbol: string) => {
        setChartSymbol(symbol)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5">
                    Crypto Ranking Best Average Dump
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
                <Card>
                    <CardHeader title="Dump In 24h" titleTypographyProps={{ variant: 'h6' }} />
                    <TableBest data={dumpList1D} onSelectColume={onSelectMarket} />
                </Card>
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
                {/* <img
                    src='/images/tradingChart.png'
                    style={{ width: '100%' }}
                /> */}
                <TVChartContainer symbol={chartSymbol.length === 0 && dumpList1D.length > 0 ? dumpList1D[0].symbol : chartSymbol} />
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
                <Card>
                    <CardHeader title="Dump In 7 Days" titleTypographyProps={{ variant: 'h6' }} />
                    <TableBest data={dumpList1W} onSelectColume={onSelectMarket} />
                </Card>
            </Grid>
        </Grid>
    )

}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx: AppContext) => {
    await initializeUser(ctx, store)
})

export default BestDump