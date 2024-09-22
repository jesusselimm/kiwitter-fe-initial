export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-10">
        {children}
      </main>
    </div>
  );
}
