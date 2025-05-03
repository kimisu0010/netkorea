import React from "react";

function App() {
  return (
    <div className="p-6 grid gap-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
        <h2 className="text-xl font-bold">오늘의 사회지표</h2>
        <p>행복지수 ▲2.1% | 실업률 ▼0.3%</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {["기본소득제", "주거안정화 패키지", "기후 연동 세금 개편안"].map(
          (title, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-2xl p-4 cursor-pointer"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500">예상 지표 변화 보기</p>
              <button className="mt-2 w-full border py-1 rounded">
                시뮬레이션 보기
              </button>
            </div>
          )
        )}
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-lg font-bold mb-2">DAO 참여 현황</h3>
        <p className="text-sm">광주 DAO 활동중 · 환경 DAO 투표 참여 가능</p>
        <button className="mt-2 px-4 py-1 bg-black text-white rounded">
          지금 참여하기
        </button>
      </div>
    </div>
  );
}

export default App;
