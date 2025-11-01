import axios from "axios"

export const getBestPump = async (period: string) => {
    const data = await fetch(`${process.env.API_URL}/pump/${period}`)
        .then(data => data.json())

    return data
}

export const getBestDump = async (period: string) => {
    const data = await fetch(`${process.env.API_URL}/dump/${period}`)
        .then(data => data.json())

    return data
}

export const getCurrentSignals = async () => {
    const data = await fetch(`${process.env.API_URL}/current/signals`)
        .then(data => data.json())

    return data
}




export const getSettings = async () => {

    const data = await fetch(`${process.env.API_URL}/setting`).then(res => res.json())

    return data
}

export const settingCycleDuration = async (duration: number) => {
    const res = await fetch(`${process.env.API_URL}/setting/cycle-duration`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            duration
        }),\n        headers: {\n            'Content-Type': 'application/json'\n        }
    }).then(res => res.json())

    return res
}

export const settingRepeatingCount = async (count: number) => {
    const res = await fetch(`${process.env.API_URL}/setting/repeat-count`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            count
        }),\n        headers: {\n            'Content-Type': 'application/json'\n        }
    }).then(res => res.json())

    return res
}

export const settingRepeatingBreak = async (breakCount: number) => {
    const res = await fetch(`${process.env.API_URL}/setting/repeat-break`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            breakCount
        }),\n        headers: {\n            'Content-Type': 'application/json'\n        }
    }).then(res => res.json())

    return res
}

export const settingRankLevel = async (levelCount: number) => {
    const res = await fetch(`${process.env.API_URL}/setting/level`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            levelCount
        }),\n        headers: {\n            'Content-Type': 'application/json'\n        }
    }).then(res => res.json())

    return res
}

export const settingRankLevelPercent = async (level: number, percent: number) => {
    const res = await fetch(`${process.env.API_URL}/setting/level/percent`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            level,
            percent
        }),\n        headers: {\n            'Content-Type': 'application/json'\n        }
    }).then(res => res.json())

    return res
}

export const settingCryptoLists = async (cryptoList: string) => {
    const res = await fetch(`${process.env.API_URL}/setting/cryptos`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            cryptoList
        }),\n        headers: {\n            'Content-Type': 'application/json'\n        }
    }).then(res => res.json())

    return res
}