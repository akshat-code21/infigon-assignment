import Navbar from "@/components/Header/Navbar"
import "./globals.css"
import ReportHeader from "@/components/Header/ReportHeader"
import CareerOptionsSection from "@/components/Career/CareerOptionsSelection"
import InputDesign from "@/components/InputDesign"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-10 px-4 md:px-6 lg:px-8">
        <ReportHeader />
        <CareerOptionsSection />
      </div>
      <div className="flex w-full">
        <InputDesign />
      </div>
    </>
  )
}
