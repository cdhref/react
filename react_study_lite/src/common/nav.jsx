import React, { Component } from 'react';

class Nav extends Component{
    divMenu;

    menu = (e) => {
        if(this.divMenu.style.display === 'block'){
            this.divMenu.style.display = 'none';
        }
        else{
            this.divMenu.style.display = 'block';
        }
    }

    render() {
        return (
            <>
                <div className="navy-nav">
                    <div className="nav-title">
                        <h3>React Study</h3>
                    </div>
                    <div className="btn-menu">
                        <a onClick={ this.menu }>三</a>
                    </div>
                </div>
                <div ref={(c)=>{this.divMenu = c}} id="menu" className="menu">
                    <ul>
                        <li>
                            <a href="/wordPlay">wordPlay</a>
                        </li>
                        <li>
                            <a href="/numBaseBall">numBaseBall</a>
                        </li>
                        <li>
                            <a href="/lotto">lotto</a>
                        </li>
                        <li>
                            <a href="/reactionSpeedCheck">reactionSpeedCheck</a>
                        </li>
                        <li>
                            <a href="/mineSearch">mineSearch</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}


export default Nav;