import flower from "../assets/images/about/flower.png";
import pattern from "../assets/images/about/pattern.svg";
import tripleDots from "../assets/images/about/tripleDots.svg";
import wallpaper from "../assets/images/about/wallpaper.png";
import window from "../assets/images/about/window.png";

import assetsloader from "./assetsloader";

const flower_loader = new assetsloader(flower, 228, 342)
const pattern_loader = new assetsloader(pattern, 506, 651);
const tripleDots_loader = new assetsloader(tripleDots, 19, 58);
const wallpaper_loader = new assetsloader(wallpaper, 684, 1024);
const window_loader = new assetsloader(window, 807, 532);

export {
  flower_loader,
  pattern_loader,
  tripleDots_loader,
  wallpaper_loader,
  window_loader,
};
