const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

/* btn.addEventListener('click',()=>{
    if(search.className.includes('active')){
        search.classList.remove('active');
    }else{
        search.classList.add('active');
    }
}) */

btn.addEventListener('click',()=>{
    search.classList.toggle('active')
})