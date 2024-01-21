import styles from '../home/Home.module.scss';


export const CartItem = ({car}) => {

    return (
        <div className={styles.cars}>
            <div style={{ backgroundImage: `url(${car.image})` }} className={styles.image} />

            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>{new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'narrowSymbol'
                }).format(car.price)}</p>
                <button>Buy now</button>
            </div>
        </div>
    )
}