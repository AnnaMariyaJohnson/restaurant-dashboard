export default function MenuPage() {
  return (
    <div>
      <div className="menu-header">
        <h1 className="page-title">
          Menu Management
        </h1>

        <button className="btn">
          Add Item
        </button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Burger</td>
              <td>₹120</td>
              <td>Fast Food</td>
            </tr>

            <tr>
              <td>Pizza</td>
              <td>₹280</td>
              <td>Italian</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}