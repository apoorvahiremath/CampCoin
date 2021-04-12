import React from 'react';
import { Menu } from 'semantic-ui-react'
import {Link} from '../routes'; 

export default () => {
    return (
        <Menu style={{backgroundColor: '#37A7E0', marginLeft: -2, marginRight: -2}}  
        className="shadow mb-4 text-left text-white header">
             <Link route="/">
                <a className="item">
                <h3 className="col-8" style={{fontWeight: 'bold !important', textShadow: '1px 1px 3px white', color: 'white'}}><span style={{ opacity: 0.7 }}>CAMP</span>COIN</h3>
                </a>  
             </Link>
             
            <Menu.Menu position='right'> 
                    <small className="item"  style={{color: 'white'}}>
                        Available on - <b>Rinkeby Network</b> 
                    </small>  
                 
            </Menu.Menu>
        </Menu>
    )
}