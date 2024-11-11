import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency = "usd",
    currencyOptions = [],
    currencyDisable = false,
    amountDisable = false,
    
}) {

    return (
        <div className="inputBox">
            <div className="amount">
                <label htmlFor="From">{label}</label>
                <input
                    type="number"
                    placeholder={amount}
                    disabled={amountDisable}
                    value = {amount}
                    onChange = {(e)=> onAmountChange && onAmountChange(Number(e.target.value)) }
                />
            </div>
            <div className="currency">
                <label htmlFor="Currency Type">Currency Type</label>
                <select 
                name="\" 
                id=""
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}   
                >
                    {currencyOptions.map((currency) =>(
                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    ))}
                    
                </select>
            </div>
        </div>
    )
}

export default InputBox
