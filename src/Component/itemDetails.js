import React from 'react';
import { useParams } from 'react-router-dom';
import RollUpBanner from '../Component/rollup_banner';
import Pen from '../Component/pen';


const ItemDetails = () => {
    const { itemName } = useParams();
  
    let SelectedItemComponent;
    if (itemName === "Pen)") {
      SelectedItemComponent = Pen;
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
