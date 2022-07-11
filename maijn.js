window.onload = () => {

    let nombre = document.querySelector(".nombre");
    let descripcion = document.querySelector(".descripcion");
    let fecha = document.querySelector(".fecha");
    let btn = document.querySelector(".add");
    let UUID = 0
    let lista = document.querySelector(".lista");
    let error = document.getElementById("error");

    let clearData = () => {
        nombre.value = "";
        descripcion.value = "";
        fecha.value = "";
    }


    // click evento 
    btn.addEventListener("click", () => {

        // Datos en blanco
        if (nombre.value === '' || descripcion.value === '' || fecha.value === "") {
            error.style.display = 'block';
            clearData();
        }
        else {
            error.style.display = 'none';
            let nuevo = {
                nombre: nombre.value,
                fecha: fecha.value,
                descripcion: descripcion.value,
                fecha: fecha.value
            }
            crearTarea(nuevo, lista)
        }

    });

    let addId = function () {
        return String(++UUID)
    }



    // Crear el nuevo elemento y añadir al DOM
    let crearTarea = (nuevo, lista) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h4");
        let timeView = document.createElement("h5");
        let iconDelete = document.createElement("button");
        let masInfo = document.createElement("button");

        h3.innerHTML = nuevo.nombre;
        timeView.innerHTML = nuevo.fecha;
        iconDelete.innerText = 'delete_forever';
        iconDelete.classList.add('material-symbols-outlined', 'icon', 'delete');
        div.classList.add('newElement', addId());
        masInfo.innerText = "double_arrow"
        masInfo.classList.add("material-symbols-outlined", 'icon', 'info');

        // Btn Description
        let ventana = document.createElement('ul');
        let elemento_venta = document.createElement('li');
        let texto_li = document.createElement("p");
        let num = 0

        masInfo.onclick = () => {
            (++num)
            if (num == 1) {
                texto_li.innerText = nuevo.descripcion;
                elemento_venta.appendChild(texto_li);
                ventana.appendChild(elemento_venta);
                div.appendChild(ventana);
            }
            if (num == 2) {
                ventana.style.display = 'none'
            }
            else {
                ventana.style.display = 'block';
                num = 1
            }

        }

        // Btn Delete
        iconDelete.onclick = () => {
            div.remove();
        }

        //Add DOM
        div.appendChild(h3);
        div.appendChild(timeView);
        div.appendChild(masInfo);
        div.appendChild(iconDelete);
        lista.appendChild(div);

        clearData();
    }


}