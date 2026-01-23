<details>
    <summary>
        <font size="3"> Voir le sommaire </font>
    </summary>

[TOC]
    
</details>

<hr>

# ⚛️ React
## Introduction

Pour voir les "frameworks" Front-End les plus utilisés : [StateOfJS](https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/).

Les frameworks permettent de créer des [SPA](https://fr.wikipedia.org/wiki/Application_web_monopage) (Single Page Application), des composants réutilisables, des applications mobiles, etc...

React a été créé par **Meta** mais est depuis plusieurs années open-source.
(Angular appartient quant à lui à **Google**, VueJs a été créé par Evan You et est open-source)

Peut être codé en JavaScript (JSX) ou TypeScript (TSX). (VueJS aussi mais Angular n'est qu'en TypeScript)

React est en fait une **librairie** de composants. À nous d'ajouter toutes les autres librairies dont nous aurons besoin pour nos projets (router, gestion de formulaires, gestion de states etc).

## Créer un projet React

### Créer le projet

Dans le dossier de votre choix, tapez la commande suivante :
```
npm create vite@latest
```
> Vous seront posées plusieurs questions : 
> * Nom du projet (pas de majuscules, caractères spéciaux ni espaces)
> * Choix du Framework : React
> * Choix du langage : JavaScript
> * Tout le reste : choix par défaut

### Architecture de base d'un projet React 

#### Racine du projet

Un dossier avec le nom de votre projet vient de se créer avec l'architecture suivante :

📁 node_modules\
📁 public\
📁 src\
📄 .gitignore\
📄 index.html\
📄 package-lock.json\
📄 package.json\
📄 vite.config.js

> Description des dossiers/fichiers :
> * **node_modules** → c'est le dossier où se trouve les dépendances du projet récupérées via le package.json et les commandes pour lancer le projet.
> * **public** → c'est un dossier qui rend accessible les fichiers. On s'en sert pour mettre les media (images, vidéos, sons) à l'intérieur.
> * **src** → le dossier source, c'est le dossier où se trouve notre application, c'est là qu'on va majoritairement travailler.
> * **.gitignore** → pour pas mettre le node_modules sur git 😉
> * **index.html** → le point d'entrée de votre projet. C'est cette page html qui se lance quand on démarre le projet.
> * **package-lock.json & package.json** → Les fichiers où on trouve les dépendances du projet pour les installer automatiquement quand on fait _npm install_. C'est aussi dans le package.json qu'on trouve les commandes pour démarrer le projet.
> * **vite.config.js** → La configuration de vite, l'outil de build, qui nous sert à avoir un serveur local sur notre machine

#### Zoom sur le dossier src

Dans le dossier src, on a :

📁 assets\
📄 App.css\
📄 App.jsx\
📄 index.css\
📄 main.jsx

> **assets** → dossier de médias propres à l'application

> Dans le fichier _index.html_, on retrouve un script qui permet de charger le fichier **main.jsx**.\
Ce fichier _main.jsx_ va récupérer grâce à getElementById la div qui possède l'id **root** dans le fichier index.html et charge à l'intérieur, le composant **App.jsx**.\
C'est aussi ce fichier qui charge le fichier **index.css** qui est le style global à toute l'application.

> Dans le fichier **App.jsx** se trouve notre premier composant. Un composant est une fonction qui renvoie du JSX (un mélange d'HTML et de JS).

> Le fichier _App.css_ est le fichier de style prévu pour le composant App.jsx.

## Lancer notre projet React en local

Pour lancer votre projet React, vous devrez être dans le dossier de votre projet, et vous devrez taper :
```
npm run dev
```

Une url apparait dans la console, si vous faites CTRL + Click dessus, ça ouvre le lien.

Une fois que votre serveur local est lancé, dès que vous ferez une modification (sauvegardée), le projet recompilera tout seul et vous verrez votre modification apparaître sur le site.

## Créer un composant

Un composant React est une fonction qui renvoie du JSX.

```jsx
export const NomComposant = () => {

    return (
        <>
            Notre premier composant 👍🏻
        </>
    );
}
```
Il sera **impératif** de toujours nommer son composant avec une Majuscule au début pour le différencier des balises html existantes.

### Le paramètre d'entrée : les props 

Notre composant peut **recevoir** des informations envoyées lors de son utilisation.
Pour cela, lors du l'utilisation, nous devrons écrire :
```jsx
    <NomComposant nomProp1="uneChaine" nomProp2={42} />
```

Dans le composant, nous allons récupérer dans les paramètres du composant, un **objet props**, dans lequel se trouvera tout ce qui a été envoyé précédemment.
```jsx
    export const NomComposant = (props) => {
        // Pour extraire ce qu'on veut des props
        // Pour mettre une valeur par défaut à notre prop, on lui assigne une valeur avec un =
        const { nomProp1, nomProp2 = 0 } = props;

        return (
            <>
                <p> Pour afficher la valeur d'une prop : { nomProp1 }</p>
            </>
        )
    }
```

## Style du composant

Pour appliquer du style à notre composant, nous allons voir 2 méthodes :
* Soit via un fichier de css **classique**\
_Dans le css :_
    ```css
    .nomClasse {}
    ```
    _Dans le composant :_
    ```js
    import './cheminVersFichierCSS';

    export const nomComposant = () => {
        return (
            <>
                <p className="nomClasse">Du texte</p>
            </>
        )
    }
    ```

* Soit via un **module** css. L'avantage est que le module va créer un nom unique pour nos classes et donc empêcher tout conflit si une autre personne utilise le même nom de classe dans le projet.\
_Dans le module.css :_
    ```css
    .nomClasse {}
    ```
    _Dans le composant :_
    ```js
    import style from './cheminVersModuleCSS';

    export const NomComposant = () => {
        return (
            <>
                <p className={style.nomClasse}>Du text</p>
            </>
        )
    }
    ```
    Dans l'inspecteur, nous pourrons voir que ce paragraphe possède un nom de classe qui ressemble à _nomClasse_182a58.

## Rendu conditionnel

Il y a plusieurs façons de faire du rendu conditionnel. Chaque façon est propre à une utilisation.

* Le **if** n'est utilisable qu'en dehors du rendu (return ()). Il sert donc à générer un rendu différent en fonction de notre condition.\
_exemple :_
    ```jsx
        export const NomComposant = (props) => {
            const { isError } = props;

            if(isError){
                return (
                    <> 
                        Une erreur est survenue 🤖
                    </>
                )
            }

            return (
                <> 
                    Pas d'erreur, tout roule 🛞
                </>
            )
        }
    ```
* La **ternaire**, qu'on peut faire directement dans le rendu (pour appliquer une classe ou l'autre) (ou pour afficher un contenu ou l'autre)
    ```jsx
    import style from './NomComposant.module.css';

    export const NomComposant = (props) => {
        const { color } = props;

        return (
            <div className={ (color === 'rose') ? style.pink : style.black }>

                <p>Chanson du jour : { 
                    (color === 'rose') ?
                    <span>Je vois la vie en roooooooooseuuuuuh</span> : 
                    <span>Noir c'est noiiiir, il n'y a plus d'espoir oohoooooh </span>
                     } </p>

            </div>
        )
    }
    ```
* L'opérateur **OU ||**. Pour afficher le contenu d'une variable si non null et non undefined ou une autre valeur.
    ```jsx
    export const NomComposant = (props) => {
        const {city, population} = props;

        return (
            <div> 
                <p>Ville : { city } </p>
                <p>Nombre d'habitants : { population ||'Donnée inconnue' } </p>
            </div>
        )
    }
    ```
* L'opérateur **ET &&**. Pour afficher quelque chose (ou appliquer une classe) si la condition est respectée.
    ```jsx
    export const NomComposant = (props) => {
        const {quote, author, imageAuthor} = props;

        return (
            <div> 
                <q>{quote}</q>
                <p>{author}</p>
                { imageAuthor && <img src={imageAuthor} /> }
                {/* n'affichera l'image que si on a reçu une image */}
            </div>
        )
    }
    ```