document.addEventListener('DOMContentLoaded', () => {
    let color = 'black';
    let herramienta = undefined;

    function changeColor(pixel, color) {
        pixel.style.backgroundColor = color;
    }


    function pushToolButton(boton) {
        if (herramienta == undefined) {
            herramienta = boton;
            changeColor(boton, '#ffcc66')

        } else if (herramienta != boton) {
            changeColor(boton, '#ffcc66')
            changeColor(herramienta, 'silver')
            herramienta = boton;

        } else {
            changeColor(boton, 'silver')
            herramienta = undefined;
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
        if (event.target.tagName == "TD") {
            if (herramienta.id == 'brush_button') {
                changeColor(event.target, color)
            } else if (herramienta.id == 'rubber_button') {
                changeColor(event.target, '#FFFFFF')

            } else if (herramienta.id == 'bucket_button') {
                let celdas = Array.from(document.getElementsByClassName('canvas_cell'));
                let filtro = celdas.filter(f => f.style.backgroundColor == event.target.style.backgroundColor)
                filtro.forEach(f => changeColor(f, color))

            } else if (herramienta.id == 'trash_button') {
                let c = Array.from(document.getElementsByClassName('canvas_cell'))
                c.forEach(c => changeColor(c, '#FFFFFF'))
            } else if (herramienta.id == 'picker_button') {

            }
        }
    })
})
