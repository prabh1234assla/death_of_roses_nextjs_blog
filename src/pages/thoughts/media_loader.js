import media1 from "./../../assets/thoughts/media1.svg"
import media2 from "./../../assets/thoughts/media2.svg"
import media3 from "./../../assets/thoughts/media3.svg"
import media4 from "./../../assets/thoughts/media4.svg"
import media5 from "./../../assets/thoughts/media5.svg"
import media6 from "./../../assets/thoughts/media6.svg"
import media7 from "./../../assets/thoughts/media7.svg"
import media8 from "./../../assets/thoughts/media8.svg"
import media9 from "./../../assets/thoughts/media9.svg"
import media10 from "./../../assets/thoughts/media10.svg"
import media11 from "./../../assets/thoughts/media11.svg"

import assetsloader from "../../components/assetsloader"

const width = 72.43
const height = 73.11

const media1_loader = new assetsloader(media1, width, height)
const media2_loader = new assetsloader(media2, width, height)
const media3_loader = new assetsloader(media3, width, height)
const media4_loader = new assetsloader(media4, width, height)
const media5_loader = new assetsloader(media5, width, height)
const media6_loader = new assetsloader(media6, width, height)
const media7_loader = new assetsloader(media7, width, height)
const media8_loader = new assetsloader(media8, width, height)
const media9_loader = new assetsloader(media9, width, height)
const media10_loader = new assetsloader(media10, width, height)
const media11_loader = new assetsloader(media11, width, height)

export default function *media_loader() {
    yield media1_loader
    yield media2_loader
    yield media3_loader
    yield media4_loader
    yield media5_loader
    yield media6_loader
    yield media7_loader
    yield media8_loader
    yield media9_loader
    yield media10_loader
    return media11_loader
}