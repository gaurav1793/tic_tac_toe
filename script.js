document.addEventListener('DOMContentLoaded',()=>{
    let div = document.getElementById('outer');
    let chance = false;
    let arr = Array(9).fill(undefined);

    div.addEventListener('click',(e)=>{
        let cell = e.target
        let cellNumber = cell.getAttribute('data-cell');
        if(cell.getAttribute('data-clicked')){
            return ;
        }
        cell.setAttribute('data-clicked','true');
        if(chance){
            cell.textContent='O';
            arr[cellNumber]='O';
            check('O')
        }else{
            cell.textContent='X';
            arr[cellNumber]='X';
            check('X')
        }
        chance=!chance;
    })

    function check(char){
        if(arr[0]==char && arr[1]==char && arr[2]==char){
           restart(char);
           return;
        }
        else if(arr[0]==char && arr[3]==char && arr[6]==char){
            restart(char);
        }
        else if(arr[0]==char && arr[4]==char && arr[8]==char){
            restart(char);
        }
        else if(arr[1]==char && arr[4]==char && arr[7]==char){
            restart(char);
        }
        else if(arr[2]==char && arr[5]==char && arr[8]==char){
            restart(char);
        }
        else if(arr[2]==char && arr[4]==char && arr[6]==char){
            restart(char);
        }
        else if(arr[3]==char && arr[4]==char && arr[5]==char){
            restart(char);
        }
        else if(arr[6]==char && arr[7]==char && arr[8]==char){
            restart(char);
        }
    }

    function restart(char){
        const finish = document.createElement('div');
        finish.classList='finish';
        finish.textContent=`Game Over  ${char} Wins`;
        div.appendChild(finish);
        

        const btn = document.createElement('btn');
        btn.classList='restart';
        btn.textContent='Restart';
        btn.style.position='absolute';
        document.body.appendChild(btn);
        btn.addEventListener('click',()=>{
            window.location.reload();
            return;
        })
    }
})