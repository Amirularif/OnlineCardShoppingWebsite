import React from 'react';

const Totalpriceheader= "Total Cost :";
function TotalPrice({ totalPrice }) {
  return <div>{Totalpriceheader}  ${totalPrice}</div>;
}

export default TotalPrice;