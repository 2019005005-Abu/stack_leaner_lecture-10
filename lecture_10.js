//understanding async programming
//Event loop
//ways we can handle async tasks
//Callback
//promise
//async Await
//async iterator
//async Generator

function f_1(){
    f_2()
    setTimeout(()=>{
        f_2()
        console.log("I will run 1000");
       },1000)
}
function f_2(){
    setTimeout(()=>{
        console.log('I will run 2000')
       },2000);
}
f_1();

// Callback hell
//1.Find user by username
//2.find posts by userId
//3.find last post
//4.Find comments by post Id
//5.Latest comment
//6.Find user name of the commenting user
// users ?username=[username]
//using promise

function wait(ms){
 const promise=new Promise((resolve,reject)=>{
    setTimeout(resolve,ms);
})
return promise;
}
wait(10).then(()=>{
    console.log("Done is 10 ms");
})
wait(1000).then(()=>{
    console.log("Done is 1000 ms");
})
const wait2=(ms)=>new Promise((resolve)=>{
    setTimeout(resolve,ms);
})
wait2(1000).then(()=>{
    console.log('I am doing wrong');
})

const axios=require('axios').default;

const users_URL=`https://jsonplaceholder.typicode.com/users`

const comments_url=`https://jsonplaceholder.typicode.com/comments`

const  post_url=`https://jsonplaceholder.typicode.com/posts`

async function getcomments(user_name,id,comment){
 const user=await axios.get(`${users_URL}?username=${user_name}`)
 console.log(user)
}




