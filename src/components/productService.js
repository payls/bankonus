import React, { Component } from 'react';
import data from "./data"; 

class Services extends Component {

  constructor(props) {
    super(props)
    // this.state = { rightMenu: false }
    this.state = {
      data,
      prices: []
    }
    this.showRight = this.showRight.bind(this);
  }

  sortAscending = () => {
    const prices = data.map(p => p.premium);
    prices.sort((a, b) => a - b)    
    this.setState({ prices })
    console.log(prices)
  }

  sortDescending = () => {
    const prices = data.map(p => p.premium);
    prices.sort((a, b) => a - b).reverse()
    this.setState({ prices })
    console.log(prices)
  }

  showRight = (e) => {
    e.preventDefault();
    if(e.target.parentElement.classList.contains("bou-benefitCoversHide")) {
      e.target.parentElement.className = "bou-benefitCoversShow"
    } else {
      e.target.parentElement.className = "bou-benefitCoversHide"
    }
  }

  render() {
    return (
      <div className="bou-container">
        <div className="bou-sectionTitle">Products</div>
        <div className="bou-filterWrp">
          <span onClick={this.sortAscending}>&#8593;</span>
          <span onClick={this.sortDescending}>&#8595;</span>
        </div>
        <div className="bou-productWrp">
          {data.map((data, id) =>
            <div className="bou-productItem">
              <div className="bou-productInnerItemWrp">
                <div className="bou-productTitle">{data.provider["en-ae"].product_name}</div>
                <div className="bou-productSubTitle">{data.currency} {data.premium}</div>
                <div className="bou-description">{data.provider["en-ae"].description}</div>
                <div className="bou-benefitCoversHide">
                  <div className="bou-productSubTitle bou-cursorPt" data-attr={id} onClick={ e => this.showRight(e)}>Benefits 
                    <span className="bou-arrow down"></span>
                  </div>
                  <div className="bou-benefitCovers">
                    {data.covers.map(function(item){
                      return <div>{item.name}</div>;
                    })}
                  </div>
                </div>
                <div className="bou-termLink">
                  <a href='{data.provider["en-ae"].terms_conditions_url}'>*T&C&apos;s</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
} 
export default Services;