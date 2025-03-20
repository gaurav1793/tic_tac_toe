document.addEventListener('DOMContentLoaded',()=>{
    let div = document.getElementById('outer');
    let chance = false;

    div.addEventListener('click',(e)=>{
        let cell = e.target
        let cellNumber = cell.getAttribute('data-cell');
        if(cell.getAttribute('data-clicked')){
            return ;
        }
        cell.setAttribute('data-clicked','true');
        if(chance){
            cell.textContent='O';
        }else{
            cell.textContent='X';
        }
        chance=!chance;
    })
})