import Header from "@/components/Header";
import ProductsList from "@/components/ProductsList";
import ProductsSorter from "@/components/ProductsSorter";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <ProductsSorter />
      <div className="flex-grow overflow-auto">
        <ProductsList />
      </div>
      <SearchBar />
    </div>
  )
}