import React from 'react';

function InputForm() {
  return (
    <main>
      <div className="w-11/12 max-w-5xl mx-auto -mt-16 p-6 bg-white rounded-lg shadow-lg">
        {/* class -> className으로 변경 */}
        <div className="container-horizontal items-end space-x-4">
          <div className="container-vertical flex-grow">
            <p>일자</p>
            {/* input 태그를 /> 로 닫아줍니다. */}
            <input type="date" defaultValue="2023-08-01" className="w-full" />
          </div>
          <div className="container-vertical flex-grow">
            <p>금액</p>
            <input type="number" defaultValue="10000" className="w-full" />
          </div>
          <div className="container-vertical flex-grow">
            <p>내용</p>
            <input type="text" defaultValue="점심식사" className="w-full" />
          </div>
          <div className="container-vertical flex-grow">
            <p>결제수단</p>
            <select className="w-full">
              <option value="카드">카드</option>
              <option value="현금">현금</option>
              <option value="이체">이체</option>
            </select>
          </div>
          <div className="container-vertical flex-grow">
            <p>분류</p>
            <select className="w-full">
              <option value="식비">식비</option>
              <option value="교통">교통</option>
            </select>
          </div>
          <button className="icon-toggle-btn bg-gray-100 p-3 rounded-full hover:bg-gray-500">
            <img src="/img/check_icon.png" className="h-6 w-6" alt="등록" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default InputForm;