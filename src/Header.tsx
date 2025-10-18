import React from 'react';

function Header() {
  return (
    // class -> className으로 변경
    <header className="container-horizontal p-4 pb-20 bg-slate-200">
      <div className="logo text-3xl font-serif">
        Wise Wallet
      </div>
      <div className="container-horizontal">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">left</button>
        <div className="content-vertical">
          <p>2023</p>
          <p>8</p>
          <p>August</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">right</button>
      </div>
      <div className="icon-toggle-group">
        <button className="icon-toggle-btn active">
          <img src="/img/document_icon.png" className="h-5 w-5" alt="내역" />
        </button>
        <button className="icon-toggle-btn">
          <img src="/img/calendar_icon.png" className="h-5 w-5" alt="달력" />
        </button>
        <button className="icon-toggle-btn">
          <img src="/img/chart_icon.png" className="h-5 w-5" alt="통계" />
        </button>
      </div>
    </header>
  );
}

export default Header;