import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { SiteHeader } from "./components/site-header";
import { SearchProvider } from "@/contexts/search-context-provider";


export default function ApplicationAdminPage() {
  return (

    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
      </SidebarInset>
    </SidebarProvider>
  );
}