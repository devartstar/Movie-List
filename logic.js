var add=document.getElementById('add');
var container=document.getElementById('innerContainer');
add.addEventListener('click', () => {
    console.log('clicked');
    
    var heading=document.getElementById('heading');
    var name=document.getElementById('name').value;
    var rating=document.getElementById('rating').value;

    var Name=document.createElement('h2');
    var Rate=document.createElement('h2');
    Name.innerHTML=name;
    Rate.innerHTML=rating;

    heading.appendChild(Name);
    heading.appendChild(Rate);
})