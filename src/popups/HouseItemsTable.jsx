import React from "react";
import PopUp from "../components/Popup";
import bg from "../assets/images/popups/Rewards-history-bg.png";
import bean from "../assets/images/bean-icon.png";
import fToken from "../assets/images/decorate-house/bullet-point.png";

const HouseItemsTable = ({ popUpHandler }) => {
  return (
    <PopUp bg={bg}>
      <div className="house-item-table">
        <div className="table-content">
          <table className="house-item-table">
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
                3,000
                <img src={fToken} className="fToken" />
              </td>
              <td>
                1,300 <img src={bean} className="bean-img" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lights</td>
              <td>
                7,000 <img src={fToken} className="fToken" />
              </td>
              <td>
                3,000 <img src={bean} className="bean-img" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sofa</td>
              <td>
                10,000 <img src={fToken} className="fToken" />
              </td>
              <td>
                4,400 <img src={bean} className="bean-img" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Study Area</td>
              <td>
                16,000 <img src={fToken} className="fToken" />
              </td>
              <td>
                7,100 <img src={bean} className="bean-img" />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Bedroom Decoration</td>
              <td>
                20,000 <img src={fToken} className="fToken" />
              </td>
              <td>
                9,200 <img src={bean} className="bean-img" />
              </td>
            </tr>
            {/* <tr>
              <td></td>
              <td>Total</td>
              <td>
                <span className="highlight">
                  56,000 Festive Tokens <img src={bean} className="bean-img" />
                </span>
              </td>
              <td>
                <span className="highlight">
                  25,000 Beans <img src={fToken} className="fToken" />
                </span>
              </td>
            </tr> */}
          </table>
        </div>

        <button className="closeBtn" onClick={popUpHandler} />
      </div>
    </PopUp>
  );
};

export default HouseItemsTable;
