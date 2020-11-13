


let heart=document.getElementsByClassName("fa-heart")[0]

let likeNo=0;
heart.parentNode.addEventListener('click',function(event)
{   event.preventDefault();

    let likes=document.getElementsByClassName("likes")[0]



    if(heart.classList.contains("far"))
    {
        heart.classList.replace("far","fas")
        likeNo++;

    }
    else if(heart.classList.contains("fas"))
    {
        heart.classList.replace("fas","far")
        likeNo--;
    }

    

    
    likes.innerHTML=`${likeNo} likes`

})


