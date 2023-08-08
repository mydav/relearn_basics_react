import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [firstCurrency, setFirstCurrency] = React.useState('USD');
  const [secondCurrency, setSecondCurrency] = React.useState('EUR');
  const [firstPrice, setFirstPrice] = React.useState(0);
  const [secondPrice, setSecondPrice] = React.useState(0);
 
  const ratesRef = React.useRef({})

  React.useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
    .then(res => res.json())
    .then(json => {
      ratesRef.current = json.rates;
      onChangeFirstPrice(1);
    })
    .catch(err => {
      console.warm(err);
      alert('Fetching data error')
    });
  }, [])

  const onChangeFirstPrice = React.useCallback(
    value => {
      const price = value / ratesRef.current[firstCurrency];
      const result = price * ratesRef.current[secondCurrency];
      setFirstPrice(value);
      setSecondPrice(result.toFixed(3));
    },
    [firstCurrency, secondCurrency]
  );


  const onChangeSecondPrice = React.useCallback(
    value => {
      const result = (ratesRef.current[firstCurrency] / ratesRef.current[secondCurrency]) * value;
      setFirstPrice(result.toFixed(3));
      setSecondPrice(value);
    },
    [firstCurrency, secondCurrency]
  );
React.useEffect(() => {
  onChangeFirstPrice(firstPrice)
}, [firstCurrency]);

React.useEffect(() => {
  onChangeSecondPrice(secondPrice)
}, [secondCurrency]);

  return (
    <div className="App">
      <Block 
        value={firstPrice} 
        currency={firstCurrency} 
        onChangeCurrency={setFirstCurrency} 
        onChangeValue={onChangeFirstPrice}
      />
      <Block 
        value={secondPrice} 
        currency={secondCurrency} 
        onChangeCurrency={setSecondCurrency} 
        onChangeValue={onChangeSecondPrice}
      />
    </div>
  );
}

export default App;
