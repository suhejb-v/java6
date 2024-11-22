document.getElementById('calculate-btn').onclick = function () {
    var numri = parseFloat(prompt('Shkruani një numër:')); 
    var shuma = parseFloat(prompt('Shkruani shumën për t\'ia shtuar:')); 
    var rezultati = numri + shuma; 
    alert('Rezultati përfundimtar është: ' + rezultati); 
};
