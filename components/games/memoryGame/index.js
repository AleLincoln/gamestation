import React, { useEffect, useState } from "react";
import styles from '../../../styles/MemoryGame.module.css'
const url = "https://pokeres.bastionbot.org/images/pokemon";

export default function MemoryGame() {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isflippedAllCards, setIsflippedAllCards] = useState(false)
  const [isStartButtonEnable, setIsStartButtonEnable] = useState(true)

  const pokemons = [
    { id: 1, name: "balbasaur" },
    { id: 8, name: "wartotle" },
    { id: 9, name: "blastoise" },
    { id: 6, name: "charizard" },
    { id: 10, name: "outro personagem" },
    { id: 11, name: "outro personagem" },
    { id: 12, name: "outro personagem" }
  ];


  //currently there are 4 pokemons but we need the pair

  const pairOfPokemons = [...pokemons, ...pokemons];

  function flipAllCards(){
    
    setIsflippedAllCards(true)

    setTimeout(() => {
      setIsflippedAllCards(false)
      setIsStartButtonEnable(false)
    }, 1200)
  }
  

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);

    console.log(matched)
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOfPokemons[openedCard[0]];
    const secondMatched = pairOfPokemons[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
        <div className={styles.innerBody}>
            
      <div className={styles.cards}>
        {pairOfPokemons.map((pokemon, index) => {

          //lets flip the card

          let isFlipped = false

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(pokemon.id)) isFlipped = true;
          return (
            <div
              className={`${styles.pokemonCard} ${isFlipped || isflippedAllCards ? styles.flipped : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className={styles.inner}>
                <div className={styles.front}>
                  <img
                    src={`${url}/${pokemon.id}.png`}
                    alt="pokemon-name"
                    width="100"
                  />
                </div>
                <div className={styles.back}></div>
              </div>
            </div>
          );
        })}
        <button className={styles.startButton} disabled={isStartButtonEnable === false}  onClick={flipAllCards}>
                Começar
            </button>
      </div>

    </div>
  );
}