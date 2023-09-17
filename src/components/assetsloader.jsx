class assetsloader{
    asset = null
    height = 0
    width = 0

    constructor(asset, width, height){
        this.asset = asset
        this.height = height
        this.width = width
    }

    getAsset(){
        return this.asset
    }

    getHeight(){
        return this.height
    }

    getWidth(){
        return this.width
    }
}

export default assetsloader