import style from "../3_Exo_Map/Exo3.module.css";
import { FilmCard } from "./FilmCard";

export const Exo3Component = () => {

    const films = [
        {
            id: 1,
            title: "50 Nuances de Grey",
            directors: ["Sam Taylor-Johnson"],
            year: 2015,
            image: 'https://static.fnac-static.com/multimedia/Images/FR/NR/52/39/63/6502738/1507-1/tsp20150116120342/50-nuances-de-Grey-Fifty-Shades-of-Grey-.jpg',
            rating: 5
        }, 
        {
            id: 2,
            title: "Zootopie 2",
            directors: ["Jared Bush" , "Byron Howard"],
            year: 2026,
            image: 'https://patiodivinopolis.com.br/wp-content/uploads/2025/11/nest_instagram_teaser2_poster_brazil_75c497e5.jpeg',
            rating: 4
        }, 
        {
            id: 3,
            title: "KPop Demon Hunster",
            directors: ["Maggie Kang", "Chris Appelhans"],
            year: 2025,
            image: 'https://m.media-amazon.com/images/I/61iCuZDXX+L._AC_SL1143_.jpg',
            rating: 5
        }
    ]

    return (
        <div className={style.filmContainer}>
            {films.map( film => (<FilmCard key={film.id} film={film}/>))}
        </div>
    )
}