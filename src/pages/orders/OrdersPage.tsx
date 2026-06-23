export default function OrdersPage() {
  return (
    <div>
      <h1 className="page-title">Orders</h1>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#1001</td>
              <td>Anna</td>
              <td>
                <span className="status pending">
                  Preparing
                </span>
              </td>
              <td>₹250</td>
            </tr>

            <tr>
              <td>#1002</td>
              <td>John</td>
              <td>
                <span className="status completed">
                  Delivered
                </span>
              </td>
              <td>₹450</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}