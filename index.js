const list = document.getElementById('list')
const listElement = list.querySelectorAll('li')

const fetchData = async() => {
    const useresResponse = await fetch('https://jsonplaceholder.typicode.com/users') 
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')

    const users = await useresResponse.json()
    const posts = await postsResponse.json()

    return {users, posts}
}

const renderPage = async() => {
    const {users, posts} = await fetchData()

    users.forEach((user) => {
        const item = document.createElement('li')
        item.innerText = user.name
        

        const userPosts = posts.filter((post)=> post.userId === user.id)

        userPosts.forEach((post) => {
            const postItem = document.createElement('p')
            postItem.innerText = post.title
            item.appendChild(postItem)
        })
        
        list.appendChild(item)
    })      
}

renderPage()

