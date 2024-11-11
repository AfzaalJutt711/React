import { useState } from 'react'
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"
import { InputBox } from './components/index'
console.clear()

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo) //if we have to use useState why this works

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div className="card">
        <InputBox
          label='From'
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          currencyOptions={options}

        />
        <button className="swapBtn" onClick={swap}>swap</button>
        <InputBox
          label='To'
          amount={convertedAmount}
          amountDisable={true}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          currencyOptions={options}

        />
        <button onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
    </>
  )
}

export default App
