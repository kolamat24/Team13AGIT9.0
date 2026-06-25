import DashboardLayout from "../layout/DashboardLayout";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaArrowDown,
  FaBolt,
} from "react-icons/fa";

function CostAnalysis() {

  return (
    <DashboardLayout>

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Cost Analysis 💰
        </h1>

        <p className="text-gray-500 mt-1">
          Understand your energy spending and savings
        </p>
      </div>


      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">


        <div className="bg-white p-6 rounded-2xl shadow-sm border">

          <div className="flex justify-between">

            <div>
              <p className="text-gray-500 text-sm">
                Current Bill
              </p>

              <h2 className="text-2xl font-bold mt-2">
                ₦54,200
              </h2>
            </div>

            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
              <FaMoneyBillWave />
            </div>

          </div>

        </div>



        <div className="bg-white p-6 rounded-2xl shadow-sm border">

          <div className="flex justify-between">

            <div>
              <p className="text-gray-500 text-sm">
                Monthly Change
              </p>

              <h2 className="text-2xl font-bold mt-2">
                -12%
              </h2>
            </div>

            <div className="bg-green-50 text-green-600 p-3 rounded-xl">
              <FaArrowDown />
            </div>

          </div>

        </div>



        <div className="bg-white p-6 rounded-2xl shadow-sm border">

          <div className="flex justify-between">

            <div>
              <p className="text-gray-500 text-sm">
                Estimated Savings
              </p>

              <h2 className="text-2xl font-bold mt-2">
                ₦11,000
              </h2>
            </div>

            <div className="bg-yellow-50 text-yellow-600 p-3 rounded-xl">
              <FaBolt />
            </div>

          </div>

        </div>


      </div>



      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


        {/* MONTHLY REPORT */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">

          <h2 className="font-semibold text-lg mb-4">
            Monthly Spending Report
          </h2>


          <div className="space-y-5">


            <div>
              <div className="flex justify-between text-sm mb-2">

                <span>Electricity Usage</span>
                <span>70%</span>

              </div>

              <div className="bg-gray-200 rounded-full h-3">

                <div className="bg-blue-600 h-3 rounded-full w-[70%]">
                </div>

              </div>

            </div>



            <div>
              <div className="flex justify-between text-sm mb-2">

                <span>Peak Hour Cost</span>
                <span>45%</span>

              </div>

              <div className="bg-gray-200 rounded-full h-3">

                <div className="bg-green-500 h-3 rounded-full w-[45%]">
                </div>

              </div>

            </div>


          </div>


        </div>



        {/* AI ADVICE */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">


          <h2 className="font-semibold text-lg mb-4">
            Smart Saving Tips 🤖
          </h2>


          <div className="space-y-4">


            <div className="bg-blue-50 p-4 rounded-xl">

              <p className="font-medium">
                Reduce AC usage
              </p>

              <p className="text-sm text-gray-600 mt-1">
                You can save about ₦3,500 monthly.
              </p>

            </div>



            <div className="bg-green-50 p-4 rounded-xl">

              <p className="font-medium">
                Use energy efficient devices
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Lower your long-term electricity cost.
              </p>

            </div>



          </div>


        </div>


      </div>



      {/* PREDICTION CARD */}

      <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl">

        <div className="flex items-center gap-3">

          <FaChartLine className="text-2xl"/>

          <div>

            <h2 className="font-bold text-lg">
              Next Month Prediction
            </h2>

            <p className="text-sm opacity-90">
              Your estimated bill could drop to ₦48,000 if you follow the recommendations.
            </p>

          </div>

        </div>

      </div>


    </DashboardLayout>
  );
}

export default CostAnalysis;