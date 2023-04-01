const Settings = ({ email, onLogout }) => (
  <div className="flex justify-between items-center bg-gray-100 p-5 gap-5">
    <div>
      <p className="text-gray-700 font-semibold">Signed in as:</p>
      <span className="text-gray-700">{email}</span>
    </div>
    <button
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      onClick={onLogout}
    >
      Logout
    </button>
  </div>
);

export default Settings;
