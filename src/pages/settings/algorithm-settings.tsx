import { ChangeEvent, useEffect, useState } from "react"
import { getSettings, settingCryptoLists, settingCycleDuration, settingRankLevel, settingRankLevelPercent, settingRepeatingBreak, settingRepeatingCount } from "src/service"

const AlgorithmSettings = () => {
    const [cycleDuration, setCycleDuration] = useState<number>(60);
    const [cycleDurationInput, setCycleDurationInput] = useState<number>(0);
    const [repeatingCount, setRepeatingCount] = useState<number>(20);
    const [repeatingCountInput, setRepeatingCountInput] = useState<number>(0);
    const [repeatingBreak, setRepeatingBreak] = useState<number>(5);
    const [repeatingBreakInput, setRepeatingBreakInput] = useState<number>(0);
    const [levelCount, setLevelCount] = useState<number>(5);
    const [levelCountInput, setLevelCountInput] = useState<number>(0);
    const [levelPercents, setLevelPercents] = useState<number[]>([]);
    const [levelPercentsInput, setLevelPercentsInput] = useState<number[]>([]);
    const [cryptoLists, setCryptoLists] = useState<string>("");
    const [cryptoListsInput, setCryptoListsInput] = useState<string>("");

    useEffect(() => {
        const fetchSettings = async () => {
            const settings = await getSettings()
            setCycleDuration(settings.cycleDuration)
            setRepeatingCount(settings.repeatingCount)
            setRepeatingBreak(settings.repeatingBreak)
            setLevelCount(settings.rankLevel)
            setLevelPercents(settings.levelPercents)
            setCryptoLists(settings.symbolList)
        }
        fetchSettings()
    }, [levelCount])

    const onCycleDurationInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCycleDurationInput(Number(event.target.value));
    }
    const handleSetCycleDuration = async () => {
        await settingCycleDuration(cycleDurationInput);
        setCycleDuration(cycleDurationInput)
        setCycleDurationInput(0)
    }
    const onRepeatingCountInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRepeatingCountInput(Number(event.target.value))
    }
    const handleSetRepeatingCount = async () => {
        await settingRepeatingCount(repeatingCountInput);
        setRepeatingCount(repeatingCountInput);
        setRepeatingCountInput(0);
    }
    const onRepeatingBreakInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRepeatingBreakInput(Number(event.target.value))
    }
    const handleSetRepeatingBreak = () => {
        settingRepeatingBreak(repeatingBreakInput);
        setRepeatingBreak(repeatingBreakInput);
        setRepeatingBreakInput(0);
    }
    const onLevelCountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLevelCountInput(Number(event.target.value));
    }

    const handleSetLevelCount = async () => {
        await settingRankLevel(levelCountInput);
        setLevelCount(levelCountInput);
        setLevelCountInput(0);
    }

    const onLevelPercentChange = (level: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const percents = [...levelPercentsInput];
        percents[level - 1] = Number(event.target.value)
        setLevelPercentsInput(percents)
    }
    const handleSetLevelPercent = (level: number) => async () => {
        await settingRankLevelPercent(level, levelPercentsInput[level - 1])
        let percents = [...levelPercents];
        percents[level - 1] = levelPercentsInput[level - 1]
        setLevelPercents(percents)
        percents = [...levelPercentsInput]
        percents[level - 1] = 0;
        setLevelPercentsInput(percents)
    }

    const onCryptoListChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCryptoListsInput(event.target.value)
    }
    const handleSetCryptoList = async () => {
        await settingCryptoLists(cryptoListsInput)
        setCryptoLists(cryptoListsInput);
        setCryptoListsInput("")
    }

    return (
        <div className="settings-wrapper">
            <div className="settings-top">
                <div className="row">
                    <div className="category">Algorithm</div>
                    <div className="applied">Applied</div>
                </div>
                <div className="row">
                    <div className="label">Alggorithm Cycles time monitored</div>
                    <input type="text" onChange={onCycleDurationInputChange} value={cycleDurationInput} />
                    <button type="button" onClick={handleSetCycleDuration}>SUBMIT</button>
                    <div className="applied-label">{cycleDuration}</div>
                </div>
                <div className="row">
                    <div className="category">Rule</div>
                </div>
                <div className="row">
                    <div className="label">Repeating signal of continuous keeping</div>
                    <input type="text" onChange={onRepeatingCountInputChange} value={repeatingCountInput} />
                    <button type="button" onClick={handleSetRepeatingCount}>SUBMIT</button>
                    <div className="applied-label">{repeatingCount}</div>
                </div>
                <div className="row">
                    <div className="label">Repeating signal with breaking times</div>
                    <input type="text" onChange={onRepeatingBreakInputChange} value={repeatingBreakInput} />
                    <button type="button" onClick={handleSetRepeatingBreak}>SUBMIT</button>
                    <div className="applied-label">{repeatingBreak}</div>
                </div>
                <div className="row">
                    <div className="category">Index</div>
                </div>
                <div className="rank-level">
                    <div className="row">
                        <div className="label">Rank level</div>
                        <input type="text" onChange={onLevelCountChange} value={levelCountInput} />
                        <button type="button" onClick={handleSetLevelCount}>SUBMIT</button>
                        <div className="applied-label">{levelCount}</div>
                    </div>
                    {Array.from({ length: levelCount }, (_, i) => i + 1).map((level: number) =>

                        <div className="row" key={level}>
                            <div className="level-blank"></div>
                            <div className="level-label">Level {level}</div>
                            <input type='text' onChange={onLevelPercentChange(level)} value={levelPercentsInput[level - 1] ?? 0} />
                            <button type="button" onClick={handleSetLevelPercent(level)}>SUBMIT</button>
                            <div className="applied-label">{levelPercents[level - 1] ?? 0}%</div>

                        </div>
                    )}

                </div>
            </div>

            <div className="row settings-bottom">
                <div className="left">
                    <div className="category">Crypto Lists</div>
                    <textarea onChange={onCryptoListChange} value={cryptoListsInput} />
                    < button type="button" onClick={handleSetCryptoList}>SUBMIT</button>
                </div>
                <div className="right">
                    <div className="applied">Applied</div>
                    <textarea readOnly value={cryptoLists} />
                </div>
            </div>
        </div >
    )
}

export default AlgorithmSettings