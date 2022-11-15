const btnOrdenarPaises = document.querySelector("button#ordenarPorPais")
const btnOrdenarPaisesInverso = document.querySelector("button#ordenarPorPais")
const btnAgregarPaises = document.querySelector("button#agregarUnPais")

//-------------Ordenar paises-------------
const ordenarPaises = () => {
    paises.sort()
    colocandoListaPaises()
}

btnOrdenarPaises.onclick = ordenarPaises
//-------------Ordenar paises inverso-------------
const ordenarPaisesInveso = () => {
    paises.reverse()
    colocandoListaPaises()
}

btnOrdenarPaisesInverso.addEventListener("dblclick",ordenarPaisesInveso)
//-------------Agregar paises-------------
const agregarPais = () => {
    let nuevoPais = prompt("¿Que pais deseas agregar a nuestra gira?").trim()
    if (nuevoPais.length > 0){
        if (paises.includes(nuevoPais)) {
            respuesta = confirm(nuevoPais + " ya esta incluido en la gira ¿Quieres sugerir otro pais?")
            respuesta && agregarPais()
        } else {
            //paises.push(nuevoPais)
            paisesNuevos.push(nuevoPais)
            colocandoListaPaises()
            toast(`"Haz sugerido ${nuevoPais} a la gira!"`)
        }
        guardarPaisesNuevos()
    }
}

btnAgregarPaises.onclick = agregarPais
