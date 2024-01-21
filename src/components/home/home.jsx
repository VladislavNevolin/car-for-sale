import React from 'react';
import { CartItem } from '../cart-item/CartItem';
import styles from './Home.module.scss';
import {cars as carsData} from '../../storage/storage';
import CreateCarForm from '../create-car-form/CreateCarForm';

function Home() {
  // const filteredCars = React.useMemo(() => cars.filter(car => car.price > 120000),[] )
  const [cars, setCars] = React.useState(carsData)
  return (
    <div className={styles.Home}>
      <h1>Car for Life</h1>
      <CreateCarForm setCars={setCars}/>
      <div>
        {cars.length ? (cars.map((car) => (
          <CartItem key={car.id} car={car}/>
        ))): <div> there are no any cars</div>}

      </div>
    </div>
  );
}

export default Home;