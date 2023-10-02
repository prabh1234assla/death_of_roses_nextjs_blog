import media2 from "./../../assets/poems/media2.svg"
import media3 from "./../../assets/poems/media3.svg"
import media5 from "./../../assets/poems/media5.png"
import media7 from "./../../assets/poems/media7.svg"
import media8 from "./../../assets/poems/media8.svg"
import media10 from "./../../assets/poems/media10.svg"
import media11 from "./../../assets/poems/media11.svg"
import media14 from "./../../assets/poems/media14.png"
import media15 from "./../../assets/poems/media15.png"
import media16 from "./../../assets/poems/media16.png"
import media18 from "./../../assets/poems/media18.svg"
import media19 from "./../../assets/poems/media19.svg"
import media20 from "./../../assets/poems/media20.png"
import media22 from "./../../assets/poems/media22.png"
import media23 from "./../../assets/poems/media23.png"
import rose_banner from "./../../assets/poems/rose_banner.svg"

import assetsloader from "../../components/assetsloader"

const width = 300
const height = 300

const media2_loader = new assetsloader(media2, width, height)
const media3_loader = new assetsloader(media3, width, height)
const media5_loader = new assetsloader(media5, width, height)
const media7_loader = new assetsloader(media7, width, height)
const media8_loader = new assetsloader(media8, width, height)
const media10_loader = new assetsloader(media10, width, height)
const media11_loader = new assetsloader(media11, width, height)
const media14_loader = new assetsloader(media14, width, height)
const media15_loader = new assetsloader(media15, width, height)
const media16_loader = new assetsloader(media16, width, height)
const media18_loader = new assetsloader(media18, width, height)
const media19_loader = new assetsloader(media19, width, height)
const media20_loader = new assetsloader(media20, width, height)
const media22_loader = new assetsloader(media22, width, height)
const media23_loader = new assetsloader(media23, width, height)
const rose_banner_loader = new assetsloader(rose_banner, width, height)

export default function *media_loader() {
    yield media2_loader
    yield media3_loader
    yield media5_loader
    yield media7_loader
    yield media8_loader
    yield media10_loader
    yield media11_loader
    yield media14_loader
    yield media15_loader
    yield media16_loader
    yield media18_loader
    yield media19_loader
    yield media20_loader
    yield media22_loader
    yield media23_loader
    return rose_banner_loader
}