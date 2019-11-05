import React from 'react';
import Hotel from './Hotel';

class HotelList extends React.Component {

  render() {
    return (
      <>
        <h2>Hotel list</h2>
        <ul>
          <li>
            <Hotel
              name="Hotel des Vosges"
              imgSrc="https://s-ec.bstatic.com/xdata/images/hotel/square600/13072445.webp?k=9c12bda1f8c02f76fa0ea4a6ea00e6f7074753025bc0c187f7b6fc3076343401&o="
              descript="Located in the 20th district of Paris, just 700 metres from Père Lachaise Cemetery, Hotel des Vosges offers a 24-hour reception and free Wi-Fi access."
            />
          </li>
          <li>
            <Hotel
              name="We Loft"
              imgSrc="https://t-ec.bstatic.com/xdata/images/hotel/square600/96299078.webp?k=1ab1cd2966b00e21df37c28b1fed925f86da5a8834bacf06509397d26ffa8f26&o="
              descript="We Loft is a property set in Paris near Opéra Bastille. This bed and breakfast also has free WiFi."
            />
          </li>
          <li>
            <Hotel
              name="We Loft"
              imgSrc="https://t-ec.bstatic.com/xdata/images/hotel/square600/45324268.webp?k=deb5c9732389dbe8e7411602b3b83cbb32d4c57b8c7842621d7d085fb2a4c9db&o="
              descript="Located 500 metres from Père Lachaise Cemetery and 300 metres from Place Gambetta, Hipotel Gambetta offers en suite rooms with a flat-screen TV and a private bathroom."
            />
          </li>
        </ul>
      </>
    );
  }

}

export default HotelList;