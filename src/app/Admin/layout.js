import Dashboard from "../components/Admin/Dashboard/Dashboard";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-grow">{children}</main>
    </div>
  );
}