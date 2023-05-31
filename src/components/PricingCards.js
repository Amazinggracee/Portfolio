import './PricingCardsStyle.css';

import React from 'react';

const PricingCards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <link to="/contact" className="btn">
            PURCHASE NOW
          </link>
              </div>
              
        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">$ 200</p>
          <p>- 2 days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <link to="/contact" className="btn">
            PURCHASE NOW
          </link>
              </div>
              
        <div className="card">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="btc">$ 300</p>
          <p>- 5 days -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <link to="/contact" className="btn">
            PURCHASE NOW
          </link>
        </div>
      </div>
    </div>
  );
}

export default PricingCards