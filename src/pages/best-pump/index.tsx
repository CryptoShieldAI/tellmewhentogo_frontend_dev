import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import TVChartContainer from "src/component/tradingViewWidget"
import { getBestPump } from "src/service"

import TableBest from "src/views/tables/TableBest"

const BestPump = () => {
    const [pumpList1D, setPumpList1D] = useState<any>([])
    const [pumpList1W, setPumpList1W] = useState<any>([])
    const [chartSymbol, setChartSymbol] = useState<any>('')

    useEffect(() => {
        const fetchPumpList = async () => {
            const pump1D = await getBestPump('day')
            const pump1W = await getBestPump('week')
            setPumpList1D(pump1D)
            setPumpList1W(pump1W)
        }

        // setInterval(() => fetchPumpList(), 100)
        fetchPumpList()
    }, [])

    const onSelectMarket = (symbol: string) => {
        setChartSymbol(symbol)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5">
                    Crypto Ranking Best Average Pump
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
                <Card>
                    <CardHeader title="Pump In 24h" titleTypographyProps={{ variant: 'h6' }} />
                    <TableBest data={pumpList1D} onSelectColume={onSelectMarket} />
                </Card>
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
                {/* <img
                    src='/images/tradingChart.png'
                    style={{ width: '100%' }}
                /> */}
                <TVChartContainer symbol={chartSymbol.length === 0 && pumpList1D.length > 0 ? pumpList1D[0].symbol : chartSymbol} />
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
                <Card>
                    <CardHeader title="Pump In 7 Days" titleTypographyProps={{ variant: 'h6' }} />
                    <TableBest data={pumpList1W} onSelectColume={onSelectMarket} />
                </Card>
            </Grid>
        </Grid>
    )

}

export default BestPump