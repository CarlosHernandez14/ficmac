import FooterGeneral from "../components/Footer/FooterGeneral";
import NavbarGeneral from "../components/Navbar/NavbarGeneral";

export default function UsuariosLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarGeneral />
      <main className="flex-grow">{children}</main>
      <FooterGeneral />
    </div>
  );
}