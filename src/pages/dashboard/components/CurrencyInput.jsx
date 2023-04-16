import PropTypes from "prop-types";
import "../styles/CurrencyInput.css";
import picture from "../../../assets/images/Currency Converter.png"

function CurrencyInput(props) {
    return (
      <div className="group">
          <input type="text" value={props.amount} onChange={event => props.onAmountChange(event.target.value)}/>
          <img src={picture} alt="Currency" />
          <select value={props.currency} onChange={event => props.onCurrencyChange(event.target.value)}>
              {props.currencies.map((currency => (
              <option value={currency}>{currency}</option>
              )))}
          </select>
      </div>
    );
}

CurrencyInput.prototype = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;