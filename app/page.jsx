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
        <div className="px-4 py-14">
          <h2 className="font-Lato font-semibold text-[26px] text-neutral-800">Popular Categories</h2>
          <PopularCategory />
          <BestOffers />
          <NewGoods />
        </div>
      </div>
    </>
  )
}

export default page