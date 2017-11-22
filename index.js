const app = "I don't do much.";

const token = '0adeed0af49a7b42e1cde6a67f91f8d5be5340f7'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
