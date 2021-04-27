import React, { Component } from 'react';
import $ from 'jquery';

class Nav extends Component{
    divMenu;

    menu = (e) => {
        // jquery를 사용한 style참조
        // this.divMenu.style.display == 'block'로도 사용가능
        if($('#menu').css('display') == 'block'){
            //react object를 사용한 style변경
            this.divMenu.style.display = 'none';
        }
        else{
            // jquery를 사용한 style변경
            $('#menu').css('display', 'block');
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
                            <a href="/SyntaxCompnent">文法参照用(Compnent)</a>
                        </li>
                        <li>
                            <a href="/SyntaxHooks">文法参照用(Hooks)</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}


export default Nav;