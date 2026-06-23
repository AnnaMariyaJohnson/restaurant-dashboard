export default function DashboardPage() {
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="card">
          <div className="stats-title">Total Orders</div>
          <div className="stats-value">124</div>
        </div>

        <div className="card">
          <div className="stats-title">Revenue</div>
          <div className="stats-value">₹45,890</div>
        </div>

        <div className="card">
          <div className="stats-title">Pending Orders</div>
          <div className="stats-value">18</div>
        </div>

        <div className="card">
          <div className="stats-title">Rating</div>
          <div className="stats-value">⭐ 4.8</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-grid">

        {/* Recent Orders */}
        <div className="card">
          <h2 style={{ marginBottom: "20px" }}>
            Recent Orders
          </h2>

          <table className="table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#1001</td>
                <td>
                  <span className="status pending">
                    Preparing
                  </span>
                </td>
                <td>₹250</td>
              </tr>

              <tr>
                <td>#1002</td>
                <td>
                  <span className="status completed">
                    Ready
                  </span>
                </td>
                <td>₹450</td>
              </tr>

              <tr>
                <td>#1003</td>
                <td>
                  <span className="status completed">
                    Delivered
                  </span>
                </td>
                <td>₹320</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Side Panel */}
        <div className="card">
          <h2 style={{ marginBottom: "20px" }}>
            Top Selling Items
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              lineHeight: "2",
            }}
          >
            <li>🍔 Burger</li>
            <li>🍕 Pizza</li>
            <li>🌯 Chicken Wrap</li>
            <li>🥤 Cold Coffee</li>
            <li>🍟 French Fries</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div
        style={{
          marginTop: "24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2 style={{ marginBottom: "15px" }}>
            Customer Reviews
          </h2>

          <p>⭐⭐⭐⭐⭐ Great food!</p>
          <p>⭐⭐⭐⭐ Fast delivery</p>
          <p>⭐⭐⭐⭐⭐ Best burger in town</p>
        </div>

        <div className="card">
          <h2 style={{ marginBottom: "15px" }}>
            Today's Summary
          </h2>

          <p>Total Orders: 24</p>
          <p>Revenue: ₹8,500</p>
          <p>Cancelled Orders: 2</p>
          <p>Pending Orders: 4</p>
        </div>
      </div>
    </div>
  );
}