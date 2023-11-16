// ** React Imports
import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import VerticalLayout from 'src/@core/layouts/VerticalLayout'

// ** Navigation Imports
import VerticalNavItems from 'src/navigation/vertical'

// ** Component Import
import VerticalAppBarContent from './components/vertical/AppBarContent'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'
import { RootState } from 'src/@core/store/types/global.types';
import { initializeUser } from 'src/@core/serverSideProps';
import { wrapper } from 'src/@core/store';

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()
  const { auth } = useSelector((state: RootState) => state.authentication)
  const router = useRouter()

  useEffect(() => {
    if (!auth && router) {
      router.push('/login')
    }
  }, [auth, router])

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <VerticalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={VerticalNavItems()} // Navigation Items
      // afterVerticalNavMenuContent={UpgradeToProImg}
      verticalAppBarContent={(
        props // AppBar Content
      ) => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
      {/* <UpgradeToProButton /> */}
    </VerticalLayout>
  )
}



export default UserLayout
