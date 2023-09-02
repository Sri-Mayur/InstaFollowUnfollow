var istatus = document.querySelector("h5")

var addFriend = document.querySelector("button")

var check = 0

addFriend.addEventListener('click',function(){

    if(check==0){
        istatus.innerHTML = "Friends"
        
        addFriend.innerHTML= "Unfriend"
       
        
        
        check = 1;
    }

    else if (check==1){
        istatus.innerHTML= "Strangers"
        addFriend.innerHTML=" Add Friend"
        
        check= 0;

    }
    
    

    
})