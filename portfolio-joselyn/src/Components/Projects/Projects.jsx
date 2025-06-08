import './Projects.scss';

function Projects() {








    return(
    <>
        <div className='titulo_Projects'>
            <h1>PROJECTS</h1>
        </div>
        
        <section id='Projects_component' className='Projects_component'>
            

            <div className="galeria">
                <div class="item">
                    <img src="" alt="Project Happy Paws" />
                    <div class="info">
                        <h3>Happy Paws</h3>
                        <span>html</span><span>css</span><span>javascript</span>
                        <a href="#">Ver Trabajo</a>
                    </div>
                </div>
                <div class="item">
                    <img src="src/assets/proyecto-peru.png" alt="Project Peru"/>
                    <div class="info">
                        <h3>Project Peru</h3>
                        <span>html</span><span>css</span><span>javascript</span>
                        <a href="#">Ver Trabajo</a>
                    </div>
                </div>
                <div class="item">
                    <img src="" alt="Project 3"/>
                    <div class="info">
                        <h3>Project 3</h3>
                        <span>html</span><span>css</span><span>javascript</span>
                        <a href="#">Ver Trabajo</a>
                    </div>
                </div>
                <div class="item">
                    <img src="" alt="Project 4"/>
                    <div class="info">
                        <h3>Project 4</h3>
                        <span>html</span><span>css</span><span>javascript</span>
                        <a href="#">Ver Trabajo</a>
                    </div>
                </div>
                <div class="item">
                    <img src="" alt="Project 5"/>
                    <div class="info">
                        <h3>Project 5</h3>
                        <span>html</span><span>css</span><span>javascript</span>
                        <a href="#">Ver Trabajo</a>
                    </div>
                </div>
                <div class="item">
                    <img src="" alt="Project 6"/>
                    <div class="info">
                        <h3>Project 6</h3>
                        <span>html</span><span>css</span><span>javascript</span>
                        <a href="#">Ver Trabajo</a>
                    </div>
                </div>
            </div>
        </section>
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

    
}




export {Projects};