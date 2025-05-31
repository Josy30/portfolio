import './About.scss';
import backgroundAbout from '../../assets/background-about.jpeg'



function About(){

    return(

        <div className='About_background'>
            <img src={backgroundAbout} ></img>
        <div  className='About_titulo'>
            <h1>ABOUT</h1>
        </div>
        <div id="about" className='About_component'>
            <div className='About_component_texto'>
                <h2>A LITTLE BIT OF HISTORY</h2>
                <span>Since I can remember, I have always been fascinated by art and technology. <br/>I was deeply interested in sketching, painting, crafts, and video games. <br/>I consider myself fortunate to have closely witnessed the technological transformation from indestructible Nokia devices to incredibly powerful modern smartphones.During my high school days, I delved into rooting and custom Android ROMs, and I still remain a proud member of Team Android.</span>
            </div>
            <div className='About_component_img'>
                <img></img>
            </div>


        </div>
        </div>

        
    )


}

export {About};
