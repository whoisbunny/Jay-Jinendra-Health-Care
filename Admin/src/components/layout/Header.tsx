import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  return (
    <header className="shadow-md bg-gray-100 dark:bg-gray-900 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
