import "../style.css"
import image from "../components/image/akmal.jpeg"

function About() {
    return(
        <div id="about" class="container">


      <div class="wrapper3">
        <div class="wrap">
            <img class="img" src={image} alt="" />
        </div>
        <div class="name">
          <div class="m">MUHAMMAD</div>
          <div class="akmal">AKMAL</div>
          <div class="h">HAMIDI</div>
        </div>
      </div>

      <div class="wrapper4">
        <div class="wrap2">
          <div class="tag1">Hi,</div>
          <div class="tag2">I'm a </div>
          <div class="tag3">Student.</div>
        </div>
      </div>
    </div>
    )
}

export default About