import { HeaderIcons, HeaderIcons_2 } from './HeaderIcons';
import { HeaderLogo, HeaderLogo_2, HeaderLogo_3, HeaderLogo_4, HeaderLogo_5 } from './HeaderLogo';
import { HeaderNavbar, HeaderNavbar_2, HeaderNavbar_3, HeaderNavbar_4, HeaderNavbar_5 } from './HeaderNavbar';
import { HeaderSearch_5 } from './HeaderSearch';

export const HeaderLayout = () => {
    return (
        <>
            <header className='header-1'>
                <HeaderLogo/>
                <HeaderNavbar/>
                <HeaderIcons/>
            </header>
            <br/>

            <header className='header-2'>
                <HeaderLogo_2/>
                <HeaderIcons_2/>
            </header>
            <br/>

            <header className='header-3'>
                <div className='logo-nav'>
                    <HeaderLogo_3/>
                    <HeaderNavbar_3/>
                </div>
                <HeaderIcons/>
            </header>
            <br/>
            
            <header className='header-4'>
                <HeaderLogo_4/>
                <HeaderNavbar_4/>
            </header>
            <br/>
            
            <header className='header-5'>
                <div className='logo-nav'>
                    <HeaderLogo_5/>
                    <HeaderNavbar_5/>
                </div>
                <HeaderSearch_5/>
            </header>

            <header className='header-6'>
                <HeaderLogo_5/>
                <HeaderNavbar_5/>
                <HeaderSearch_5/>
            </header>
        </>
        


    )
}
