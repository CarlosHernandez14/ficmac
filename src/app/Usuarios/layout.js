import FooterGeneral from "../components/Footer/FooterGeneral";
import NavbarGeneral from "../components/Navbar/NavbarGeneral";

export default function UsuariosLayout({ children }) {
  return (
    <div>
      <NavbarGeneral />
      <main>{children}</main>
      <FooterGeneral />
    </div>
  );
}