import React, { useState } from 'react';

function DiscountCalculator() {
  // State hooks to store inputs and results
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [savedPrice, setSavedPrice] = useState(null);

  // Calculate function
  const calculateDiscount = () => {
    const original = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (isNaN(original) || isNaN(discount) || original <= 0 || discount < 0) {
      alert('Please enter valid values for original price and discount percentage.');
      return;
    }

    const discountAmount = (original * discount) / 100;
    const finalPrice = original - discountAmount;

    setDiscountedPrice(finalPrice.toFixed(2));
    setSavedPrice(discountAmount.toFixed(2));
  };

  // Reset function
  const resetFields = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
    setDiscountedPrice(null);
    setSavedPrice(null);
  };

  return (
    <div style={{ padding: '20px',  margin: 'auto',maxWidth:'2050px' }}>
      <h1  className='div' style={{color:'brown'}}>Discount Calculator</h1>
      <div style={{ marginBottom: '10px' }}>
        <label className='div3'>
          Original Price: 
          <input
            type="number"
            value={originalPrice} className='form-control'
            onChange={(e) => setOriginalPrice(e.target.value)} placeholder='Enter Amount'
            
            min="0"
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label className='div3'>
          Discount: 
          <input
            type="number"
            value={discountPercentage} className='form-control'
            onChange={(e) => setDiscountPercentage(e.target.value)} placeholder='Enter Discount %'
            
            min="0"
            
          />
          
        </label>
      </div>
      <button className='rounded' onClick={calculateDiscount} style={{ marginRight: '10px' }}>Calculate</button>
      <button className='rounded' onClick={resetFields}>Reset</button>
      
      {discountedPrice !== null && (
        <div className='div4' style={{ marginTop: '20px'}}>
          <p className='div2'>Discounted Price:  ₹ {discountedPrice}</p>
          <p className='div2'>Saved Price:  ₹ {savedPrice}</p>
        </div>
      )}
    </div>
  );
}

export default DiscountCalculator;