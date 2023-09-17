import github from "./../assets/images/contacts/github.svg"
import instagram from "./../assets/images/contacts/instagram.svg"
import linkedIn from "./../assets/images/contacts/linkedIn.svg"
import reddit from "./../assets/images/contacts/reddit.svg"
import twitter from "./../assets/images/contacts/twitter.svg"

import assetsloader from "./assetsloader"

const multiplier = 1.7
const github_loader = new assetsloader(github, 20.42*multiplier, 19.91*multiplier)
const instagram_loader = new assetsloader(instagram, 19.84*multiplier, 19.84*multiplier)
const linkedIn_loader = new assetsloader(linkedIn, 21.13*multiplier, 21.13*multiplier)
const reddit_loader = new assetsloader(reddit, 19.02*multiplier, 16.98*multiplier)
const twitter_loader = new assetsloader(twitter, 21.91*multiplier, 17.65*multiplier)

function *contactsAssetsGenerator(){
    yield linkedIn_loader
    yield instagram_loader
    yield twitter_loader
    yield reddit_loader
    return github_loader
}

export default contactsAssetsGenerator