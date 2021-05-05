import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Pressable } from 'react-native';
import Entypo from "@expo/vector-icons/Entypo";
import StyleS from '../style/style';

export default function Gameboard() {

    const START = 'plus';
    const MISS = 'cross';
    const HIT = 'circle';
    
let initialBoard = [

START, START, START, START, START,
START, START, START, START, START,
START, START, START, START, START,
START, START, START, START, START,
START, START, START, START, START

];

const [bombs, setBombs] = useState(15);
const [board, setBoard] = useState(initialBoard);
const [shipsLeft, setShipsLeft] = useState(3);
const [hits, setHits] = useState(0);
const [isToggleOn,setToggleOn] = useState(true);
const [ships, setShips] = useState([]);
const [status, setStatus] = useState("Game is not started");
const [time, setTime] = useState(0);
const timerRef = useRef();


function startGame(){
    randomShips();
    start();
    setStatus("Game is started...");
}


function start() {
        const id = setInterval(() => {
            setTime(time => time + 1);     
        }, 1000);
        timerRef.current = id;
    }
    
function stop() {
        clearInterval(timerRef.current);
    }

function drawItem(number) {
        if(status != "Game is started..."){
            setStatus("Click the start button ...");
        }
        else{      
            if(board[number] === START) {
                setBombs(bombs -1);  
                console.log(number);
                if(ships.includes(number) == 1) { 
                console.log("Hit!");
                board[number] = HIT;
                setShipsLeft
            (shipsLeft -1);
                setHits(hits +1);
            }
            else{
                board[number] = MISS;
            }
        }    
    }  
}

useEffect(() => { 
    winGame();
}, [time,shipsLeft,bombs,hits])


function randomShips() {
        for(let i=0; i< 3; i++){
        let randomShip = Math.floor(Math.random() * initialBoard.length);
            if (ships.includes(randomShip) == true) {
            i--;
        }
        else {
          ships.push(randomShip);
          console.log(ships);
        }
      }
    }

function winGame() {
            if (shipsLeft == 0){
                setStatus("All ships are sinked.");
                stop();
            }
            if (bombs == 0) {
                setStatus("Game over. Ships still up");
                stop();
            }
            if (time == 30) {
                setStatus("Timeout. Ships still up.");
                stop();
            }
    }

    function chooseItemColor(number) {
        if (board[number] === MISS) {
            return "#FF3031"
        }
        else if (board[number] === HIT) {
            return "#45CE30"
        }
        else {
            return "#74B9FF"
        }
    }

function handleClick(){
        setToggleOn(!isToggleOn);
        if(isToggleOn){
            startGame();
        }else{
            resetGame();
        }
    }


function resetGame() {
        stop();
        setTime(0);
        setStatus("Game has been reset.");
        setShipsLeft
    (3);
        setBombs(15);
        setHits(0);
        setBoard(initialBoard);
        setShips([]);
}




return (
    <View style={StyleS.gameboard}>
            
            <View style={StyleS.flex}>
                <Pressable key={0} style={StyleS.row} onPress={() => drawItem(0)}>
                    <Entypo key={0} name={board[0]} size={28} color={chooseItemColor(0)} />
                </Pressable>
                <Pressable key={1} style={StyleS.row} onPress={() => drawItem(1)}>
                    <Entypo key={1} name={board[1]} size={28} color={chooseItemColor(1)} />
                </Pressable>
                <Pressable key={2} style={StyleS.row} onPress={() => drawItem(2)}>
                    <Entypo key={2} name={board[2]} size={28} color={chooseItemColor(2)} />
                </Pressable>
                <Pressable key={3} style={StyleS.row} onPress={() => drawItem(3)}>
                    <Entypo key={3} name={board[3]} size={28} color={chooseItemColor(3)} />
                </Pressable>
                <Pressable key={4} style={StyleS.row} onPress={() => drawItem(4)}>
                    <Entypo key={4} name={board[4]} size={28} color={chooseItemColor(4)} />
                </Pressable>
            </View>

            <View style={StyleS.flex}>
                <Pressable key={5} style={StyleS.row} onPress={() => drawItem(5)}>
                    <Entypo key={5} name={board[5]} size={28} color={chooseItemColor(5)} />
                </Pressable>
                <Pressable key={6} style={StyleS.row} onPress={() => drawItem(6)}>
                    <Entypo key={6} name={board[6]} size={28} color={chooseItemColor(6)} />
                </Pressable>
                <Pressable key={7} style={StyleS.row} onPress={() => drawItem(7)}>
                    <Entypo key={7} name={board[7]} size={28} color={chooseItemColor(7)} />
                </Pressable>
                <Pressable key={8} style={StyleS.row} onPress={() => drawItem(8)}>
                    <Entypo key={8} name={board[8]} size={28} color={chooseItemColor(8)} />
                </Pressable>
                <Pressable key={9} style={StyleS.row} onPress={() => drawItem(9)}>
                    <Entypo key={9} name={board[9]} size={28} color={chooseItemColor(9)} />
                </Pressable>
            </View>

            <View style={StyleS.flex}>
                <Pressable key={10} style={StyleS.row} onPress={() => drawItem(10)}>
                    <Entypo key={10} name={board[10]} size={28} color={chooseItemColor(10)} />
                </Pressable>
                <Pressable key={11} style={StyleS.row} onPress={() => drawItem(11)}>
                    <Entypo key={11} name={board[11]} size={28} color={chooseItemColor(11)} />
                </Pressable>
                <Pressable key={12} style={StyleS.row} onPress={() => drawItem(12)}>
                    <Entypo key={12} name={board[12]} size={28} color={chooseItemColor(12)} />
                </Pressable>
                <Pressable key={13} style={StyleS.row} onPress={() => drawItem(13)}>
                    <Entypo key={13} name={board[13]} size={28} color={chooseItemColor(13)} />
                </Pressable>
                <Pressable key={14} style={StyleS.row} onPress={() => drawItem(14)}>
                    <Entypo key={14} name={board[14]} size={28} color={chooseItemColor(14)} />
                </Pressable>
            </View>

            <View style={StyleS.flex}>
                <Pressable key={15} style={StyleS.row} onPress={() => drawItem(15)}>
                    <Entypo key={15} name={board[15]} size={28} color={chooseItemColor(15)} />
                </Pressable>
                <Pressable key={16} style={StyleS.row} onPress={() => drawItem(16)}>
                    <Entypo key={16} name={board[16]} size={28} color={chooseItemColor(16)} />
                </Pressable>
                <Pressable key={17} style={StyleS.row} onPress={() => drawItem(17)}>
                    <Entypo key={17} name={board[17]} size={28} color={chooseItemColor(17)} />
                </Pressable>
                <Pressable key={18} style={StyleS.row} onPress={() => drawItem(18)}>
                    <Entypo key={18} name={board[18]} size={28} color={chooseItemColor(18)} />
                </Pressable>
                <Pressable key={19} style={StyleS.row} onPress={() => drawItem(19)}>
                    <Entypo key={19} name={board[19]} size={28} color={chooseItemColor(19)} />
                </Pressable>
            </View>

            <View style={StyleS.flex}>
                <Pressable key={20} style={StyleS.row} onPress={() => drawItem(20)}>
                    <Entypo key={20} name={board[20]} size={28} color={chooseItemColor(20)} />
                </Pressable>
                <Pressable key={21} style={StyleS.row} onPress={() => drawItem(21)}>
                    <Entypo key={21} name={board[21]} size={28} color={chooseItemColor(21)} />
                </Pressable>
                <Pressable key={22} style={StyleS.row} onPress={() => drawItem(22)}>
                    <Entypo key={22} name={board[22]} size={28} color={chooseItemColor(22)} />
                </Pressable>
                <Pressable key={23} style={StyleS.row} onPress={() => drawItem(23)}>
                    <Entypo key={23} name={board[23]} size={28} color={chooseItemColor(23)} />
                </Pressable>
                <Pressable key={24} style={StyleS.row} onPress={() => drawItem(24)}>
                    <Entypo key={24} name={board[24]} size={28} color={chooseItemColor(24)} />
                </Pressable>
            </View>

            <Pressable style={StyleS.button} onPress={() => handleClick()}>
                <Text style={StyleS.buttonText}>{isToggleOn ? "Start game" : "New game"}</Text>
            </Pressable>

            <Text style={StyleS.gameinfo}>Hits: {hits} Bombs: {bombs} Ships: {shipsLeft}</Text>
            <Text style={StyleS.gameinfo}>Time: {time} </Text>
            <Text style={StyleS.gameinfo}>Status: {status}</Text>

        </View>
    )
}
