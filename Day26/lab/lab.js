import { Employee, SalesPerson, WorkerBee, Manager, Engineer } from "./file.js";

const em1 = new Employee("Peter", "cs");
console.log(em1);

const manager1 = new Manager("Sam", "IT", [em1]);
console.log(manager1);

const worker1 = new WorkerBee("John", "Finance", ["Project1", "Project2"]);
console.log(worker1);

const sales1 = new SalesPerson("Alice", 200);
console.log(sales1);

const eng1 = new Engineer("Bob", "Machine1");
console.log(eng1);

// Task 2
let fetchedUsers = [];
let usersWithPosts = [];

const fetchPosts = async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await response.json();

    return posts;
  } catch (e) {
    console.error(e);
  } finally {
  }
};

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();
    fetchedUsers = await users;
    // await users?.forEach(async (user) => {
    //   usersWithPosts.push({ id: user.id, posts: await fetchPosts(user.id) });
    // }); don't doo

    for (const user of users) {
      const posts = await fetchPosts(user.id);
      usersWithPosts.push({ id: user.id, posts });
    }
  } catch (e) {
    console.error(e);
  } finally {
  }
};

const getName = (id) => {
  return fetchedUsers.find((user) => user.id === id)?.name;
};

const renderData = async () => {
  await getData();

  for (const { id, posts } of usersWithPosts) {
    const ul = document.createElement("ul");
    const name = document.createElement("span");
	name.style.fontWeight = "bold"
    name.textContent = getName(id);
    ul.appendChild(name);
    for (const post of posts) {
      const li = document.createElement("li");
      li.textContent = post.title;
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
  }
};

renderData();
