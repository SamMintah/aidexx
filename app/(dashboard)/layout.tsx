import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-[80]">
        <Sidebar/>
      </div>
      <main className="md:pl-64 h-full flex flex-col">
        <Navbar />
        <div className='flex-grow pb-4'>
        {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
