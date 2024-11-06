import Menu from "../../components/menu";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer"

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="h-screen flex">

        <div className="w-[15%] lg:w-[18%] md:w-[17%] p-2 lg:p-4 h-screen border-r shadow-2xl bg-white">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 md:flex-col lg:flex-row lg:justify-start mt-5 lg:mt-3"
          >
            <Image
              src="/startup.jpeg"
              alt="logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="hidden lg:block md:block font-bold md:text-sm lg:text-xl">EventCrux</span>
          </Link>


          <Menu />

        </div>


        <div className="w-[85%] lg:w-[82%] md:w-[83%] bg-gray-50 overflow-y-scroll overflow-x-hidden flex flex-col h-screen">
          <Navbar />
          
          {children}

          <Footer/>
        </div>

      </div>
    </>
  );
}
