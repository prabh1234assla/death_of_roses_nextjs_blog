import bullying from "./../../../assets/thoughts/[slug]/bullying.gif"
import confidence from "./../../../assets/thoughts/[slug]/confidence.gif"
import dreams from "./../../../assets/thoughts/[slug]/dreams.gif"
import fake_beauty from "./../../../assets/thoughts/[slug]/fake-beauty.gif"
import fake_smile from "./../../../assets/thoughts/[slug]/fake-smile.gif"
import greed from "./../../../assets/thoughts/[slug]/greed.gif"
import heartbreak from "./../../../assets/thoughts/[slug]/heartbreak.gif"
import love from "./../../../assets/thoughts/[slug]/love.gif"
import realization from "./../../../assets/thoughts/[slug]/realization.gif"
import soul from "./../../../assets/thoughts/[slug]/soul.gif"
import suicide from "./../../../assets/thoughts/[slug]/suicide.gif"

import assetsloader from "@/components/assetsloader"

const width = 750
const height = 750

const bullying_loader = new assetsloader(bullying, width, height)
const confidence_loader = new assetsloader(confidence, width, height)
const dreams_loader = new assetsloader(dreams, width, height)
const fake_beauty_loader = new assetsloader(fake_beauty, width, height)
const fake_smile_loader = new assetsloader(fake_smile, width, height)
const greed_loader = new assetsloader(greed, width, height)
const heartbreak_loader = new assetsloader(heartbreak, width, height)
const love_loader = new assetsloader(love, width, height)
const realization_loader = new assetsloader(realization, width, height)
const soul_loader = new assetsloader(soul, width, height)
const suicide_loader = new assetsloader(suicide, width, height)

export {
    bullying_loader,
    confidence_loader,
    dreams_loader,
    fake_beauty_loader,
    fake_smile_loader,
    greed_loader,
    heartbreak_loader,
    love_loader,
    realization_loader,
    soul_loader,
    suicide_loader
}