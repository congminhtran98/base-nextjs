export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NextJS News. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
