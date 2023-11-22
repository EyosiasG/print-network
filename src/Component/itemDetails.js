import React from 'react';
import { useParams } from 'react-router-dom';
import RollUpBanner from '../Component/rollup_banner';


const ItemDetails = () => {
    const { itemName } = useParams();
  
    let SelectedItemComponent;
    if (itemName === "Roll Up Banner(Wide Base)") {
      SelectedItemComponent = RollUpBanner;
    } else {
     // SelectedItemComponent = DefaultItem;
    }
  
    console.log('itemName:', itemName);
    console.log('SelectedItemComponent:', SelectedItemComponent);
  
    return (
      <div>
        <SelectedItemComponent />
      </div>
    );
  };

export default ItemDetails
