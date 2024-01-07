import Layout from "./layout"; // Assuming your Layout component is in a file named 'layout.js'
import NavbarComponent from "@/app/ui/navbar";
import FooterComponent from "@/app/ui/footer";

const Page = () => {
  return (
    <Layout>
      <NavbarComponent />
      {/* page content */}
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl">Welcome to Yumify!</h1>
        {/* Other components or content */}
      </div>
      <FooterComponent />
    </Layout>
  );
};

export default Page;
