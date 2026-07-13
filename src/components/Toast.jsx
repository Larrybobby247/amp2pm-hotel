const Toast = ({ show, message }) => {
  return (
    <div className={`fixed bottom-6 right-6 z-[9999] transform transition-all duration-500 ${
      show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}>
      <div className="bg-navy text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-amber/20">
        <i className="fas fa-check-circle text-amber text-xl"></i>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;