import NavbarGeneral from "../components/Navbar/NavbarGeneral";

export default function UsuariosLayout({ children }) {
  return (
    <div>
      <NavbarGeneral />
      <main>{children}</main>
    </div>
  );
}