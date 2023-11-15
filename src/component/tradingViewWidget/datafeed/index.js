import historyProvider from './historyProvider'
import stream from './stream'

const supportedResolutions = ["1", "3", "5", "15", "30", "60", "120", "240", "D"]

const config = {
  supported_resolutions: supportedResolutions
};

const datafeed = {
  onReady: cb => {
    console.log('=====onReady running')
    setTimeout(() => cb(config), 0)
  },
  resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
    var symbol_stub = {
      name: symbolName,
      description: '',
      type: 'crypto',
      session: '24x7',
      timezone: 'America/New_York',
      ticker: symbolName,
      minmov: 1,
      pricescale: 100,
      has_intraday: true,
      intraday_multipliers: ['1', '60'],
      supported_resolution: ["1", "3", "5", "15", "30", "60", "120", "240", "D", "M", "W"],
      volume_precision: 8,
      data_status: 'streaming',
    }
    setTimeout(function () {
      onSymbolResolvedCallback(symbol_stub)
    }, 0)
  },
  getBars: function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
    console.log('=====getBars running')
    // console.log('function args',arguments)
    // console.log(`Requesting bars between ${new Date(from * 1000).toISOString()} and ${new Date(to * 1000).toISOString()}`)
    historyProvider.getBars(symbolInfo, resolution, from * 1000, to * 1000, firstDataRequest)
      .then(bars => {
        if (bars.length) {
          onHistoryCallback(bars, { noData: false })
        } else {
          onHistoryCallback([], { noData: true })
        }
      }).catch(err => {
        console.log({ err })
        onErrorCallback(err)
      })
  },
  subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
    console.log('=====subscribeBars runnning')
    stream.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback)
  },
  unsubscribeBars: subscriberUID => {
    console.log('=====unsubscribeBars running')

    stream.unsubscribeBars(subscriberUID)
  },
  calculateHistoryDepth: (resolution, resolutionBack, intervalBack) => {
    //optional
    console.log('=====calculateHistoryDepth running')
    // while optional, this makes sure we request 24 hours of minute data at a time
    // CryptoCompare's minute data endpoint will throw an error if we request data beyond 7 days in the past, and return no data
    return resolution < 60 ? { resolutionBack: 'D', intervalBack: '1' } : undefined
  },
  getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
    //optional
    console.log('=====getMarks running')
  },
  getTimeScaleMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
    //optional
    console.log('=====getTimeScaleMarks running')
  },
  getServerTime: cb => {
    console.log('=====getServerTime running')
  }
}

export default datafeed