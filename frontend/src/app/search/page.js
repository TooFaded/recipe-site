import NavbarComponent from "@/ui/navbar";
import FooterComponent from "@/ui/footer";
import SearchBar from "@/ui/searchBar";

export default function Search() {
  return (
    <>
      <NavbarComponent />
      <main className="h-screen">
        <SearchBar />
      </main>
      <FooterComponent />
    </>
  );
}
