"use client";
import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full max-w-xl mx-auto my-8 p-6 bg-white border border-red-500/30 rounded-2xl shadow-xl space-y-4 text-left animate-in">
          <div className="flex items-center gap-3 text-red-650">
            <AlertTriangle size={32} />
            <div>
              <h2 className="text-lg font-bold font-playfair text-stone-900">
                Đã xảy ra lỗi hiển thị trắc nghiệm
              </h2>
              <p className="text-xs text-stone-550">
                Ứng dụng phát hiện lỗi runtime trong giao diện bài kiểm tra.
              </p>
            </div>
          </div>

          <div className="p-4 bg-stone-100 border border-stone-200 rounded-xl">
            <p className="text-xs font-bold text-stone-500 uppercase mb-2">Chi tiết lỗi:</p>
            <pre className="text-xs text-red-700 overflow-auto max-h-48 font-mono leading-relaxed whitespace-pre-wrap">
              {this.state.error?.stack || this.state.error?.message || String(this.state.error)}
            </pre>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => {
                localStorage.removeItem("studymaster_active_quiz_state");
                window.location.reload();
              }}
              className="px-4 py-2 rounded-lg border border-stone-300 text-stone-600 text-xs font-semibold hover:bg-stone-100 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw size={12} />
              Xóa Cache & Tải lại
            </button>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 rounded-lg bg-red-700 hover:bg-red-650 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Thử lại
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
