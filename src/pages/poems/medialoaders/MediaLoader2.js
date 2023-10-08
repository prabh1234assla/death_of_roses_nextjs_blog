import media2 from "./../../../assets/poems/page2/media2.png"
import media3 from "./../../../assets/poems/page2/media3.svg"
import media5 from "./../../../assets/poems/page2/media5.png"
import media7 from "./../../../assets/poems/page2/media7.png"
import media9 from "./../../../assets/poems/page2/media9.png"
import media10 from "./../../../assets/poems/page2/media10.svg"
import media12 from "./../../../assets/poems/page2/media12.png"
import media14 from "./../../../assets/poems/page2/media14.svg"
import media15 from "./../../../assets/poems/page2/media15.svg"
import media17 from "./../../../assets/poems/page2/media17.png"
import media18 from "./../../../assets/poems/page2/media18.svg"
import media19 from "./../../../assets/poems/page2/media19.svg"
import media21 from "./../../../assets/poems/page2/media21.svg"
import media22 from "./../../../assets/poems/page2/media22.svg"
import media24 from "./../../../assets/poems/page2/media24.svg"

import assetsloader from "../../../components/assetsloader"

const width = 300
const height = 300

const media2_loader = new assetsloader(media2, width, height)
const media3_loader = new assetsloader(media3, width, height)
const media5_loader = new assetsloader(media5, width*1.2, height*1.2)
const media7_loader = new assetsloader(media7, width, height)
const media9_loader = new assetsloader(media9, width, height)
const media10_loader = new assetsloader(media10, width*1.15, height*1.15)
const media12_loader = new assetsloader(media12, width, height)
const media14_loader = new assetsloader(media14, width, height)
const media15_loader = new assetsloader(media15, width, height)
const media17_loader = new assetsloader(media17, width, height)
const media18_loader = new assetsloader(media18, width, height)
const media19_loader = new assetsloader(media19, width, height)
const media21_loader = new assetsloader(media21, width, height)
const media22_loader = new assetsloader(media22, width*1.3, height*1.3)
const media24_loader = new assetsloader(media24, width, height)

export default function *media_loader() {
    yield media2_loader 
    yield media3_loader 
    yield media5_loader 
    yield media7_loader 
    yield media9_loader 
    yield media10_loader
    yield media12_loader
    yield media14_loader
    yield media15_loader
    yield media17_loader
    yield media18_loader
    yield media19_loader
    yield media21_loader
    yield media22_loader
    return media24_loader
}