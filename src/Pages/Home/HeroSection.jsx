export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">I am Yashod</span>{" "}
            <br />
            software engineering undergraduate
            </h1>
          <p className="hero--section-description">
          Crafting Innovative Solutions and Building the Future
            
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section"/>
      </div>
    </section>
  );
}
