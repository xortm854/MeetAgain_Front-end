import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
  render(){
    return(
        <div class = "head">
            <header>
                <ul id = {"right_select"}>
                <li id="to_home">
                    <a href="https://tfs247.tistory.com" target="_blank">
                        <button class="favorite styled" type="button">로그아웃</button>
                    </a>
                </li>
                </ul>
                <hgroup>
                    <h1 class = "title"><a href="index.html" >다시모임</a></h1>
                </hgroup>
        </header>
      </div>
    );
  }
}

export default Header;
