import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-12 gap-1">
      <Link
        to={currentPage > 1 ? `/page/${currentPage - 1}` : '#'}
        className={`w-8 h-8 flex items-center justify-center border border-black text-white bg-black ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
        }`}
      >
        &lt;
      </Link>

      {pageNumbers.map((num) => (
        <Link
          key={num}
          to={`/page/${num}`}
          className={`w-8 h-8 flex items-center justify-center border border-black ${
            currentPage === num ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          {num}
        </Link>
      ))}

      <Link
        to={currentPage < totalPages ? `/page/${currentPage + 1}` : '#'}
        className={`w-8 h-8 flex items-center justify-center border border-black text-white bg-black ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
        }`}
      >
        &gt;
      </Link>
    </div>
  );
};

export default Pagination;
