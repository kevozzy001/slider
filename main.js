const thisBtn = document.querySelector('.this-button')
const previous = document.querySelector('.left')
const next = document.querySelector('.right')
const sliders = document.querySelectorAll('.checked')
const description = document.querySelectorAll('.description')
const checked = document.querySelectorAll('.checked')
const hiddenText = document.querySelectorAll('.dudu-text')
for(let i = 0; i < 6; i++){
    checked[i].addEventListener('click', ()=>{
        showImg(indexValue = i + 1)
    })
}


previous.addEventListener('click', ()=>{
    showImg(indexValue += -1)
})
next.addEventListener('click', ()=>{
    showImg(indexValue += 1)
})

thisBtn.addEventListener('click', changeImg, {once:true})
let indexValue = 1
showImg(indexValue)

function showImg(e){
    const images = document.querySelectorAll('.image')

    if(e > images.length){
        indexValue = 1
    } else if(e < 1){
        indexValue = images.length
    }
    for(let i = 0;i < sliders.length;i++){
        sliders[i].style.background = ''
    }
    for(let i = 0;i < images.length;i++){
        images[i].style.display = 'none'
    }
    for(let i = 0;i < description.length;i++){
        description[i].style.display = 'none'
    }
    for(let i = 0;i < hiddenText.length;i++){
        hiddenText[i].style.display = 'none'
    }
    images[indexValue - 1].style.display = 'block'
    sliders[indexValue - 1].style.background = 'white'
    description[indexValue -1].style.display = 'block'
    hiddenText[indexValue -1].style.display = 'block'
}

function changeImg(){
    const images = document.querySelectorAll('.image')
    for(let i = 0;i < images.length;i++){
        images[i].src = `img/${i+1}.jpeg`
        description[i].style.opacity = '0'
        hiddenText[i].style.opacity = '1'
    }
    document.body.style.backgroundImage = "url('img/pig.jpg')"
    thisBtn.addEventListener('click', revertImg, {once:true})
}

function revertImg(){
    const images = document.querySelectorAll('.image')
    for(let i = 0;i < images.length;i++){
        images[i].src = `img/${i+1}.png`
        description[i].style.opacity = '1'
        hiddenText[i].style.opacity = '0'
    }
    document.body.style.backgroundImage = ''
    thisBtn.addEventListener('click', changeImg, {once:true})
}