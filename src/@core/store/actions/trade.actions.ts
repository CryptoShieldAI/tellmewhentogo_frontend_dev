import axios from 'axios'
import actions from '.'
import { SET_FTB, SET_IS_DYNAMIC, SET_IS_LEVERAGE, SET_LEVERAGE_VALUE, SET_STATIC_TRADE, SET_TRADE, SET_TRADE_SETTING } from '../types/trade.types'

const getTradeSetting = (token: string): any => {
    return async (dispatch: any) => {
        const data: any = await axios.get(`${process.env.API_URL}/trade/setting`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.data)
        dispatch({
            type: SET_TRADE_SETTING,
            payload: {
                tradeSettings: {
                    isLeverage: data.settings.is_leverage,
                    leverageValue: data.settings.leverage_value,
                    isDynamic: data.settings.is_dynamic,
                    staticTrade: data.settings.static_trade,
                    ftb: data.settings.ftb
                }
            }
        })
    }
}

const setIsLeverage = (token: string, isLeverage: boolean): any => {
    return async (dispatch: any) => {
        const data = await axios.post(`${process.env.API_URL}/trade/setting/is-leverage`, {
            is_leverage: isLeverage
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
        if (data.status === 'success') {
            dispatch({ type: SET_IS_LEVERAGE, payload: isLeverage })
        }
    }
}

const setLeverageValue = (token: string, leverageValue: number | number[] | string): any => {
    return async (dispatch: any) => {
        const data = await axios.post(`${process.env.API_URL}/trade/setting/leverage-value`, {
            leverage_value: leverageValue
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
        if (data.status === 'success') {
            dispatch({ type: SET_LEVERAGE_VALUE, payload: leverageValue })
        }
    }
}

const setIsDynamic = (token: string, isDynamic: boolean): any => {
    return async (dispatch: any) => {
        const data = await axios.post(`${process.env.API_URL}/trade/setting/is-dynamic`, {
            is_dynamic: isDynamic
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
        if (data.status === 'success') {
            dispatch({ type: SET_IS_DYNAMIC, payload: isDynamic })
        }
    }
}

const setStaticTrade = (token: string, staticTrade: number): any => {
    return async (dispatch: any) => {
        const data = await axios.post(`${process.env.API_URL}/trade/setting/static-trade`, {
            static_trade: staticTrade
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
        if (data.status === 'success') {
            dispatch({ type: SET_STATIC_TRADE, payload: staticTrade })
        }
    }
}

const setFTB = (token: string, ftb: number): any => {
    return async (dispatch: any) => {
        const data = await axios.post(`${process.env.API_URL}/trade/setting/ftb`, {
            ftb
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
        if (data.status === 'success') {
            dispatch({ type: SET_FTB, payload: ftb })
        }
    }
}

const getTradeList = (token: string): any => {
    return async (dispatch: any) => {
        const data: any = await axios.get(`${process.env.API_URL}/trade/list`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
        if (data.status === 'success') {
            console.log(data)
            dispatch({
                type: SET_TRADE,
                payload: {
                    currentTrade: data.currentTrade,
                    completedTrade: data.completedTrade
                }
            })
        }
    }
}


const closeTrade = (token: string, tradeId: number): any => {
    return async (dispatch: any) => {
        console.log(tradeId)
        const data = await axios.post(`${process.env.API_URL}/trade/close`, {
            tradeId
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
        if (data.status === 'success') {
            dispatch(actions.getTradeList(token))
        }
    }
}

const startTrade = (token: string, symbol: string, type: 'sell' | 'buy', is_ftb: boolean): any => {
    return async (dispatch: any) => {
        const data = await axios.post(`${process.env.API_URL}/trade/start`, {
            symbol,
            type,
            is_ftb
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
        if (data.status === 'success') {
            dispatch(actions.getTradeList(token))
        }
    }
}

export default {
    getTradeSetting,
    setIsLeverage,
    setLeverageValue,
    setIsDynamic,
    setStaticTrade,
    setFTB,
    getTradeList,
    startTrade,
    closeTrade
}