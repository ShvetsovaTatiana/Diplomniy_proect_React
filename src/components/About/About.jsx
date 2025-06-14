import '../../styles/index.scss'
import '../../styles/_vars.scss'
import '../../styles/about.scss'

function About() {
  return (
    <div className='about_section'>
      <div className="about">
        <img className="about_fill_img" src="/img/about_fill.svg" alt="about fill" />
        <div className="about_overlay">
          <div className="about_items container">
            <div className="about_item_1">
              <img width="96" src="img/about_photo.svg" alt="about photo" />
              <p className="about_text">“Vestibulum quis porttitor dui! Quisque<br />viverra nunc mi, <span
                className="about_text_cont">a pulvinar purus<br />condimentum“</span></p>
            </div>
            <div className="about_item_2">
              <h1 className="about_item_title">SUBSCRIBE</h1>
              <h2 className="about_item_subtitle">FOR OUR NEWLETTER AND PROMOTION</h2>
              <div className="input-group">
                <input className="item_input" type="email" placeholder="Enter Your Email" required />
                <button className="btn" type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;