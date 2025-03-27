import Navbar from "@/components/Header/Navbar"
import "./globals.css"
import ReportHeader from "@/components/Header/ReportHeader"
import CareerOptionsSection from "@/components/Career/CareerOptionsSelection"
import InputDesign from "@/components/InputDesign"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <ReportHeader />
        <CareerOptionsSection />
      </div>
      <div className="flex">
        <InputDesign />
      </div>
    </>
  )
}
