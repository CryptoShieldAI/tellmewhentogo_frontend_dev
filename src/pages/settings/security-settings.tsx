import { Button } from "@mui/material"

const changeStyle = {
    backgroundColor: '#9155FD',
    color: 'white',
    height: '35px'
}

const SecuritySettings = () => {
    return (
        <div className="security-wrapper">
            <div className="sercurity-row">
                <div className="sercurity-title">Email Authentication</div>
                <a className="value-text">Test@gmail.com</a>
                <Button sx={changeStyle}>Change</Button>
            </div>
            <div className="sercurity-row">
                <div className="sercurity-title">Password</div>
                <div className="password value-text">****</div>
                <Button sx={changeStyle}>Change</Button>
            </div>
            <div className="sercurity-row">
                <div className="sercurity-title">Google Two Factor Authentication</div>
                <div className="value-text">Enable</div>
                <Button sx={changeStyle}>Change</Button>
            </div>
            <div className="sercurity-row">
                <div className="sercurity-title">Anti-phishing Code</div>
                <div className="value-text">1234</div>
                <Button sx={changeStyle}>Change</Button>
            </div>
            <div className="sercurity-row">
                <div className="sercurity-title">Account Activities</div>
                <div className="value-text">10/03/2023</div>
                <Button sx={changeStyle}>Change</Button>
            </div>
        </div>
    )
}

export default SecuritySettings