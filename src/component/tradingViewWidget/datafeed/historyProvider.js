

const api_root = 'http://52.0.209.15/api/'

const history = {}

export default {
	history: history,

	getBars: function (symbolInfo, resolution, from, to, first, limit) {
		const url = `${api_root}/market/${symbolInfo.name}`
		const qs = {
			resolution,
			to
		}
		console.log('to', to)
		return fetch(`${url}?` + new URLSearchParams(qs)).then(data => data.json())
			.then(data => {
				console.log('test', data)
				if (data.retMsg && data.retMsg !== 'OK') {
					console.log('CryptoCompare API error:', data.Message)
					return []
				}
				if (data.result?.list?.length) {
					// console.log(`Actually returned: ${new Date(data.TimeFrom * 1000).toISOString()} - ${new Date(data.TimeTo * 1000).toISOString()}`)

					const bars = data.result?.list?.reverse().map(bar => {
						if (bar[0] >= from && bar[0] < to) {
							return {
								time: parseInt(bar[0]),
								open: parseFloat(bar[1]),
								high: parseFloat(bar[2]),
								low: parseFloat(bar[3]),
								close: parseFloat(bar[4]),
								volume: parseFloat(bar[5]),
							}
						}

					})
					if (first) {
						var lastBar = bars[bars.length - 1]
						history[symbolInfo.name] = { lastBar: lastBar }
					}
					return bars
				} else {
					return []
				}
			})
	}
}