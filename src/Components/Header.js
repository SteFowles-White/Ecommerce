import React, { Component } from 'react'
import ShoppingBasket from './ShoppingBasket'
import logo from '../img/logo.png'

class Header extends Component {


  
  render() {
    return (

         <nav className="col-sm-12 navbar navbar-expand-sm">
            <ul  onClick={this.props.handleClick} id="nav-menu" className="navbar-nav">
               <li id = {this.props.pages[0].id} className="nav-item">
                  <img className = "logo" href={this.props.pages[0].id} src= {logo}  alt ="Addidas"/>
               </li>
               <li id = {this.props.pages[1].id} className="nav-item">
                  <a className="nav-link" href={this.props.pages[1].id}>Mens</a>
               </li>
               <li id = {this.props.pages[2].id} className="nav-item">
                  <a className="nav-link" href={this.props.pages[2].id}>Womens</a>
               </li>
               <li ids = {this.props.pages[3].id} className="nav-item">
                  <a className="nav-link" href={this.props.pages[3].id}>Kids</a>
               </li>
             </ul>
          <ShoppingBasket />
          </nav>   

      
    )
  }
}

export default Header;
