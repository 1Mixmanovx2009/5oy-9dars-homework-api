// User List Render start

let elUsersList = document.querySelector(".user-lists")

fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
    console.log(data);
    resnderUsers(data)
})

function resnderUsers(arr) {
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "user-list flex flex-col p-4 bg-white w-[260px] ml-[28px]"
        elItem.innerHTML = `
            <p class=""><strong>Name:</strong> ${item.name}</p>
            <p class=""><strong>Username:</strong> ${item.username}</p>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Phone Number:</strong> ${item.phone}</p>
            <button onclick="handleUsersPostShow(${item.id})" class="border-[2px] mt-[10px] rounded-lg w-full bg-slate-500 p-2 border-transparent text-white font-bold hover:border-slate-500 hover:text-slate-500 hover:bg-white duration-300">Show Posts</button>
        `
        elUsersList.appendChild(elItem)
    });
}
// User List Render end

// Post Part start
let elPostsList = document.querySelector(".posts-list")
function handleUsersPostShow(id) {
    elPostsList.textContent = "Loading..."
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json()).then(data => {
        renderPost(data)
    }) 
    
    function renderPost(arr) {
        elPostsList.innerHTML = null
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.className = "user-list flex flex-col p-4 bg-white w-[260px] ml-[28px]"
            elItem.innerHTML = `
                <p class=""><strong>User ID:</strong> ${item.userId}</p>
                <p class=""><strong>Title:</strong> ${item.title}</p>
                <p><strong>Body:</strong> ${item.title}</p>
                <button onclick="handlePostsCommentsShow(${item.id})" class="border-[2px] mt-[10px] rounded-lg w-full bg-slate-500 p-2 border-transparent text-white font-bold hover:border-slate-500 hover:text-slate-500 hover:bg-white duration-300">Show Comments</button>
            `
            elPostsList.appendChild(elItem)
        });
    }
}
// Post Part end

// Comments Part start
let elCommentsList = document.querySelector(".comments-list")
function handlePostsCommentsShow(id) {
    elCommentsList.textContent="Loading..."
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res => res.json()).then(data => {
        renderComments(data)
    })

    function renderComments(arr) {
        elCommentsList.innerHTML = null
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.className = "user-list flex flex-col p-4 bg-white w-[260px] ml-[28px]"
            elItem.innerHTML = `
                <p class=""><strong>Post ID:</strong> ${item.postId}</p>
                <p class=""><strong>Name:</strong> ${item.name}</p>
                <p><strong>Body:</strong> ${item.body}</p>
            `
            elCommentsList.appendChild(elItem)
        });
    }
}
// Comments Part end
