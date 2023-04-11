export const SET_TRADE_SETTING = 'SET_TRADE_SETTING'
export const SET_IS_LEVERAGE = 'SET_IS_LEVERAGE'
export const SET_LEVERAGE_VALUE = 'SET_LEVERAGE_VALUE'
export const SET_IS_DYNAMIC = 'SET_IS_DYNAMIC'
export const SET_STATIC_TRADE = 'SET_STATIC_TRADE'
export const SET_FTB = 'SET_FTB'

// export const SET_CURRENT_TRADE = 'SET_CURRENT_TRADE'
// export const SET_COMPLETED_TRADE = 'SET_COMPLETED_TRADE'

export const SET_TRADE = 'SET_TRADE'

export interface TradeSettingState {
    isLeverage: boolean;
    leverageValue: number;
    isDynamic: boolean;
    staticTrade: number;
    ftb: number;
}

export interface Trade {
    symbol: string;
    type: 'sell' | 'buy';
    startPrice: number,
    startTime: Date,
    amount: number,
    isFTB: boolean
    endPrice?: number,
    endTime?: Date
    profit?: number
}

export interface TradeState {
    tradeSetting: TradeSettingState | null
    currentTrades: any[]
    completedTrades: any[]
}

interface SetTradeSettingAction {
    type: typeof SET_TRADE_SETTING,
    payload: { tradeSettings: TradeSettingState }
}

interface SetIsLeverageAction {
    type: typeof SET_IS_LEVERAGE,
    payload: boolean
}

interface SetLeverageValueAction {
    type: typeof SET_LEVERAGE_VALUE,
    payload: number
}

interface SetIsDynamicAction {
    type: typeof SET_IS_DYNAMIC,
    payload: boolean
}

interface SetStaticTradeAction {
    type: typeof SET_STATIC_TRADE,
    payload: number
}

interface SetFTBAction {
    type: typeof SET_FTB,
    payload: number
}



interface SetTradeAction {
    type: typeof SET_TRADE,
    payload: {
        currentTrade: Trade[],
        completedTrade: Trade[]
    }
}

export type TradeActionTypes =
    | SetTradeAction
    | SetIsLeverageAction
    | SetLeverageValueAction
    | SetIsDynamicAction
    | SetStaticTradeAction
    | SetFTBAction
    | SetTradeSettingAction;