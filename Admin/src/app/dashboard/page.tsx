
const DashboardPage = () => {
  return (
    <div className="min-h-screen w-full ">
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Card 1</h2>
            <p className="text-gray-600">This is a sample card.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Card 2</h2>
            <p className="text-gray-600">This is another sample card.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Card 3</h2>
            <p className="text-gray-600">This is yet another sample card.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
