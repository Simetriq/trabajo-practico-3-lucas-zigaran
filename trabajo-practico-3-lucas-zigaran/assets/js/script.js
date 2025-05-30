document.getElementById('traerApi').addEventListener('click', async () => {
  try {
    const respuesta = await fetch('https://api.ejemplo.com/datos');
    const data = await respuesta.json();
    document.getElementById('resultado').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error al obtener datos:', error);
    document.getElementById('resultado').textContent = 'Error al cargar los datos';
  }
});