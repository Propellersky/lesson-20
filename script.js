let a = 0;
let first = document.getElementById("first");
first.onclick = function() {
  let on = document.getElementById("but");
  let Text = "You clicked First button";
  on.innerHTML = Text;
};
first.onmousemove = function() {
  a++;
  this.style.width = 100 + "px";
  this.style.height = 60 + "px";
  first.onmouseleave = function() {
    a++;
    this.style.width = 70 + "px";
    this.style.height = 50 + "px";
  };
};
let fst = document.querySelector("first");

first.addEventListener("click", function(event) {
  console.log(this, event.target);
});

let b = 0;
let second = document.getElementById("second");
second.onclick = function() {
  let on = document.getElementById("but");
  let Text = "You clicked Second button";
  on.innerHTML = Text;
};
second.onmousemove = function() {
  b++;
  this.style.width = 100 + "px";
  this.style.height = 60 + "px";
  second.onmouseleave = function() {
    b++;
    this.style.width = 70 + "px";
    this.style.height = 50 + "px";
  };
};
let scd = document.querySelector("second");

second.addEventListener("click", function(event) {
  console.log(this, event.target);
});

let c = 0;
let third = document.getElementById("third");
third.onclick = function() {
  let on = document.getElementById("but");
  let Text = "You clicked Third button";
  on.innerHTML = Text;
};
third.onmousemove = function() {
  c++;
  this.style.width = 100 + "px";
  this.style.height = 60 + "px";
  third.onmouseleave = function() {
    c++;
    this.style.width = 70 + "px";
    this.style.height = 50 + "px";
  };
};
let thd = document.querySelector("third");

third.addEventListener("click", function(event) {
  console.log(this, event.target);
});
