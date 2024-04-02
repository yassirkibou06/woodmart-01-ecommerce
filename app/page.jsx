import Footer from "@/components/footer/Footer";
import MainContent from "@/components/main/MainContent";
import PopularCategory from "@/components/main/PopularCategory";


const page = () => {
  return (
    <>
      <div className="main bg-[#f6f6f6] h-fit">
        <MainContent />
        <div className="px-4 py-14">
          <h2 className="font-semibold text-3xl">Popular Categories</h2>
          <PopularCategory />
        </div>
      </div>
    </>
  )
}

export default page