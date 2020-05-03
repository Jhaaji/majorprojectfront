import React from 'react'
//  import btn_type.c from '../user/btn_type'
import  { Component } from 'react';

class complaint_type extends Component {
    constructor() {
      super();
      
      this.state = {
        showMenu: false,
      };
      
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }
    water = () => {
        this.props.history.push('/Signin')
      }
      electricity = () => {
        this.props.history.push('/Signin')
      }
    
    showMenu(event) {
      event.preventDefault();
      
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }
    
    closeMenu(event) {
      
    //   if (!this.dropdownMenu.contains(event.target)) {
        
    //     this.setState({ showMenu: false }, () => {
    //       document.removeEventListener('click', this.closeMenu);
    //     });  
        
    //   }
    }
  
    render() {
      return (
        <div>
          <button  className="btn btn-raised btn-primary" onClick={this.showMenu}>
           click here to register complain
          </button>
          
          {
            this.state.showMenu
              ? (
                <div
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <button className="btn btn-raised btn-primary" onClick={this.water}> water complaint </button>
                  <button className="btn btn-raised btn-primary" onClick={this.electricity}> electricity complaint </button>
                 
                </div>
              )
              : (
                null
              )
          }
        </div>
      );
    }
  }
export default complaint_type;