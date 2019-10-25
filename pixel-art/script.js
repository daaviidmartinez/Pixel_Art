document.addEventListener('DOMContentLoaded', () => {
    alert('Hola')
    let color = 'black';
    let herramienta = undefined;

    function changeColor(pixel, color) {
        pixel.style.backgroundColor = color;
    }


    function pushToolButton(boton) {
        if (herramienta == undefined) {
            herramienta = boton;
            boton.style.backgroundColor = ("#ffcc66")
        } else if (herramienta == tool) {
            herramienta = undefined;
            boton.style.backgroundColor = ("silver")
        } else if (herramienta != undefined) {
            herramienta = boton;
            herramienta.style.backgroundColor = ("#ffcc66")
            console.log(herramienta);
            
        }
    }

    let tool = document.getElementById("brush_button")
    tool.addEventListener('click', (event) => {
        pushToolButton(event.currentTarget)
    })

    tool = document.getElementById("picker_button")
    tool.addEventListener('click', (event) => {
        pushToolButton(event.currentTarget)
    })

    tool = document.getElementById("bucket_button")
    tool.addEventListener('click', (event) => {
        pushToolButton(event.currentTarget)
    })

    tool = document.getElementById("rubber_button")
    tool.addEventListener('click', (event) => {
        pushToolButton(event.currentTarget)
    })

    tool = document.getElementById("trash_button")
    tool.addEventListener('click', (event) => {
        pushToolButton(event.currentTarget)
    })
    let tabla = document.getElementById("canvas_grid");
    tabla.addEventListener('click', (event) => {
        changeColor(event.target, color)
    })
});