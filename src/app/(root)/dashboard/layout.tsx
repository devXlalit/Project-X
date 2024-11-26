import DashboardNav from "./_component/DashboardNAv";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white dark:bg-gray-900">
      <DashboardNav />
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}