import Sidebar from "../../components/layout/Sidebar";

export default function DashboardPage(){
    return(
        <div className="flex">
            <Sidebar/>

            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>
                <div className="grid  grid-cols-3 gap-6 mt-8">
                    <div className="bg-white shadow rounded-xl p-6">
                        <h3>Total Orders</h3>
                        <p className="text-2xl font-bold">
                            0
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6">
                        <h3>Total Revenue</h3>
                        <p className="text-2xl font-bold">
                            ₹0
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6">
                        <h3>Average Rating</h3>
                        <p className="text-2xl font-bold">
                            ⭐ 0
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}