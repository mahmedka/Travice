let btn_top = document.getElementById('btn_top');
window.onscroll = function(){
    if(scrollY >= 400){
        btn_top.style.display='block';
    }else{
        btn_top.style.display='none';
    }
}
btn_top.onclick = () => {
    scroll({
        left:0,
        top:0,
        translate: " 0 -70vh",
    })
};
