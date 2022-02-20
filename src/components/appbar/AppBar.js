 import React from 'react'
 
import {IoEllipsisVertical, IoMailOutline, IoNotificationsOutline, IoPersonOutline} from "react-icons/io5"
 

 import {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems} from './styles'





 function AppBar  (props){
     return( 
         <AppBarStyles>
            <AppBarItems>
                <AppBarItem>branding</AppBarItem>
                <AppBarItemGroup>
                    <span><IoMailOutline/></span>
                    <span><IoNotificationsOutline/></span>
                    <img src="https://avatars.dicebear.com/api/initials/8K.svg?r=50&scale=106" width="48" alt="" /> 
                    <span><IoEllipsisVertical/></span>
                    </AppBarItemGroup>
            </AppBarItems>
         </AppBarStyles>
     )
 }
 
 export default AppBar 
 