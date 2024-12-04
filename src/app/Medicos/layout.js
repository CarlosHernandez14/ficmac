import FooterGeneral from "../components/Footer/FooterGeneral";
import NavbarGeneral from "../components/Navbar/NavbarGeneral";
import FlotadorDonacion from "../components/Donacion/FlotadorDonacion";

export default function MedicosLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow mt-24">{children}</main>
    </div>
  );
}
