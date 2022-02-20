 import React from 'react'
 
 import {Link} from 'react-router-dom'

 import {NotFoundStyles} from './styles'
 function PageNotFound  (props){
     return( 
         <>
         <NotFoundStyles>
        <ul>
             <li>
                <Link to="/">back to saftey</Link>
             </li>

            
         </ul>
         <header>
             <h1>
               Page Not Found
             </h1>
         </header>
         </NotFoundStyles>
         </>
     )
 }
 
 export default PageNotFound 