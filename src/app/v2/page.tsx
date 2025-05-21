"use clint"
import "../../app/page.css"
import Banner from "../../components/Banner"
import Navbar from "@/components/Navbar"
import ContentBox from "@/components/ContentBox"
import Gallery from "@/components/Gallery"

const Page = () => {
  return (
    <div className="v2-main min-h-screen text-white">
      <Navbar/>
      <Banner/>
      {/* Content Section */}
      <ContentBox/>
      <Gallery/>
    </div>
  )
}

export default Page
