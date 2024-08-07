import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, LineElement, PointElement, Filler, RadialLinearScale, CategoryScale, LinearScale  } from 'chart.js';
import { Pie, Doughnut, PolarArea, Radar, Line, Bar, Bubble } from 'react-chartjs-2';

// Register the required components with Chart.js
ChartJS.register(
  Title, Tooltip, Legend,
  ArcElement, BarElement, LineElement, PointElement, Filler, RadialLinearScale,
  CategoryScale, LinearScale
);

// Example data for each chart type related to the 6 stores
const pieData = {
  labels: ['Book Store', 'Clothing Store', 'Electronics Store', 'Furniture Store', 'Food Store', 'Laptop Store'],
  datasets: [{
    label: 'Sales Distribution',
    data: [10, 15, 20, 10, 25, 20], // Example data
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const doughnutData = {
  labels: ['Book Store', 'Clothing Store', 'Electronics Store', 'Furniture Store', 'Food Store', 'Laptop Store'],
  datasets: [{
    label: 'Revenue Share',
    data: [15, 20, 25, 10, 15, 15], // Example data
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const polarData = {
  labels: ['Book Store', 'Clothing Store', 'Electronics Store', 'Furniture Store', 'Food Store', 'Laptop Store'],
  datasets: [{
    label: 'Customer Ratings',
    data: [4.5, 4.0, 3.8, 4.2, 4.3, 4.1], // Example data
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const radarData = {
  labels: ['Sales', 'Revenue', 'Customer Satisfaction', 'Growth', 'Market Share'],
  datasets: [{
    label: 'Book Store Metrics',
    data: [80, 75, 90, 85, 70], // Example data for Book Store
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Monthly Sales - Book Store',
    data: [5000, 6000, 7000, 8000, 7500, 7000, 6500], // Example data
    fill: true,
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

const barData = {
  labels: ['Book Store', 'Clothing Store', 'Electronics Store', 'Furniture Store', 'Food Store', 'Laptop Store'],
  datasets: [{
    label: 'Annual Sales',
    data: [50000, 60000, 55000, 70000, 45000, 60000], // Example data
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const horizontalBarData = {
  labels: ['Book Store', 'Clothing Store', 'Electronics Store', 'Furniture Store', 'Food Store', 'Laptop Store'],
  datasets: [{
    label: 'Profit Margin',
    data: [20, 25, 30, 15, 20, 25], // Example data
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 1
  }]
};

const bubbleData = {
  datasets: [{
    label: 'Store Performance',
    data: [
      { x: 10, y: 20, r: 15 }, // Example data for Book Store
      { x: 15, y: 10, r: 10 }, // Example data for Clothing Store
      { x: 20, y: 30, r: 20 }, // Example data for Electronics Store
      { x: 25, y: 25, r: 25 }, // Example data for Furniture Store
      { x: 30, y: 20, r: 18 }, // Example data for Food Store
      { x: 35, y: 25, r: 22 }  // Example data for Laptop Store
    ],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

export default function Dashboard() {
  return (
    <div className="font-sans leading-normal tracking-normal mt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">Store Analytics Dashboard</h1>
        <div className="space-y-12">
          {/* Pie Chart */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sales Distribution</h2>
            <div className="w-full h-80">
              <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          {/* Doughnut Chart */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Revenue Share</h2>
            <div className="w-full h-80">
              <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          {/* Polar Chart */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Ratings</h2>
            <div className="w-full h-80">
              <PolarArea data={polarData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          {/* Radar Chart */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Store Metrics</h2>
            <div className="w-full h-80">
              <Radar data={radarData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          {/* Line Chart */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Monthly Sales - Book Store</h2>
            <div className="w-full h-80">
              <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          {/* Bar Chart */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Annual Sales</h2>
            <div className="w-full h-80">
              <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          {/* Horizontal Bar Chart */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profit Margin</h2>
            <div className="w-full h-80">
              <Bar data={horizontalBarData} options={{ indexAxis: 'y', responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          {/* Bubble Chart */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Store Performance</h2>
            <div className="w-full h-80">
              <Bubble data={bubbleData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
