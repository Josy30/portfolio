import './About.scss';
import aboutImg from '../../assets/aboutImg.jpeg'



function About(){

    return(

        <div id="about" className='About_component' >
            
        <div  className='About_titulo'>
            <h1>ABOUT</h1>
        </div>
        <div className='About_container'>
            <div className='About_component_texto'>
                <span>Since I can remember, I have always been fascinated by art and technology. <br/>I was deeply interested in sketching, painting, crafts, and video games. <br/>I consider myself fortunate to have closely witnessed the technological transformation from indestructible Nokia devices to incredibly powerful modern smartphones.During my high school days, I delved into rooting and custom Android ROMs, and I still remain a proud member of Team Android.</span>
            </div>
            <div className='About_component_img'>
                
            </div>

            </div>
        </div>
        

        
    )


}

export {About};
