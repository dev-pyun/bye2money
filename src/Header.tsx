import React, {useMemo, useState} from 'react';

type HeaderProps = {
  initialYear?: number;
  initialMonth?: number;
  onChangeMonth?: (date: Date) => void;
  locale?: string;
};

function getMonthNames(locale: string) {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'long' });
  return Array.from({ length: 12 }, (_, i) =>
    formatter.format(new Date(2020, i, 1))
  );
}

function addMonths(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}


function Header({ 
  initialYear, 
  initialMonth, 
  onChangeMonth, 
  locale = "en-US" }: HeaderProps) {
    const [cursor, setCursor] = useState<Date>(() => {
      if (initialYear && initialMonth) {
        return new Date(initialYear, initialMonth - 1, 1);
      }
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth(), 1);
    });

  const year = cursor.getFullYear();
  const monthNumber = cursor.getMonth() + 1;
  const monthName = useMemo(
    () => new Intl.DateTimeFormat(locale, { month: "long" }).format(cursor),
    [cursor, locale]
  );

  const go = (delta: number) => {
    setCursor((prev) => {
      const next = addMonths(prev, delta);
      onChangeMonth?.(next);
      return next;
    });
  };

  return (
    // class -> className으로 변경
    <header className="container-horizontal p-4 pb-20 bg-slate-200">
      <div className="logo text-3xl font-serif">
        Wise Wallet
      </div>
      <div className="container-horizontal">
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => go(-1)}>left</button>
        <div className="container-vertical text-center mx-4 font-serif">
          <p className="text-sm">{year}</p>
          <p className="text-2xl font-semibold">{monthNumber}</p>
          <p className="text-sm">{monthName}</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => go(1)}>right</button>
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