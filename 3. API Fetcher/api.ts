interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const postsContainer = document.getElementById("posts") as HTMLDivElement;

async function getPosts(): Promise<void> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: Post[] = await response.json();

  displayPosts(posts);
}

function displayPosts(posts: Post[]): void {
  postsContainer.innerHTML = "";

  posts.slice(0, 10).forEach((post) => {
    const postElement = document.createElement("div");

    postElement.classList.add("post");

    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>`;

    postsContainer.appendChild(postElement);
  });
}
