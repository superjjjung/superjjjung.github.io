import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
    SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SideBarElements';

const Sidebar= () => {  
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu >
                    <SidebarLink to='howitworks'>How It Works</SidebarLink>
                    <SidebarLink to='getstarted'>Get Started</SidebarLink>
                    <SidebarLink to='signup'>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'> Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;