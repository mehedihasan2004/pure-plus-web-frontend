import { DoctorCard } from './doctor-card';
import { SearchAndFilterSidebar } from './search-and-filter-sidebar';

export default function Doctors() {
  const doctors = Array(8).fill(null);

  return (
    <section className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 h-full">
      <SearchAndFilterSidebar />

      <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
        <h3>Doctors</h3>

        <div className="lg:grid grid-cols-2 gap-4">
          {doctors.map((_, i: number) => (
            <DoctorCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
