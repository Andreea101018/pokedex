import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ page, totalPages, onPreviousClick, onNextClick }) => {
    return (
        <div className="pagination">
            <button
                onClick={onPreviousClick}
                disabled={page <= 1}
                className="pagination-button"
            >
                Previous
            </button>
            <span className="pagination-info">
                Page {page} of {totalPages}
            </span>
            <button
                onClick={onNextClick}
                disabled={page >= totalPages}
                className="pagination-button"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
