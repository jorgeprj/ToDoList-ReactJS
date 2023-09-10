const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2>Filter</h2>
        <div className="filter-options">
            <div>
                <h3>STATUS</h3>
                <select 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                    className="filter-input"
                >
                    <option>All</option>
                    <option>Incomplete</option>
                    <option>Completed</option>
                </select>
            </div>
            <div>
                <h3>ORDER</h3>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter