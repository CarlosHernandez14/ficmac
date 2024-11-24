import FooterGeneral from "../components/Footer/FooterGeneral";
import NavbarGeneral from "../components/Navbar/NavbarGeneral";
import FlotadorDonacion from "../components/Donacion/FlotadorDonacion";

export default function UsuariosLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarGeneral />
      <main className="flex-grow">{children}</main>
      <FooterGeneral />
      <FlotadorDonacion />
    </div>
  );
}
