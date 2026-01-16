const introText = "Web Development";
let i = 0;
const typedText = document.getElementById("typed-text");
function typeIntro() {
  if(i < introText.length){
    typedText.innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeIntro, 100);
  }
}
typeIntro();
const projects = [
  {
    name: "Personal Portfolio",
    description: "A multi-section responsive portfolio website showcasing skills, projects, and contact information. Built using HTML, CSS, and JavaScript with smooth navigation and professional design.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzLMeZg-FRE42L0OuSSWQMSNWLONej1t3aw&s"
  },
  {
    name: "To-Do / Notes App",
    description: "An interactive to-do list and notes app allowing users to add, delete, and persist tasks using localStorage. Designed for task management and easy usability.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JIWKj4At7-W6K12nj1lQv-b-PFvTz_D1XA&s"
  },
  {
    name: "Product Listing Page",
    description: "A dynamic product listing interface with filter and sort functionalities. Users can filter by category, sort by price, and view multiple products with images for an e-commerce style experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-wg5QJqsb4scjOXPznPYcxQ-65kptXay_g&s"
  }
];
const projectGrid = document.getElementById("project-grid");
projects.forEach(p=>{
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h4>${p.name}</h4>
    <p>${p.description}</p>
  `;
  projectGrid.appendChild(card);
});
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete-btn" data-index="${idx}">Delete</button>`;
    list.appendChild(li);
  });
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    });
  });
}
document.getElementById("addTaskBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  if(input.value.trim() === "") return;
  tasks.push(input.value.trim());
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  displayTasks();
});
displayTasks();
const products = [
  {name:"Smartphone", category:"electronics", price:15000, image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"},
  {name:"Laptop", category:"electronics", price:55000, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
  {name:"Headphones", category:"electronics", price:2500, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrcnwpbrEOotAstlirRjybkCEjrk_dIqCyA&s"},
  {name:"Shirt", category:"fashion", price:1200, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ma7ddIJsEQNjDs61zlL83kWnlNSIgy-tyQ&s"},
  {name:"Shoes", category:"fashion", price:3000, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpV0F19F174ioTGM6UoHaPef3J20jHpGo7w&s"},
  {name:"Jacket", category:"fashion", price:4500, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtF8EzybFLV_-HbeN32_01XVw6tyPXPqLKg&s"},
  {name:"Bag", category:"accessories", price:2500, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36rqmN9vxH1CCIDHaNc-QLwYfJAdQMSUQLQ&s"},
  {name:"Sunglasses", category:"accessories", price:1200, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wwTj80HgsmiQHtiE5-A8wBPgGvc95EKbZg&s"},
  {name:"Hat", category:"accessories", price:900, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vEfGilIdDTsgEo_wNB1Aszwv1-79AMXyzQ&s"}
];
let filteredProducts = [...products];
function displayProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  filteredProducts.forEach(p=>{
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="category-badge">${p.category}</div>
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
    `;
    grid.appendChild(card);
  });
}
document.getElementById("categoryFilter").addEventListener("change", e=>{
  const category = e.target.value;
  filteredProducts = category === "all" ? [...products] : products.filter(p=>p.category === category);
  displayProducts();
});
document.getElementById("sortPrice").addEventListener("change", e=>{
  const sort = e.target.value;
  if(sort === "low") filteredProducts.sort((a,b)=>a.price-b.price);
  else if(sort === "high") filteredProducts.sort((a,b)=>b.price-a.price);
  displayProducts();
});
displayProducts();
function showMessage(event){
  event.preventDefault();   // stop page reload

  document.getElementById("successMsg").style.display = "block";

  // Clear form
  event.target.reset();

  // Hide message after 3 seconds (optional)
  setTimeout(()=>{
    document.getElementById("successMsg").style.display = "none";
  },3000);
}
