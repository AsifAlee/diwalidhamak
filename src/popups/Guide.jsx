import React, { useContext } from "react";
import PopUp from "../components/Popup";
import bg from "../assets/images/guide-bg.png";
import title from "../assets/images/guide-text.png";
import { AppContext } from "../AppContext";
import bean from "../assets/images/bean-icon.png";
import fToken from "../assets/images/decorate-house/bullet-point.png";

const Guide = ({ popUpHandeler }) => {
  const { selectedLng } = useContext(AppContext);

  return (
    <PopUp bg={bg} isGuide={true}>
      <div className="guide">
        <img src={title} className="title" />
        <button className="closeBtn" onClick={popUpHandeler} />
        {selectedLng === 1 ? (
          <div className="guide-content">
            <h2 className="heading highlight">Diwali Dhamaka</h2>
            <ul className="list-item">
              <li>
                To participate in the game, you need to spend 25,000 beans on
                event gifts, which will give you one chance to play. (25,000{" "}
                <img src={bean} className="bean-img" />
                =1 chance )
              </li>
              <li>
                You can type up to x99 chances to play in one go based on the
                beans spent on the event gifts.
              </li>
              <li>
                Once you click on <span className="highlight">LAUNCH</span>{" "}
                button , the rocket will light up and burst the balloon,
                revealing the rewards you have won.
              </li>
              <li>
                You will receive Festive Tokens as a reward, which can be used
                to play another part of the game called "Decorate the House".
              </li>
            </ul>

            <h2 className="heading highlight">Decorate the House</h2>
            <ul className="list-item">
              <li>
                All the Festive Tokens that you collect will allow you to
                purchase things to decorate your house this Diwali Season.
              </li>
              <li>
                After you hit the <span className="highlight">PURCHASE</span>{" "}
                button, you can buy the things in any order by spending the
                required Festive Tokens.
              </li>
              <li>
                You will not be allowed to unlock and buy the same things twice
                until you buy all the things to decorate the house.
              </li>
              <li>
                If you have a total of 56,000 Festive Tokens, you can purchase
                all the items at once.
              </li>
              <li> Spending the Festive Tokens will earn you rewards.</li>
            </ul>
            <table className="house-table">
              <tr>
                <td>Sr.No</td>
                <td>Material</td>
                <td>Festive Tokens Req.</td>
                <td>Reward in Beans.</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Lantern</td>
                <td>
                  3,000 <img className="fToken" src={fToken} />
                </td>
                <td>
                  1,300
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lights</td>
                <td>
                  7,000
                  <img className="fToken" src={fToken} />
                </td>
                <td>
                  3,000
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sofa</td>
                <td>
                  10,000
                  <img className="fToken" src={fToken} />
                </td>
                <td>
                  4,400
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Study Area</td>
                <td>
                  16,000
                  <img className="fToken" src={fToken} />
                </td>
                <td>
                  7,100
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Bedroom Decoration</td>
                <td>
                  20,000
                  <img className="fToken" src={fToken} />
                </td>
                <td>
                  9,200
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Total</td>
                <td>
                  <span className="highlight">56,000 Festive Tokens</span>
                </td>
                <td>
                  <span className="highlight">25,000 Beans</span>
                </td>
              </tr>
            </table>

            <h2 className="heading highlight" style={{ marginTop: "2vw" }}>
              Festival Favorite Partnership
            </h2>
            <ul className="list-item">
              <li>
                To feature on the "Best Partnership Album" window, users must
                send the maximum number of beans to a single talent of their
                choice within a 12-hour cycle.
              </li>
              <li>
                The album will display the best partnership between the user and
                the chosen talent.
              </li>
              <li>
                The leaderboard can display multiple partnerships of one user
                with different talents.
              </li>
              <li>
                Festival Favorite Partnership Leaderboard’s arrangement will be
                according to:
                <ul style={{ marginLeft: "3vw" }}>
                  <li>
                    If 1 single user ID sends gifts to 1 single talent ID.
                  </li>
                  <li>
                    If multiple talent IDs receives gems from 1 user ID. The
                    partners of that user will be created multiple times and the
                    user will be displayed on the leaderboard multiple times.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        ) : (
          <div className="guide-content">
            <h2 className="heading highlight">Diwali Dhamaka</h2>
            <ul className="list-item">
              <li>
                Khel shuru karne ke liye, aapko 25,000 beans event gifts pe
                kharch karne honge,isse aapko khelnka ek mauka diya jayega
                (25,000 <img src={bean} className="bean-img" />
                =1 chance).
              </li>
              <li>
                Aapko agar multiple chances khelne hai toh aap manually bhi type
                kar sakte hai (99 chances mai se )
              </li>
              <li>
                Jab aap <span className="highlight">LAUNCH</span> button par
                click karenge , rocket upar jaake balloons ko burst karega, aur
                aapne kya reward jeeta hai who aap dekh paoge.
              </li>
              <li>
                Reward jeetne ke saath saath aap Festive Tokens bhi collect kar
                paoge, jo aapko house decorate karne ke kaam aayenge.
              </li>
            </ul>

            <h2 className="heading highlight">Decorate the House</h2>
            <ul className="list-item">
              <li>
                Saare collect hue Festive Tokens se iss Diwali aap apna ghar
                saja sakte hai.
              </li>
              <li>
                Aap jab PURCHASE button par click karoge, tab uss item ko
                purchase karne ke liye jitne Festive Token langenge who aapke
                account se deduct honge.
              </li>
              <li>
                Ek baar khareeda hua item dobaara tab tak nahi khareed sakte
                jabtak aap saare available items khareed na le.
              </li>
              <li>
                Agar aap ke pass total 56,000 Festive Tokens hai to aap saare
                items ek baar mai khareed sakte ho.
              </li>
              <li>
                Aap ko Festive Tokens kharch karne par extra rewards milenge.
              </li>
            </ul>
            <table className="house-table">
              <tr>
                <td>Sr.No</td>
                <td>Material</td>
                <td>Festive Tokens Req.</td>
                <td>Reward in Beans.</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Lantern</td>
                <td>
                  3,000 <img className="fToken" src={fToken} />
                </td>
                <td>
                  1,300
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lights</td>
                <td>
                  7,000
                  <img className="fToken" src={fToken} />
                </td>
                <td>
                  3,000
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sofa</td>
                <td>
                  10,000
                  <img className="fToken" src={fToken} />
                </td>
                <td>
                  4,400
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Study Area</td>
                <td>
                  16,000
                  <img className="fToken" src={fToken} />
                </td>
                <td>
                  7,100
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Bedroom Decoration</td>
                <td>
                  20,000
                  <img className="fToken" src={fToken} />
                </td>
                <td>
                  9,200
                  <img className="bean-img" src={bean} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Total</td>
                <td>
                  <span className="highlight">56,000 Festive Tokens</span>
                </td>
                <td>
                  <span className="highlight">25,000 Beans</span>
                </td>
              </tr>
            </table>

            <h2 className="heading highlight" style={{ marginTop: "2vw" }}>
              Festival Favorite Partnership
            </h2>
            <ul className="list-item">
              <li>
                “Best Partnership Album” ke window par jhalakne ke liye,12
                ghante ki cycle mai user ko jyada se jyada beans ek talent par
                kharch karne honge.
              </li>
              <li>
                Jiski Best Partnership hogi unhe album par show kar diya jayega
                .
              </li>
              <li>
                Leaderboard par aane ke liye ek user ki partnership ek se jyada
                talent se ho sakti hai.
              </li>
              <li>
                Festival’s Favorite Partnership Leaderboard ki arrangement isse
                par depend karte hai ki:
                <ul style={{ marginLeft: "3vw" }}>
                  <li>
                    Ek hi user ID se ek single talent ko kitne event gifts bheje
                    hai .
                  </li>
                  <li>Ek talent ko ek user ID se kitne gems recive hue hai.</li>
                </ul>
              </li>
              <li>
                Iss situation mai user ka naam ek se jyada baar leaderboard pe
                display hoga.
              </li>
            </ul>
          </div>
        )}
      </div>
    </PopUp>
  );
};

export default Guide;
