import styled from 'styled-components'
import GameDiv from '../../../components/gameDiv'

const MemoryCard = styled.div`
    height:80px;
    width:40px;
    margin:10px;
    background-color:#fff;

`
const BeginButton = styled.button`
    display:flex;
    height:20px;
    width:60px;
    justify-content:center;
    align-items:center;
    position:relative;
`



function MemoryGame(){
    return (
        <GameDiv>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            
            

        <BeginButton onClick={
            function(event){
                event.preventDefault()
            }
        }>Jogar</BeginButton>
        </GameDiv>
    )

}

export default MemoryGame