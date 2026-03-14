// Define what a User should look like
interface User {
  name: string;
  email: string;
  age: number;
}

// Class that manages users
class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }
}

// Get elements from the HTML
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const addBtn = document.getElementById("addUser") as HTMLButtonElement;
const userList = document.getElementById("userList") as HTMLUListElement;

// Create instance of the manager
const manager = new UserManager();

// Function to display users on the screen
function renderUsers(): void {
  userList.innerHTML = "";

  manager.getUsers().forEach((user, index) => {
    const li = document.createElement("li");

    li.textContent = `${user.name} | ${user.email} | ${user.age}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = () => {
      manager.deleteUser(index);
      renderUsers();
    };

    li.appendChild(deleteBtn);

    userList.appendChild(li);
  });
}

// Add user when button is clicked
addBtn.onclick = () => {
  const user: User = {
    name: nameInput.value,
    email: emailInput.value,
    age: Number(ageInput.value),
  };

  manager.addUser(user);

  renderUsers();

  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
};
