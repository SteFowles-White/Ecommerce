import React, { Component } from 'react'
import Home from './Home';
import Mens from './Mens';
import Women from './Womens';
import Kids from './kids';

export default class Content extends Component {
  
//This renders the Content based on the navigation selected
Content = (props) => {
  if(props.page === "Home") {return <Home />}
  else if (props.page === "Mens"){return <Mens />}
  else if (props.page === "Womens"){return <Women />}
  else if (props.page === "Kids"){return <Kids />}
}


  render() {
    return (
      <div>
        {
          this.Content(this.props)
        }

      </div>

    )
  }
}
