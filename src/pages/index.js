import _Home from './home'
import image from "@/assets/images/about/wallpaper.png"
import Image_Distortion_Pixel_Effects from '@/components/home/Image_Distortion_Pixel_Effects'

export default function Home() {

  return (
    <>
      <Image_Distortion_Pixel_Effects img_loader={image} on_click_type={3} />
      <Image_Distortion_Pixel_Effects img_loader={image} on_click_type={3} />
      <Image_Distortion_Pixel_Effects img_loader={image} on_click_type={3} />
      <Image_Distortion_Pixel_Effects img_loader={image} on_click_type={3} />
      <Image_Distortion_Pixel_Effects img_loader={image} on_click_type={3} />
      {/* <_Home /> */}
    </>
  )
}