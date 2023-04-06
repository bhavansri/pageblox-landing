const Modal = ({ showModal, onModalClose }) => (
  <div
    className={` ${
      showModal ? "block" : "hidden"
    } fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center`}
  >
    <div className="bg-slate-100 w-96 py-6 px-4 rounded">
      {/* Modal content */}
      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-black font-semibold mb-4">
          Double Click on the screen to add a comment!
        </h1>
      </div>
      {/* Close button */}
      <button
        className="mt-6 uppercase w-full bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded"
        onClick={onModalClose}
      >
        Ok
      </button>
    </div>
  </div>
);

export default Modal;
