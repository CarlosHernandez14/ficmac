import SidebarAdmin from "../components/Admin/Dashboard/SidebarAdmin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <SidebarAdmin />
      <main className="flex-grow">{children}</main>
    </div>
  );
}