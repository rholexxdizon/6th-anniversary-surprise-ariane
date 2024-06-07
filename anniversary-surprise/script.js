//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
    
})

const pages = document.querySelectorAll('.album-page.page-right');
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}


//back profile button when click


const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1 ) * 200 + 100)
    })
}

//opening album animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('album-page.page-left');

//opening animation for (cover right animation)
setTimeout(() =>{
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() =>{
    coverRight.style.zIndex = -1;
}, 2800)

//opening animation (page left or profile page animation))
setTimeout(() =>{
    pageLeft.style.zIndex = 20;
}, 3200)

//opening animation for all (page right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1 ) * 200 + 2100)
})

// //iframe

// window.onload = function() {
//     var iframe = document.getElementById("iframe-spotify");
//     iframe.width = iframe.contentWindow.document.body.scrollWidth;
//     iframe.height = iframe.contentWindow.document.body.scrollHeight;
// }

