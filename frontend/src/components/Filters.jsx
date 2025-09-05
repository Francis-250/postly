import { useState } from "react";
import { Menu, Search, Grid, List } from "lucide-react";
import { filters } from "../assets/asset.js";

export default function Filters() {
  const [count] = useState(200);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="mt-6 lg:mt-10 px-4 lg:px-0">
      <div className="hidden lg:flex justify-between items-center">
        <section className="flex gap-6 items-center">
          <div className="flex items-center gap-2 border rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <List size={16} />
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="text-gray-700">SHOWING</span>
            <span className="text-blue-500 font-bold">{count} RESULTS</span>
          </div>
          <div className="flex items-center">
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
              <option value="">SORT BY</option>
              {filters.map((item, i) => (
                <option value={item.value} key={i}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 outline-none text-sm placeholder-gray-500 bg-transparent w-48"
            placeholder="SEARCH"
          />
          <button className="px-4 py-2.5 bg-[#386389] text-white hover:bg-[#2d5270] transition-colors flex items-center justify-center">
            <Search size={16} />
          </button>
        </section>
      </div>
      <div className="lg:hidden space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="text-gray-700">SHOWING</span>
            <span className="text-blue-500 font-bold">{count}</span>
          </div>
          <button className="p-2 text-gray-600">
            <Menu size={20} />
          </button>
        </div>
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2.5 outline-none text-sm placeholder-gray-500 bg-transparent"
            placeholder="SEARCH"
          />
          <button className="px-4 py-2.5 bg-[#386389] text-white flex items-center justify-center">
            <Search size={16} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 border rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              <Grid size={14} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              <List size={14} />
            </button>
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 bg-white outline-none">
            <option value="">SORT BY</option>
            {filters.map((item, i) => (
              <option value={item.value} key={i}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="hidden md:flex lg:hidden flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-500"
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-500"
                }`}
              >
                <List size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="text-gray-700">SHOWING</span>
              <span className="text-blue-500 font-bold">{count} RESULTS</span>
            </div>
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">SORT BY</option>
            {filters.map((item, i) => (
              <option value={item.value} key={i}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm max-w-md ml-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 outline-none text-sm placeholder-gray-500 bg-transparent"
            placeholder="SEARCH"
          />
          <button className="px-4 py-2.5 bg-[#386389] text-white hover:bg-[#2d5270] transition-colors flex items-center justify-center">
            <Search size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
