import { useEffect, useState } from "react"

export const EtreSpecial = () => {
    const [age, setAge] = useState(0);
    const [anniversaires, setAnniversaire] = useState(false);

    // ! useEffect prend en paramètre 2 choses 
    // ! * La fonction a exécuter quand le useEffect est déclenché
    // ! * Les dépendances qui autorisent le useEffect à se déclencher.
    // C'est un tableau et s'il ets vide, rien n'autorise le useEffect a se re-déclenché

    // Si on met une valeur dedans, le useEffect sera déclenché si cette valeur change.
    useEffect(() => {
        setAge(prev => prev + 1);

        console.log("L'être spécial est 'né'");

        return() => {
            console.log("L'être spécial est 'mort'");
        }
    }, [anniversaires]);

  return (
    <div>
        👼 Ma maman elle dit je chuis chpéchial.
        Z'ai {age} ans !

        <button onClick={() => {setAnniversaire(prev => prev + 1)}}>C'est mon zanniversaire !</button>
    </div>
  )
}
