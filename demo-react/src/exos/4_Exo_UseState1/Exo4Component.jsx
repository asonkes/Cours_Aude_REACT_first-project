import style from '../4_Exo_UseState1/Exo4.module.css';
import { useState } from 'react';

export const Exo4Component = () => {

    
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Burger Cheese",
            price: 8.50, 
            qt: 0
        },
        {
            id: 2,
            name: "Burger Chicken",
            price: 11, 
            qt: 0
        },
        {
            id: 3,
            name: "Burger Triple",
            price: 12.50,
            qt: 0
        },
        {
            id: 4,
            name: "Petite Frite",
            price: 3.50,
            qt : 0

        },
        {
            id: 5,
            name: "Moyenne Frite",
            price: 4.50, 
            qt: 0
        },
        {
            id: 6,
            name: "Grande Frite",
            price: 6,
            qt: 0
        }
    ])
    const [total, setTotal] = useState(0);


    const changeQuantity = (id, value) => {

        const newProducts = products.map(product => {
            if(product.id === id) {
                product.qt += value
                return product
            }else {
                return product
            }
        })

        setProducts(newProducts);

        // let somme = 0;
        // products.forEach(product => {
        //     somme += product.price * product.qt
        // })

        const somme = products.reduce( (acc, product) => acc + product.price * product.qt  , 0) 

        setTotal(somme);

    }

   

    return (
        <div className={style.exo4}>
            {products.map(({id, name, price, qt}) => (
                <div className={style.exo4} key={id}>
                <div>
                    <div className={style.exo4Container}>
                        <p className={style.text}>{name}</p>
                        <p className={style.text}>{price} €</p>
                        </div>
                    </div>
                    <div className={style.text}>
                        <button className={style.count} onClick={() => changeQuantity(id,1)}>+</button>
                        <p>{qt}</p>
                        <button className={style.count} onClick={() => changeQuantity(id,-1)}>-</button>
                    </div>
                </div>
                ))}
                
                <p>Total: {total} €</p>
               
        </div>
    )
}