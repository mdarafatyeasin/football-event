import Image from "next/image"
import logo from "../../public/logo.png"

const Navbar = () => {
  return (
    <nav className="w-full  top-0 left-0 z-50 px-6 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Logo container with V-shape that extends outside navbar */}
        <div className="relative -mb-18 flex justify-center">
          {/* Logo container div */}
          <div className="relative w-40 h-40 flex items-center justify-center p-2">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Football League Logo"
              fill
              className="object-contain p-2 z-10"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
