import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import './App';


class App extends React.Component {

state = {
  pages: [{ id: "home"},
          { id: "Mens"},
          { id: "Womens"},
          { id: "Kids"}
        ],
  pageState: {page: "Home"}

}

changePage = (e) => {
  e.preventDefault()
   console.log(e.target);
}

  render() {
    return (
      <div>
      <header className="row nopadding">
        <Header handleClick = {this.changePage} pages = {this.state.pages}/>  
      </header>
      <div id="main-content">
        <Content page={this.state.pageState}/>
      </div>
    </div>
    )
  }
}


export default App;
