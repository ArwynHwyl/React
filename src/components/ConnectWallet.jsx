import React from 'react';
import { Wallet } from 'lucide-react';
// นำเข้า useNavigate สำหรับการนำทางกลับไปหน้าหลัก
import { useNavigate } from 'react-router-dom';

const ConnectWallet = () => {
  // สร้าง navigate function
  const navigate = useNavigate();
  
  // ข้อมูล wallet ที่รองรับ
  const walletOptions = [
    { name: 'MetaMask', icon: '🦊' },
    { name: 'WalletConnect', icon: '🔗' },
    { name: 'Coinbase Wallet', icon: '💰' },
    { name: 'Trust Wallet', icon: '🔒' }
  ];

  // ฟังก์ชันจัดการการเชื่อมต่อ wallet
  const handleWalletConnect = (walletName) => {
    console.log(`Connecting to ${walletName}...`);
    // ส่วนนี้จะเพิ่ม logic การเชื่อมต่อ wallet จริงๆ ภายหลัง
  };

  // ฟังก์ชันสำหรับกลับไปหน้าหลัก
  const handleBack = () => {
    navigate('/');
  };

  return (
    // คอนเทนเนอร์หลักแบบ full screen และจัดวาง content ตรงกลาง
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* กล่องสีขาวที่มี content */}
      <div className="bg-white rounded-xl p-8 shadow-sm max-w-md w-full relative">
        {/* ปุ่มกลับไปหน้าหลัก */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900"
        >
          ← Back
        </button>
        
        {/* ส่วนหัวของหน้า Connect Wallet */}
        <div className="text-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
            <Wallet className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Connect Wallet</h2>
          <p className="text-gray-600">Choose your preferred wallet to connect to DeBank</p>
        </div>

        {/* รายการ wallet ที่รองรับ */}
        <div className="space-y-3">
          {walletOptions.map((wallet) => (
            <button
              key={wallet.name}
              className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => handleWalletConnect(wallet.name)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{wallet.icon}</span>
                <span className="font-medium">{wallet.name}</span>
              </div>
              {/* ไอคอนลูกศรชี้ไปทางขวา */}
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ))}
        </div>

        {/* ข้อความด้านล่าง */}
        <p className="text-sm text-gray-500 text-center mt-6">
          By connecting a wallet, you agree to DeBank's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default ConnectWallet;