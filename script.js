
  function volume_sphere() {
    // Get the value of the radius from the input field
    let radius = document.getElementById('radius').value;
    
    // Ensure the radius is a positive number
    if (radius <= 0) {
        alert('Please enter a positive number for the radius.');
        return;
    }
    
    // Calculate the volume of the sphere
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    // Display the volume in the output field, rounded to two decimal places
    document.getElementById('volume').value = volume.toFixed(2);
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
