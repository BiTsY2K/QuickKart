import { Grid, List } from "lucide-react";
import { Button } from "./ui/button"

const ViewSwitcher = ({ viewMode, setViewMode }: {
  viewMode: "GRID" | "LIST",
  setViewMode: (mode: "GRID" | "LIST") => void
}) => {
  return (
    <div className="hidden md:flex items-center overflow-hidden">
      <Button variant={viewMode === "GRID" ? "default" : "ghost"} onClick={() => setViewMode("GRID")}
        className={`h-9 border-t border-b border-l rounded-none rounded-l-[2px]  ${viewMode === "GRID" ? "border-[#18181b]" : "border-gray-300"}  border-r border-r-gray-300`}
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button variant={viewMode === "LIST" ? "default" : "ghost"} onClick={() => setViewMode("LIST")}
        className={`h-9 border-t border-b border-r rounded-none rounded-r-[2px]  ${viewMode === "LIST" ? "border-[#18181b]" : "border-gray-300"}`}
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default ViewSwitcher;