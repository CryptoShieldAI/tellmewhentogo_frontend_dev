import { Button } from "@mui/material"

const submitStyle = {
    backgroundColor: '#9155FD',
    color: 'white',
    height: '35px'
}
const NotificationSettings = () => {
    return (
        <div className="notification-wrapper">
            <div className="left">
                <table>
                    <tr>
                        <td className="b-list-title list-width">Notification Center</td>
                        <td></td>
                        <td></td>
                        <td className="w-list-title">Applied</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><a>djcontactusup@gamil.com</a></td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                        <td>djcontactsup@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Telegram</td>
                        <td>Enable</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                        <td>Enable</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>djcontact</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                        <td></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td className="b-list-title list-width">Whatsapp</td>
                        <td>Enable</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(+)971 55 15 15</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td className="b-list-title list-width">Discord</td>
                        <td>Enable</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>djcontact</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td className="b-list-title list-width">Rules user Anouncement</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Free</td>
                        <td>1 signal weel</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                    <tr>
                        <td>WEEKLY</td>
                        <td>6,99$</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                    <tr>
                        <td>3 Months 59,99$</td>
                        <td>1 signal weel</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                    <tr>
                        <td>6 months</td>
                        <td>89,99$</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                    <tr>
                        <td>yearly Premi</td>
                        <td>169,99$</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                    <tr>
                        <td>LIFETIME</td>
                        <td>500$</td>
                        <td><Button sx={submitStyle}>SUBMIT</Button></td>
                    </tr>
                </table>
            </div>
            <div className="right">
                <div className="list">
                    <div className="list-row">
                        <div className="w-list-title">Eamil list</div>
                    </div>
                    <div className="list-text">dicontactsup@gmail.com, test@gmail.com,</div>
                </div>
                <div className="list">
                    <div className="list-row">
                        <div className="w-list-title">Telegram list</div>
                    </div>
                    <div className="list-text">djcontact, clovis211, lolipof,</div>
                </div>
                <div className="list">
                    <div className="list-row">
                        <div className="w-list-title">Eamil list</div>
                    </div>
                    <div className="list-text">(+)971 5 51 51 51</div>
                </div>
                <div className="list">
                    <div className="list-row">
                        <div className="w-list-title">DISCORD list</div>
                    </div>
                    <div className="list-text">dicontactsup@gmail.com, test@gmail.com,</div>
                </div>
                <div className="list">
                    <div className="list-row">
                        <div className="w-list-title">USER Weekly</div>
                    </div>
                    <div className="list-text">usco11, moaii0,</div>
                </div>
                <div className="list">
                    <div className="list-row">
                        <div className="w-list-title">USER Months</div>
                    </div>
                    <div className="list-text">iiisoe22, sdvo5, ppoie, 45</div>
                </div>
                <div className="list">
                    <div className="list-row">
                        <div className="w-list-title">USER 6 Months</div>
                    </div>
                    <div className="list-text">tiago33, rodoa12, ilyt2</div>
                </div>
                <div className="list">
                    <div className="list-row">
                        <div className="w-list-title">USER Yearly</div>
                    </div>
                    <div className="list-text">djcontact, clovis211, lolipof,</div>
                </div>
                <div className="list">
                    <div className="list-row">
                        <div className="w-list-title">USER LFETIME</div>
                    </div>
                    <div className="list-text">djcontact, clovis211, lolipof,</div>
                </div>
            </div>
        </div>
    )
}

export default NotificationSettings