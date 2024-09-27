import { AllDoctors } from './all-doctors';
import { SearchAndFilterSidebar } from './search-and-filter-sidebar';

export default function Doctors() {
  return (
    <section className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 h-full">
      <SearchAndFilterSidebar />

      <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
        <AllDoctors />
      </div>
    </section>
  );
}
