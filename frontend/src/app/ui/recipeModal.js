export default function RecipeModal({ children }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="bg-white p-4 md:p-8 lg:p-12 border border-gray-300 shadow-xl rounded-lg w-full max-w-2xl m-4">
        {children}
      </div>
    </div>
  );
}
