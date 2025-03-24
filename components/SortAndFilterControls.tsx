interface SortAndFilterControlsProps {
  filterMode: "union" | "intersection"
  onFilterModeChange: (mode: "union" | "intersection") => void
  searchQuery: string
  onSearchChange: (query: string) => void
  projectCount: number
}

export function SortAndFilterControls({
  filterMode,
  onFilterModeChange,
  searchQuery,
  onSearchChange,
  projectCount
}: SortAndFilterControlsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">Search</label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              id="search"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 sm:text-sm border-gray-300 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">Specialization-filter:</span>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => onFilterModeChange("intersection")}
                className={`px-3 py-1 text-sm rounded-md ${filterMode === "intersection" ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}
              >
                Intersection
              </button>
              <button
                type="button"
                onClick={() => onFilterModeChange("union")}
                className={`px-3 py-1 text-sm rounded-md ${filterMode === "union" ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}
              >
                Union
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Showing {projectCount} project{projectCount !== 1 ? 's' : ''}
      </div>
    </div>
  )
}