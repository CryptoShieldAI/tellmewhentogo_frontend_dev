import {
    SET_FTB,
    SET_IS_DYNAMIC,
    SET_IS_LEVERAGE,
    SET_LEVERAGE_VALUE,
    SET_STATIC_TRADE,
    SET_TRADE,
    SET_TRADE_SETTING,
    TradeActionTypes,
    TradeState
} from '../types/trade.types'

const initialState: TradeState = {
    tradeSetting: null,
    currentTrades: [],
    completedTrades: []
}

export default function tradeReducer(
    state = initialState,
    action: TradeActionTypes
) {
    switch (action.type) {
        case SET_TRADE_SETTING:
            return {
                ...state,
                tradeSetting: action.payload.tradeSettings
            }
        case SET_IS_LEVERAGE:
            return {
                ...state,
                tradeSetting: {
                    ...state.tradeSetting,
                    isLeverage: action.payload
                }
            }
        case SET_LEVERAGE_VALUE:
            return {
                ...state,
                tradeSetting: {
                    ...state.tradeSetting,
                    leverageValue: action.payload
                }
            }
        case SET_IS_DYNAMIC:
            return {
                ...state,
                tradeSetting: {
                    ...state.tradeSetting,
                    isDynamic: action.payload
                }
            }
        case SET_STATIC_TRADE:
            return {
                ...state,
                tradeSetting: {
                    ...state.tradeSetting,
                    staticTrade: action.payload
                }
            }
        case SET_FTB:
            return {
                ...state,
                tradeSetting: {
                    ...state.tradeSetting,
                    ftb: action.payload
                }
            }
        case SET_TRADE:
            return {
                ...state,
                currentTrades: [...action.payload.currentTrade],
                completedTrades: [...action.payload.completedTrade]
            }
        default:
            return state;
    }
}