let name = '';

while (!name) {
    name = prompt("Enter your name:");
    if (!name) {
        alert("Please enter your name!");
    }
}
alert(`Welcome ${name}!`);
