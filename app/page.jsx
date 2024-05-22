import Footer from "@/components/footer/Footer";
import MainContent from "@/components/main/MainContent";
import PopularCategory from "@/components/main/PopularCategory";
import BestOffers from "@/components/main/BestOffers";
import NewGoods from "@/components/main/NewGoods";


const page = () => {
  return (
    <>
      <div className="main bg-[#f6f6f6] h-fit">
        <MainContent />
        <div className="py-14">
          <h2 className="px-4 font-Lato font-semibold text-xl lg:text-[26px] text-neutral-800">Popular Categories</h2>
          <PopularCategory />
        </div>
        <div className="px-4">
          <BestOffers />
          <NewGoods />
        </div>
      </div>
    </>
  )
}

export default page