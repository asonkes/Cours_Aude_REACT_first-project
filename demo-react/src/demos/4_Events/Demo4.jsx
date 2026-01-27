import style from "./Demo4.module.css";

export const Demo4 = () => {

    let count = 0;

    // Notre 'count' augmente et diminue vraiment, il va falloir utiliser 'useState' (hook de React)
    const increment = () => {
        count++;
        console.log(count);
    }

    const decrement = () => {
        count--;
        console.log(count);
    }

    return (
        <div>
            <h2>Les events :</h2>

            <div className={style.demo4}>
                <button onClick={decrement}>-</button>
                <button>{count}</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}