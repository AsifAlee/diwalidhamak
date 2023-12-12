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

  if (rewDesc?.includes("Samurai Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/skSamuraiFrame.png";
  } else if (rewDesc?.includes("Night Shadow room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/nightShadow.png";
  } else if (rewDesc?.includes("Moon Knight Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/moonKnightFrame.png";
  } else if (rewDesc?.includes("Desert Knight room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/desertNight.png";
  } else if (rewDesc?.includes("Spaceship entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Rusty Ranger entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rustyRanger.png";
  } else if (rewDesc?.includes("Battle Master room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/firebrand Profile frame.png";
  } else if (rewDesc?.includes("Safari Champion room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/safariChampionRoomSkin.png";
  } else if (rewDesc?.includes("Blessed room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/blessedRoomSkin2k23.png";
  } else if (rewDesc?.includes("Peacemaker Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/peacemakerFrame.png";
  } else if (rewDesc?.includes("Maestro Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/maestro.png";
  } else if (rewDesc?.includes("Hawk entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/hawk.png";
  } else if (rewDesc?.includes("Gold Luxury entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/goldLuxury.png";
  } else if (rewDesc?.includes("beans")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("Beans")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("Fortune room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/roomIcon.png";
  } else if (rewDesc?.includes("Fortune frame")) {
    rewImg = baseUrl + "/streamkar/rewards/bunnyFrame.gif";
  } else if (rewDesc?.includes("Followers Card")) {
    rewImg = baseUrl + "/streamkar/rewards/followerCard.png";
  } else if (rewDesc?.includes("Flaming Candle room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/flamingCandleRoomskin.png";
  } else if (rewDesc?.includes("Safari Champion Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/safariDesertframe.png";
  } else if (rewDesc?.includes("SVIP")) {
    rewImg = baseUrl + "/streamkar/rewards/svip.png";
  } else if (rewDesc?.includes("Boss Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/bossFrame.png";
  } else if (rewDesc?.includes("Victorious room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/victoriousRoomSkin.png";
  } else if (rewDesc?.includes("Monarch room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/monarchRoom.png";
  } else if (rewDesc?.includes("Desert Knight frame")) {
    rewImg = baseUrl + "/streamkar/rewards/desertnightFrame.png";
  } else if (rewDesc?.includes("Battle Master room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc?.includes("Battle Master frame")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc?.includes("Kingpin entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/kingpinFrame.png";
  } else if (rewDesc?.includes("Luminary Room Skin")) {
    rewImg = baseUrl + "/streamkar/rewards/luminarSkin.png";
  } else if (rewDesc?.includes("Game Battle frame")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc?.includes("Game Master room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc?.includes("Phoenix entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phoenix.png";
  } else if (rewDesc?.includes("Topliner frame")) {
    rewImg = baseUrl + "/streamkar/rewards/toplinerFrame.png";
  } else {
    rewImg = baseUrl + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}
export const getRewardDetails = (desc, count) => {
  let text = "";

  desc === "Beans"
    ? (text = `${count} Beans`)
    : desc === "gems"
    ? (text = `${count} Gems`)
    : desc === "Wildcards"
    ? (text = `${count} Wildcards`)
    : desc === "Trophies"
    ? (text = `${count} Trophies`)
    : desc === "Growth Points"
    ? (text = `${count} Growth Points`)
    : desc === "Firepower"
    ? (text = `${count} Firepower`)
    : desc === "Festive Token"
    ? (text = `${count} Festive Tokens`)
    : (text = `${desc}  x${count > 1 ? `${count} days` : `${count} day`}`);

  return text;
};
