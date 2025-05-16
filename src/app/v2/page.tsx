"use clint"
import "../../app/page.css"
import Banner from "../../components/Banner"
import Navbar from "@/components/Navbar"
import ContentBox from "@/components/ContentBox"

const Page = () => {
  return (
    <div className="v2-main min-h-screen text-white">
      <Navbar/>
      <Banner/>
      {/* Content Section */}
      <ContentBox/>
    </div>
  )
}

export default Page
