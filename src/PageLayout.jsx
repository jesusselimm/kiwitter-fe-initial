export default function PageLayout({ children }) {
  return (
    <div className="relative">
      <div className="sticky top-0 bg-white shadow-md">
        <header className="container mx-auto p-6">burası header</header>
      </div>
      <div className="pt-6 pb-12">
        <main className="container mx-auto bg-white min-h-96 rounded-xl shadow-xl p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
