import '../../styles/index.scss'
import '../../styles/_vars.scss'
import '../../styles/aside.scss'

function Aside() {
  return (
    <div className="aside_section">
      <div className="background_aside">
        <div className="aside container">
          <div className="aside_item">
            <img src="/img/aside_icon_1.svg" alt="aside icon 1" />
            <div className="aside_item_page">
              <h2 className="aside_title">Free Delivery</h2>
              <p className="aside_text">Worldwide delivery on all. Authorit tively morph<br />next-generation innov tion with
                extensive models.</p>
            </div>
          </div>
          <div className="aside_item">
            <img src="/img/aside_icon_2.svg" alt="aside icon 2" />
            <div className="aside_item_page">
              <h2 className="aside_title">Sales & discounts</h2>
              <p className="aside_text">Worldwide delivery on all. Authorit tively morph<br />next-generation innov tion with
                extensive models.</p>
            </div>
          </div>
          <div className="aside_item">
            <img src="/img/aside_icon_3.svg" alt="aside icon 3" />
            <div className="aside_item_page">
              <h2 className="aside_title">Quality assurance</h2>
              <p className="aside_text">Worldwide delivery on all. Authorit tively morph<br />next-generation innov tion with
                extensive models.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;