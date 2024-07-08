import { useState } from 'react';

export default function TipCalculator() {
  const [bill, setBill] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className='section calculator'>
      <h2>Calculate the Tip</h2>
      <div>
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
          How did you like the service?
        </SelectPercentage>
        <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
          How did your friend like the service?
        </SelectPercentage>
        {bill > 0 && (
          <div className='calculator-output'>
            <Output bill={bill} tip={tip} />
            <Reset onReset={handleReset} />
          </div>
        )}
      </div>
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className='section-content'>
      <label>
        {' '}
        How much is the bill?
        <input
          name='bill'
          type='text'
          placeholder='Bill value'
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div className='section-content'>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return (
    <div className=' actions'>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
