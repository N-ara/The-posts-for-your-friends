//getUsers
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((users) => {
      document.getElementById("users").innerHTML = "";
      for (let user of users) {
        let content = `
        <div class="userCard" id="users" onclick="userClicked(${user.id}, this)">
            <h3>${user.name}</h3>
            <h4>${user.email}</h4>
        </div>
        `;
        document.getElementById("users").innerHTML += content;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

window.onload = getUsers;

//getPosts
function getPosts(userId) {
  fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((posts) => {
      document.getElementById("posts").innerHTML = "";

      for (let post of posts) {
        let content = `
        <div class="postCard" id="post">
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            </div>
        `;
        document.getElementById("posts").innerHTML += content;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
window.onload = getPosts;

function getData() {
  getPosts(1);
  getUsers();
}

window.onload = getData;

function userClicked(id, el) {
  getPosts(id);
  let selectedElements = document.getElementsByClassName("selected");
  for (element of selectedElements) {
    element.classList.remove("selected");
  }
  el.classList.add("selected");
}
