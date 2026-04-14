export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">
        
        <h1 className="text-3xl font-bold text-gray-800">
          🏋️ Gym Management System
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your members easily
        </p>

        <div className="mt-6 space-y-3">
          <a
            href="/add-member"
            className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            ➕ Add Member
          </a>

          <a
            href="/members"
            className="block bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            📋 View Members
          </a>
        </div>
      </div>

    </div>
  );
}