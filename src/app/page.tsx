import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Featured Products Section - To be built in next phase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Curated Selection</h2>
              <p className="text-secondary">Handpicked for exceptional quality and design.</p>
            </div>
            <button className="text-sm font-semibold underline underline-offset-8">View All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project: Build high-end ProductCard components here */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/5] bg-gray-50 rounded-3xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
