import React, { Component } from 'react'



class ShoppingBasket extends Component {
    state ={
        itemList: [
          {
            name: "ste",
            cost: 43,
            id: 0
          }
        ]
    };

// toggle the busket list to show user what they have bought
listOfItems = () => {
  const element = document.getElementById("bucketItems");
  if (element.style.display === "none")
   {return element.style.display = "block";
   }else{ return element.style.display = "none";}
}

  render() {
    return (
        <div>
          <i onClick={this.listOfItems} id="basket" className="fa fa-shopping-cart nopadding"></i>
          <ul id = "bucketItems">
          {this.state.itemList.map(item => {
            return(
                <li key={item.id}>
                  <section>{item.name}</section>
                  <section>${item.cost}</section>
                </li>
              )
            }      
          )}
          </ul>
        </div>
    );
  }
}


export default ShoppingBasket ;