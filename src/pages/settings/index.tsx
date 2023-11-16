import { SyntheticEvent, useState } from "react"
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AlgorithmSettings from './algorithm-settings'
import NotificationSettings from "./notification-settings";
import BotSettings from "./bot-settings";
import UserSettings from "./user-settings";
import ApiSettings from "./api-settings";
import SecuritySettings from "./security-settings";
import { wrapper } from "src/@core/store";
import { initializeUser } from "src/@core/serverSideProps";
import { AppContext } from 'next/app'


const Settings = () => {

    const [tab, setTab] = useState('1');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setTab(newValue)
    }



    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="setting tabs">
                        <Tab className="setting-tab" label="NOTIFICATION" value="1" />
                        <Tab className="setting-tab" label="MY BOT" value="2" />
                        <Tab className="setting-tab" label="USERS" value="3" />
                        <Tab className="setting-tab" label="API" value="4" />
                        <Tab className="setting-tab" label="ALGORITHME" value="5" />
                        <Tab className="setting-tab" label="SECURITY" value="6" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <NotificationSettings />
                </TabPanel>
                <TabPanel value="2">
                    <BotSettings />
                </TabPanel>
                <TabPanel value="3">
                    <UserSettings />
                </TabPanel>
                <TabPanel value="4">
                    <ApiSettings />
                </TabPanel>
                <TabPanel value="5">
                    <AlgorithmSettings />
                </TabPanel>
                <TabPanel value="6">
                    <SecuritySettings />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx: AppContext) => {
    await initializeUser(ctx, store)
})

export default Settings