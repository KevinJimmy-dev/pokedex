import "./pagination.css";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  return (
    <div className="pagination-container">
      <div>
        <button onClick={onLeftClick} className="arrow">
          <div className="arrow-direction">⬅</div>
        </button>
      </div>

      <div className="pages">
        {page} de {totalPages}
      </div>

      <div>
        <button onClick={onRightClick} className="arrow">
          <div className="arrow-direction">➡</div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
