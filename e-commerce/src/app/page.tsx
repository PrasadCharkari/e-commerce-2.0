"use client"
import Header from "@/components/Header";
import ProductsList from "@/components/ProductsList";
import ProductsSorter from "@/components/ProductsSorter";
import SearchBar from "@/components/SearchBar";
import CustomToastContainer from "@/components/ToastContainer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-slate-100">
      <Header />
      <ProductsSorter />
      <div className="flex-grow overflow-auto">
        <ProductsList />
      </div>
      <SearchBar />
      <CustomToastContainer />
    </div>
  );
}
