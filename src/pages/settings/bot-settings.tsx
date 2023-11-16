import { Button } from '@mui/material'

const btnStyle = {
    backgroundColor: '#9155FD',
    color: 'white',
    height: '35px',
    width: '100%',
    borderRadius: '0'
}
const BotSettings = () => {
    return (
        <>
            <div className='bot-wrapper'>
                <div>Bot wil stop automatically to trade after reaching number of tragde setup</div>
                <div className="bot-title">Parameters</div>
                <table>
                    <tr>
                        <td className='w-list-title fir-child'>Order rules</td>
                        <td></td>
                        <td className='thir-child'></td>
                        <td className='w-list-title'>Applied</td>
                        <td className='w-list-title'>Bot1</td>
                        <td className='w-list-title'>Bot2</td>
                        <td className='w-list-title'>Bot3</td>
                        <td className='w-list-title'>Bot4</td>
                        <td className='w-list-title'>Bot5</td>
                    </tr>
                    <tr>
                        <td>Amount$</td>
                        <td>100</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Leverage</td>
                        <td>x30</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>x30</td>
                        <td>x25</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>No. of Placed Orders</td>
                        <td>10</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>x30</td>
                        <td>x25</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>Slimultaneous Trade</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>Max simltaeou trade number</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>TP</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>SL</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td className='w-list-title'>Order signal</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>Pump</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>Dump</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>PI Condition</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>RSI</td>
                        <td></td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td>Entry price</td>
                        <td></td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                        <td>Enable</td>
                        <td>x40</td>
                        <td>x10</td>
                        <td>20</td>
                        <td>x30</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Button sx={btnStyle}>Enable</Button></td>
                        <td><Button sx={btnStyle}>Enable</Button></td>
                        <td><Button sx={btnStyle}>Enable</Button></td>
                        <td><Button sx={btnStyle}>Enable</Button></td>
                        <td><Button sx={btnStyle}>Enable</Button></td>
                    </tr>
                </table>
                <table id="bot-information">
                    <tr>
                        <td className='w-list-title information-fir-child'>Informations</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Show perfomance</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                    </tr>
                    <tr>
                        <td>Notification for each trade Open</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                    </tr>
                    <tr>
                        <td>Notification for each trade Closed</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                    </tr>
                    <tr>
                        <td>Notification Successful Number placed</td>
                        <td>Enable</td>
                        <td><Button sx={btnStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default BotSettings