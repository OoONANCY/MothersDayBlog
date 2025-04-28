import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages }) => {
  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className="flex justify-center mt-12">
      <nav className="inline-flex items-center">
        {/* Previous page */}
        <Link
          to={currentPage > 1 ? `/page/${currentPage - 1}` : '#'}
          className={`px-3 py-1 border border-gray-300 rounded-l-md ${
            currentPage === 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-white hover:bg-gray-50'
          }`}
          aria-disabled={currentPage === 1}
        >
          <span className="sr-only">Previous</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </Link>
        
        {/* Page numbers */}
        {pageNumbers.map((page) => (
          <Link
            key={page}
            to={`/page/${page}`}
            className={`px-3 py-1 border-t border-b border-gray-300 ${
              currentPage === page
                ? 'bg-black text-white'
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            {page}
          </Link>
        ))}
        
        {/* Next page */}
        <Link
          to={currentPage < totalPages ? `/page/${currentPage + 1}` : '#'}
          className={`px-3 py-1 border border-gray-300 rounded-r-md ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white hover:bg-gray-50'
          }`}
          aria-disabled={currentPage === totalPages}
        >
          <span className="sr-only">Next</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </nav>
    </div>
  );
};

export default Pagination;