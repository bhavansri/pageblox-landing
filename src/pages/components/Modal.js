const Modal = ({ showModal, onModalClose }) => (
  <div
    className={` ${
      showModal ? "block" : "hidden"
    } fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center`}
  >
    <div className="bg-slate-100 w-96 py-6 px-4 rounded">
      {/* Modal content */}
      <h1 className="text-2xl text-black font-semibold mb-4">Instructions</h1>
      <p className="text-gray-700 mb-2">
        1. <b>Double click</b> on an element to add a comment.
      </p>
      <p className="text-gray-700 mb-2">
        2. Use the <b>sidebar</b> on the right to view all comments.
      </p>
      <p className="text-gray-700 mb-2">
        2. Toggle review mode using the <b>bottom-right widget</b>.
      </p>
      {/* Close button */}
      <button
        className="mt-6 uppercase bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
        onClick={onModalClose}
      >
        Ok
      </button>
    </div>
  </div>
);

export default Modal;
