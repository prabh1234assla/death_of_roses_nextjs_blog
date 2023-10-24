import flowers from "../assets/images/home_page/flowers.svg";
import garland from "../assets/images/home_page/garland.svg";
import background from "../assets/images/home_page/background.png";
import wallpaper from "../assets/images/home_page/wallpaper.png";
import flower_wallpaper from "../assets/images/home_page/flower_wallpaper.png";
import custom_made_flower_wallpaper from "../assets/images/home_page/custom_made_flower_wallpaper.svg";
import rose_chain from "../assets/images/home_page/rose_chain.svg";
import button_flower from "../assets/images/home_page/button_flower.svg";
import border from "../assets/images/home_page/border.svg";

import assetsloader from "./assetsloader";

const flowers_loader = new assetsloader(flowers, 700, 948);
const garland_loader = new assetsloader(garland, 496, 491);
const background_loader = new assetsloader(background, 1440, 466);
const wallpaper_loader = new assetsloader(wallpaper, 794, 958);
const flower_wallpaper_loader = new assetsloader(flower_wallpaper, 732, 1000);
const custom_made_flower_wallpaper_loader = new assetsloader(
  custom_made_flower_wallpaper,
  679,
  482
);
const rose_chain_loader = new assetsloader(rose_chain, 675, 203);
const button_flower_loader = new assetsloader(button_flower, 120, 120);
const border_loader = new assetsloader(border, 2700, 360.54);

export {
  flowers_loader,
  garland_loader,
  background_loader,
  wallpaper_loader,
  flower_wallpaper_loader,
  custom_made_flower_wallpaper_loader,
  rose_chain_loader,
  button_flower_loader,
  border_loader
};
