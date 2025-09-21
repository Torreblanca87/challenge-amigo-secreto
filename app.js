function reiniciarSorteo() {
    listaAmigos = [];
    mostrarLista();
    limpiarResultado();
    mostrarMensaje('¡Sorteo reiniciado!', 'success');
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear un array para almacenar los nombres 
let listaAmigos = [];

function mostrarMensaje(texto, tipo) {
    const div = document.getElementById('mensaje');
    div.textContent = texto;
    div.className = tipo === 'error' ? 'mensaje error' : 'mensaje success';
    setTimeout(() => {
        div.textContent = '';
        div.className = 'mensaje';
    }, 2500);
}

function limpiarResultado() {
    const ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = '';
}

function añadirAmigo() {
    const input = document.getElementById('amigo');
    let nombre = input.value.trim();
    if (nombre === '') {
        mostrarMensaje('¡Por favor escribe un nombre válido!', 'error');
        return;
    }
    nombre = nombre.toLowerCase();
    if (listaAmigos.includes(nombre)) {
        mostrarMensaje('¡Ese nombre ya está en la lista!', 'error');
        input.value = '';
        return;
    }
    listaAmigos.push(nombre);
    input.value = '';
    mostrarLista();
    mostrarMensaje(`¡${nombre.charAt(0).toUpperCase() + nombre.slice(1)} fue agregado a tu lista!`, 'success');
    limpiarResultado();
}

function mostrarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    if (listaAmigos.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No hay amigos en la lista.';
        li.className = 'vacio';
        ul.appendChild(li);
        return;
    }
    listaAmigos.forEach((amigo, idx) => {
        const li = document.createElement('li');
        li.textContent = amigo.charAt(0).toUpperCase() + amigo.slice(1);
        // Animar solo el último nombre agregado
        if (idx === listaAmigos.length - 1) {
            li.classList.add('animado');
        }
        ul.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('amigo');
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            añadirAmigo();
        }
    });
    mostrarLista();
});

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        mostrarMensaje('No hay amigos en la lista para sortear.', 'error');
        return;
    }
    const indice = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indice];
    const ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `El amigo sorteado es: ${nombreSorteado.charAt(0).toUpperCase() + nombreSorteado.slice(1)}`;
    li.classList.add('animado');
    ulResultado.appendChild(li);
    mostrarMensaje('¡Sorteo realizado!', 'success');
}

// Hacer funciones globales para el HTML
window.añadirAmigo = añadirAmigo;
window.sortearAmigo = sortearAmigo;
window.reiniciarSorteo = reiniciarSorteo;



