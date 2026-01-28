import style from '../4_Exo_UseState1/Exo4.module.css';
import { useState } from 'react';

export const Exo4Component = () => {

    
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Burger Cheese",
            price: 8.50, 
            quantity: 0
        },
        {
            id: 2,
            name: "Burger Chicken",
            price: 11, 
            quantity: 0
        },
        {
            id: 3,
            name: "Burger Triple",
            price: 12.50,
            quantity: 0
        },
        {
            id: 4,
            name: "Petite Frite",
            price: 3.50,
            quantity : 0

        },
        {
            id: 5,
            name: "Moyenne Frite",
            price: 4.50, 
            quantity: 0
        },
        {
            id: 6,
            name: "Grande Frite",
            price: 6,
            quantity: 0
        }
    ])
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);


    const changeQuantity = (id, value) => {

        const newProducts = products.map(product => {
            // Pour chaque produit, on regarde si l'id est égal à celui reçu en param dont on veut changer la quantité
            if (product.id === id) {
                /* Si les id correspondent, on modifie la quantité et on renvoie le produit modifié */

                /* On va vérifier la quantité pour ne pas tomber dans les valeurs négatives */
                if (product.quantity + value >= 0) {
                    product.quantity += value;
                }
                return product;
            }
            else {
                return product; /* Si les id ne correspondent pas, on renvoie le produit tel quel */
            }
        });

        // Dans setProducts, je mets le nouveau tableau
        setProducts(newProducts);

        // Recalcul du total
        // Option 1: boucle

        // let somme = 0;
        // products.forEach(product => {
        //     somme+= product.price * product.quantity
        // })

        // setTotal(somme);


        // Option 2 : Reduce
        const somme = products.reduce((acc, product) => { 
            return acc + product.price * product.quantity 
        }, 0)

        setTotal(somme);

        // Mise à jour du nombre d'éléments dans le panier
        const newCount = products.reduce((acc, product) => { return acc + product.quantity }, 0);
        setCount(newCount);
    }

    return (
        <div className={style.exo4}>

            {products.map((product) => (
                <div className={style.exoContainer} key={product.id}>
                    <p className={style.text}>{product.name}</p>

                    <p className={style.text}>{product.price} €</p>

                    <div className={style.text}>
                        <button disabled={product.quantity === 0} onClick={() => changeQuantity(product.id, -1)}>➖</button>
                        <p>{product.quantity}</p>
                        <button onClick={() => changeQuantity(product.id, 1)}>➕</button>
                    </div>
  
                </div>
                ))}
                
                <div className={style.total}>
                    <h3>Récaptilatif de votre commande :</h3>
                    <div>
                        <p>Nombre d'éléments dans votre panier</p>
                        <p>{count}</p>
                    </div>
                    <div className={style.count}>
                        <p>Coût total :</p>
                        <p>{total.toFixed(2)}</p>
                    </div>
                </div>
        </div>
    )
}