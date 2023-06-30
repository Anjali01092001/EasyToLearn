const rows=[...document.querySelectorAll('.row')];
const nxtbtn=[...document.querySelectorAll('.left')];
const prebtn=[...document.querySelectorAll('.right')];

rows.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;
    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth;
    })
    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth;
    })
})
