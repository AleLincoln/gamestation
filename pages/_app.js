import '../styles/globals.css'
import Image from 'next/image'
import styled from 'styled-components'
import db from '../components/DB/db.json'
import Link from 'next/link'
import MemoryGame from '../components/games/memoryGame'
import { useState } from 'react'


const GameArea = styled.div`
  background-color: #001655;
  height:16.25em;
  width:18.75em;
  position:absolute;
  z-index:1;
  border-radius:5%;
  margin-top:-30px;


  & h1 {
  font-size: 24px;
  text-align:center;
  
  font-family: Helvetica, sans-serif;
  background: -webkit-linear-gradient(#eacd02, #e14831);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight:900;
}
  


`

const GameList = styled.div`
  height:200px;
  display:flex;
  flex-direction:column;
  text-align:center;
`

GameList.Item = styled.button`
  color:#fff;
  font-family:Arial, Helvetica, sans-serif;
  cursor:pointer;
  margin:3px;
  background-color:#001655;

  &:hover{
    background-color:#5880F1
  }
  

`

const GamePlaced = styled.div`
  position:absolute;
  width:800px;
  z-index:2;

`



function MyApp({game}) {

  const [isGameCalled, setIsGameCalled] = useState(false)
  const [gameCalled, setGameCalled] = useState('')



  function showGame(event){
    
    game = event.target.innerHTML
    setIsGameCalled(true)

    if(game === 'Memory Game'){
      setGameCalled(
        game
      )
    }

  }

 return (
   <div className='myApp'>
      
      <GameArea>
        <h1>Game Station</h1>
        
      {<GameList>
          
          {db.gameName.map((item, index) => {
            return (<GameList.Item key={item+index} game={db.gameCaller[index]} onClick={showGame}>
              
                  {item} 
               
               </GameList.Item>)
          })}
        </GameList>}

       
        
      </GameArea>

      
      
      <div className='gameStation'>
        <Image src='/appAssets/ArcadeMachine.png'
          alt='arcade machine'
          width={650}
          height={650}
        />
        
      </div>
      <GamePlaced>
      {isGameCalled && gameCalled === 'Memory Game' && <MemoryGame />}

      </GamePlaced>
      
    </div>
  )

}

export default MyApp
