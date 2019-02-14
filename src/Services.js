import React, { Component } from 'react';
import '../src/Services.css';

class Services extends Component {
    render() {
        return (
          <div className="services">
            <h3>Services </h3>
            <h2>What We Offer</h2>
            <div className="row">
              <div>
                <span>
                  <i class="fas fa-mobile-alt" />
                </span>
                <h4>Responsive</h4>
                <p>Looks Great on Any Screen Size</p>
              </div>
              <div>
                <span>
                  <i class="fas fa-pen-nib" />
                </span>
                <h4>Redesigned</h4>
                <p>Freshely Redesigned By Latest Technologies</p>
              </div>
              <div>
                <span>
                  <i class="far fa-thumbs-up" />
                </span>
                <h4>Favourite</h4>
                <p>
                  Millions of Users <i class="fas fa-heart"></i> This Portfolio
                </p>
              </div>
              <div>
                <span>
                  <i class="fas fa-question" />
                </span>
                <h4>Question</h4>
                <p>Drop your Questions Here</p>
              </div>
            </div>
          </div>
        );
    }
}
export default Services ; 