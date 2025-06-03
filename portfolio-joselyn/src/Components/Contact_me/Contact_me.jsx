import './Contact_me.scss';
import GithubPhoto from "../../assets/icon-github.png";
import LinkedInPhoto from "../../assets/icon-linkedin.png";
import CorreoPhoto from "../../assets/icon-correo.png";
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_oxd9qo7";
const TEMPLATE_ID = "template_twt4j6l";
const PUBLIC_KEY = "7KviPS5tHV9DaoBql";


function Contact_me() {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
        e.target.reset()
      };

    return(
    <>
    <div className='contact_me'>
    <div id='contact_me' className='Contact_me_component'>
        <h1>CONTACT ME </h1>
    </div>
    <div className='Contact_me_component_seccion'>
        <div className='Contact_me_component_seccion_texto'>
            <h2>Get in Touch</h2>
            <p>I'd love to hear about what you're working on and how I could help.I'm currently looking for a new role and am open to a wide range of opportunities.I am open to new technologies and ways to code, whatever tool is needed for the job. I'm a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Creativity, discipline, perseverance and hard work are my values. Please do feel free to check out my online profiles below and get in touch using the form.</p>
        </div>
        <div className='Contact_me_component_seccion_formulario'>
            <h2>Let's Talk! </h2>
            <form onSubmit={handleOnSubmit}>
                <label for="name">Name :</label>
                <input name="name" placeholder='  Halo! Here your Name!'></input>
                <label>Email Address :</label>
                <input name="email address" placeholder='  here your Email !'></input>
                <label for="message">Message :</label>
                <input name="message" placeholder='  leave me your message'></input>
                <input className='enviar' type="submit" />
            </form>

        </div>
    </div>
    </div>
    <footer>
        <div className='Portada_icons_footer'>
                    <a className='Portada_icons_footer_linkedin' target="_blank" href="https://www.linkedin.com/in/joselyn-judith/">
                        <img src={LinkedInPhoto}/>
                    </a>
                    <a className='Portada_icons_footer_github' target="_blank" href="https://github.com/Josy30/">
                        <img src={GithubPhoto}/>
                    </a>
                    <a className='Portada_icons_footer_correo' target="_blank" href="mailto:j.devetrieva@gmail.com">
                        <img src={CorreoPhoto}/>
                    </a>
                </div>
    </footer>

    </>
    
    )
}

export {Contact_me};