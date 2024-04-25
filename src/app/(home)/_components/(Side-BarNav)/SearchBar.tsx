import { Search } from 'lucide-react';

interface SearchBarProps {
  handleSearch: (e: any) => void;
}

export const SearchBar = ({ handleSearch }: SearchBarProps) => {
  return (
    <form className="flex items-center relative">
      <input
        onChange={handleSearch}
        className="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
        placeholder="Busca un curso"
      />
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none" type="button">
        <Search className="w-5 h-5" color="#ffffff" />
      </button>
    </form>
  );
};
