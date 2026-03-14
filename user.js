// Class that manages users
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserManager.prototype.getUsers = function () {
        return this.users;
    };
    UserManager.prototype.deleteUser = function (index) {
        this.users.splice(index, 1);
    };
    return UserManager;
}());
// Get elements from the HTML
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var ageInput = document.getElementById("age");
var addBtn = document.getElementById("addUser");
var userList = document.getElementById("userList");
// Create instance of the manager
var manager = new UserManager();
// Function to display users on the screen
function renderUsers() {
    userList.innerHTML = "";
    manager.getUsers().forEach(function (user, index) {
        var li = document.createElement("li");
        li.textContent = "".concat(user.name, " | ").concat(user.email, " | ").concat(user.age);
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            manager.deleteUser(index);
            renderUsers();
        };
        li.appendChild(deleteBtn);
        userList.appendChild(li);
    });
}
// Add user when button is clicked
addBtn.onclick = function () {
    var user = {
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
