import '../styles/globals.css'
import Image from 'next/image'
import styled from 'styled-components'
import db from '../components/DB/db.json'
import Link from 'next/link'

const GameArea = styled.div`
  background-color: #001655;
  height:300px;
  width:300px;
  position:absolute;
  z-index:1;
  border-radius:5%;


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
  padding-top:20px;
  display:flex;
  flex-direction:column;
  text-align:center;
`

GameList.Item = styled.a`
  color:#fff;
  font-family:Arial, Helvetica, sans-serif;
  cursor:pointer;
  margin:3px;

  &:hover{
    background-color:#5880F1
  }
  

`


function MyApp() {
  return (
    <div className='myApp'>
      <GameArea>
        <h1>Game Station</h1>
        <GameList>
          {db.gameName.map((item, index) => {
            return (<GameList.Item key={item+index}>
              
                  {item} 
               
               </GameList.Item>)
          })}
        </GameList>
      </GameArea>
      <div className='gameStation'>
        <Image src='/appAssets/ArcadeMachine.png'
          alt='arcade machine'
          width={650}
          height={650}
        />
        
      </div>
    </div>
  )
}

export default MyApp
