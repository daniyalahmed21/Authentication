export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 h-screen justify-center items-center bg-sky-600">
      {children}
    </div>
  );
}
