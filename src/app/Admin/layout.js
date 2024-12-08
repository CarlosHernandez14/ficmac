import SidebarAdmin from "../components/Admin/Dashboard/SidebarAdmin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      <SidebarAdmin />
      <main className="flex-grow overflow-y-scroll">{children}</main>
    </div>
  );
}