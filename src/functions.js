import { baseUrl } from "./api";

export const getLevelImage = (level, isTalent) => {
  const talentLevelUrl = `${baseUrl}/streamkar/common/img/tlv`;
  const userLevelUrl = `${baseUrl}/streamkar/common/img/ulv`;
  if (isTalent) {
    return `${talentLevelUrl}/${level}.png`;
  } else {
    return `${userLevelUrl}/${level}.png`;
  }
};

export const gotoProfile = (id) => {
  window.location.href = `http://www.kktv1.com/m/?roomid=${id}`;
};

export function getRewardsImage(rewDesc) {
  var rewImg;

  if (rewDesc?.includes("Raging Bull Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/valentineFrameUser.png";
  } else if (rewDesc?.includes("Hummer Premium Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/hummer.png";
  } else if (rewDesc?.includes("Gala VvIP Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/galaVipProfile.png";
  } else if (rewDesc?.includes("Maharaja Premium Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/maharajaPremium.png";
  } else if (rewDesc?.includes("beans")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else {
    rewImg = baseUrl + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}
