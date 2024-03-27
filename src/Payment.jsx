import React from 'react';
import './Payment.css';

export default function Payment() {
  function showLoading(event, button) {
    event.preventDefault(); // Prevent form submission

    button.innerHTML = "Processing Payment...";

    setTimeout(function () {
      button.innerHTML = "Payment completed.";
      alert("Payment successful"); // Display alert after payment completed
    }, 3000); // Change to the desired duration in milliseconds
  }

  return (
    <div>
      <div className="credit-card-form">
        <h2>Credit Card Payment</h2>
        <form>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Card number" />
          </div>
          <div className="form-group">
            <label htmlFor="card-holder">Card Holder</label>
            <input type="text" id="card-holder" placeholder="Card holder's name" />
          </div>
          <div className="form-row">
            <div className="form-group form-column">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" placeholder="MM/YY" />
            </div>
            <div className="form-group form-column">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="CVV" />
            </div>
          </div>
          <button
            type="submit"
            className="click-button"
            onClick={(event) => showLoading(event, event.target)}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}
