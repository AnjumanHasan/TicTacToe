const boxes = Array.from(document.getElementsByClassName('box'));
const gameboard = document.getElementById("gameboard");
const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restart');
const spaces =[];
const O_TEXT ="O";
const X_TEXT = "X";
let currentPlayer= O_TEXT;


console.log(boxes);

const drawBoard =() => {
    boxes.forEach((box, index) =>
    {
let styleString = '';
if(index<3)
{
    styleString+= 'border-bottom: 3px solid var(--colour);';
}
if(index%3===0)
{
    styleString += 'border-right: 3px solid var(--colour);';
}
if(index%3===2)
{
    styleString += 'border-left: 3px solid var(--colour);';  
}
if(index>=6)
{
    styleString+= 'border-top: 3px solid var(--colour);';
}
box.style= styleString;
box.addEventListener('click',boxClicked);

    });

};

function boxClicked(e)
{
   
    const id = e.target.id;
    console.log(id);
    if(!spaces[id])
    {
        spaces[id] = currentPlayer;
        e.target.innerText= currentPlayer;

        if(playerHasWon(currentPlayer))
        {
            playText.innerHTML  =  `${currentPlayer} wins!`;
            return;
        }
        currentPlayer=currentPlayer===O_TEXT? X_TEXT:O_TEXT;
    }
}
const playerHasWon = () =>
{
if(spaces[1]===currentPlayer)
{
    if(spaces[2]===currentPlayer && spaces[3]===currentPlayer)
    
    {
        console.log(`${currentPlayer} wins up top`)
        return true;
    }
    if(spaces[4]===currentPlayer && spaces[7]===currentPlayer)
    {
        console.log(`${currentPlayer} wins through left`);
        return true;
    }
    if(spaces[5]===currentPlayer && spaces[9]===currentPlayer)
    {
        console.log(`${currentPlayer} wins diagonally`);
        return true;
    }
}
else if(spaces[9]===currentPlayer)
{
    if(spaces[8]===currentPlayer && spaces[7]===currentPlayer)
    
    {
        console.log(`${currentPlayer} wins down`)
        return true;
    }
    if(spaces[3]===currentPlayer && spaces[6]===currentPlayer)
    {
        console.log(`${currentPlayer} wins through right`);
        return true;
    }
    
}
else if(spaces[5]===currentPlayer)
{
    if(spaces[4]===currentPlayer && spaces[6]===currentPlayer||spaces[3]===currentPlayer && spaces[7]===currentPlayer)
    
    {
        console.log(`${currentPlayer} wins middle`)
        return true;
    }
    if(spaces[2]===currentPlayer && spaces[8]===currentPlayer)
    {
        console.log(`${currentPlayer} wins middle up`);
        return true;
    }
    
}

};


drawBoard();
const restart = () => {
    spaces.forEach((space, index)=>{
        spaces[index]=null;    
        });
        boxes.forEach(box =>{
            box.innerText='';
        });
        playText.innerText= `Let's Play!`;
        currentPlayer= O_TEXT;
};
restartBtn.addEventListener('click',restart);
restart();
