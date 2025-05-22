"use clint"
import "./page.css"
import Navbar from "@/components/Navbar"
import ContentBox from "@/components/ContentBox"
import Gallery from "@/components/Gallery"
import Banner from "@/components/Banner"

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
