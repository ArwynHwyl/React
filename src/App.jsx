import React, { useState } from 'react';
import { Wallet, ChevronDown, Search, TrendingUp, Settings, Bell } from 'lucide-react';
// นำเข้า useNavigate สำหรับการนำทางระหว่างหน้า
import { useNavigate } from 'react-router-dom';
import './index.css'

const DeBankInterface = () => {
  // state สำหรับจัดการ tab ที่กำลังแสดงผล
  const [activeTab, setActiveTab] = useState('overview');
  // สร้าง navigate function สำหรับการนำทางไปยังหน้าต่างๆ
  const navigate = useNavigate();
  
  // ข้อมูล mock สำหรับแสดงยอดเงินรวม
  const mockBalance = {
    total: '$12,458.32',
    change: '+2.4%'
  };

  // ข้อมูล mock สำหรับแสดงรายการ token
  const mockTokens = [
    { name: 'Ethereum', symbol: 'ETH', balance: '1.245 ETH', value: '$2,456.78', change: '+3.2%' },
    { name: 'USD Coin', symbol: 'USDC', balance: '1,000 USDC', value: '$1,000.00', change: '0%' }
  ];

  // ฟังก์ชันสำหรับจัดการการคลิกปุ่ม Connect Wallet
  const handleConnectWallet = () => {
    // นำทางไปยังหน้า connect-wallet
    navigate('/connect-wallet');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar ด้านบน */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* ส่วนซ้ายของ Navbar */}
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">DeBank</h1>
            <div className="flex items-center space-x-4">
              {/* ปุ่ม Explore พร้อมไอคอน dropdown */}
              <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900">
                <span>Explore</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {/* ช่องค้นหา */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tokens, addresses..."
                  className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64"
                />
              </div>
            </div>
          </div>
          {/* ส่วนขวาของ Navbar */}
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-600" />
            <Settings className="w-5 h-5 text-gray-600" />
            {/* ปุ่ม Connect Wallet พร้อม event handler */}
            <button 
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={handleConnectWallet}
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* เนื้อหาหลัก */}
      <main className="max-w-7xl mx-auto mt-8 px-4">
        {/* ส่วนแสดงภาพรวมพอร์ตโฟลิโอ */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          {/* ส่วนแสดงยอดเงินรวมและปุ่มดำเนินการ */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{mockBalance.total}</h2>
              <div className="flex items-center mt-1">
                <span className="text-green-500 text-sm">{mockBalance.change}</span>
                <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
              </div>
            </div>
            {/* ปุ่ม Send และ Receive */}
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200">
                Send
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200">
                Receive
              </button>
            </div>
          </div>

          {/* แถบ Tab สำหรับเลือกมุมมอง */}
          <div className="flex space-x-4 border-b mb-6">
            {['Overview', 'Tokens', 'NFTs', 'History'].map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-1 ${
                  activeTab === tab.toLowerCase()
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* รายการ Token */}
          <div className="space-y-4">
            {mockTokens.map((token) => (
              <div
                key={token.symbol}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <h3 className="font-medium">{token.name}</h3>
                    <p className="text-sm text-gray-500">{token.balance}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{token.value}</p>
                  <p className={`text-sm ${
                    token.change.startsWith('+') ? 'text-green-500' : 'text-gray-500'
                  }`}>
                    {token.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeBankInterface;