import FooterGeneral from "../components/Footer/FooterGeneral";
import NavbarGeneral from "../components/Navbar/NavbarGeneral";
import FlotadorDonacion from "../components/Donacion/FlotadorDonacion";
import SidebarMedicos from "../components/Medicos/Dashboard/SidebarMedicos";

export default function MedicosLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <SidebarMedicos/>
      <main className="flex-grow ">{children}</main>
    </div>
  );
}
