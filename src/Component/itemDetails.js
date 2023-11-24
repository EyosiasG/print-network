import React from 'react';
import { useParams } from 'react-router-dom';
import RollUpBanner from './items/rollup_banner';
import BackdropBanner from './items/backdrop_banner';
import Sticker from './items/sticker';
import Panel from './items/panel';

const ItemDetails = () => {
    const { itemName } = useParams();
  
    let SelectedItemComponent;
    if (itemName === "Roll Up Banner(Wide Base)") {
      SelectedItemComponent = RollUpBanner;
    } else if(itemName === "Backdrop Banner") {
      SelectedItemComponent = BackdropBanner;
    }else if(itemName === "Panel"){
      SelectedItemComponent = Panel;
    }else if(itemName === "Sticker"){
      SelectedItemComponent = Sticker
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
