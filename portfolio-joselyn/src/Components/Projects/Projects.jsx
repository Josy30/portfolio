import './Projects.scss';

function Projects() {








    return(
    <>
    <div id='Projects_component' className='Proyects_component'>
        <h1>PROJECTS</h1>

            <div className="galeria">
                <div class="item disenio">
                    <img src="" alt="" />
                    <div class="info">
                        <h3>Happy Paws</h3>
                        <span>html</span><span>css</span><span>javascript</span>
                        <a href="#">Ver Trabajo</a>
                    </div>
                </div>
                <div class="item programacion">
                    <img src="src/assets/proyecto-peru.png" alt=""/>
                    <div class="info">
                        <h3>Project Peru</h3>
                        <span>html</span><span>css</span><span>javascript</span>
                        <a href="#">Ver Trabajo</a>
                    </div>
                </div>
                <div class="item animaciones">
                    <img src="" alt=""/>
                    <div class="info">
                        <h3>Titulo del Trabajo</h3>
                        <span>html</span><span>css</span><span>javascript</span>
                        <a href="#">Ver Trabajo</a>
                    </div>
                </div>





            </div>
    </div>
    </>
    )
}

function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}




export {Projects};