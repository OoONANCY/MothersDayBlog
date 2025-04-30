const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-8 space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 text-sm border ${
            currentPage === page ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
