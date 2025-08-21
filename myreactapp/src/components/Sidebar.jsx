import React, {Compoenet}  from 'react'
import {Link} from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
            <div >
                <ul className='sidebar'>
                    <li> <link to="/"> About</link></li>
                    <li> <link to="/Login"> Login</link></li>
                    <li><link to="/Profile"> Profile</link></li>
                    <li><link to="/Register"> Register</link></li>
                    <li><link to="/Contact us">Contact us</link></li>
              
                  </ul>
            </div>
        )
    }
}