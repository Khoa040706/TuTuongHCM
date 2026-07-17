"use client";
import React, { useState } from "react";
import { Folder, FileCode, Trash2, Edit2, Play, Plus, Info, CheckCircle } from "lucide-react";

export default function FileClassSandbox() {
  // Part A: Virtual File Explorer State
  const [virtualFS, setVirtualFS] = useState([
    { path: "C:/Java/Hello.txt", isFile: true },
    { path: "C:/Java/images", isFile: false },
    { path: "C:/Java/data.bin", isFile: true }
  ]);
  const [inputPath, setInputPath] = useState("C:/Java/Hello.txt");
  const [renamePath, setRenamePath] = useState("C:/Java/NewName.txt");
  const [sandboxLogs, setSandboxLogs] = useState([
    "JVM: Lớp File được khởi tạo trên bộ nhớ đệm ảo."
  ]);

  // Part B: Filename Filter State
  const [filterExt, setFilterExt] = useState("java");
  const resourcesFiles = [
    { name: "App.java", ext: "java" },
    { name: "config.txt", ext: "txt" },
    { name: "Hello.java", ext: "java" },
    { name: "logo.png", ext: "png" },
    { name: "index.html", ext: "html" },
    { name: "Main.java", ext: "java" },
    { name: "notes.txt", ext: "txt" }
  ];

  // Helper: check file details
  const handleExists = () => {
    const cleanPath = inputPath.trim();
    const found = virtualFS.some(f => f.path.toLowerCase() === cleanPath.toLowerCase());
    setSandboxLogs(prev => [
      ...prev,
      `File file = new File("${cleanPath}");`,
      `System.out.println(file.exists()); // ➔ ${found}`
    ]);
  };

  const handleIsFile = () => {
    const cleanPath = inputPath.trim();
    const item = virtualFS.find(f => f.path.toLowerCase() === cleanPath.toLowerCase());
    const isF = item ? item.isFile : false;
    setSandboxLogs(prev => [
      ...prev,
      `File file = new File("${cleanPath}");`,
      `System.out.println(file.isFile()); // ➔ ${isF}`
    ]);
  };

  const handleCreateNewFile = () => {
    const cleanPath = inputPath.trim();
    const exists = virtualFS.some(f => f.path.toLowerCase() === cleanPath.toLowerCase());
    if (exists) {
      setSandboxLogs(prev => [
        ...prev,
        `File file = new File("${cleanPath}");`,
        `file.createNewFile(); // ➔ false (file already exists)`
      ]);
    } else {
      setVirtualFS(prev => [...prev, { path: cleanPath, isFile: true }]);
      setSandboxLogs(prev => [
        ...prev,
        `File file = new File("${cleanPath}");`,
        `file.createNewFile(); // ➔ true (file created successfully)`
      ]);
    }
  };

  const handleMkdir = () => {
    const cleanPath = inputPath.trim();
    const exists = virtualFS.some(f => f.path.toLowerCase() === cleanPath.toLowerCase());
    if (exists) {
      setSandboxLogs(prev => [
        ...prev,
        `File dir = new File("${cleanPath}");`,
        `dir.mkdir(); // ➔ false (directory already exists)`
      ]);
    } else {
      setVirtualFS(prev => [...prev, { path: cleanPath, isFile: false }]);
      setSandboxLogs(prev => [
        ...prev,
        `File dir = new File("${cleanPath}");`,
        `dir.mkdir(); // ➔ true (directory created successfully)`
      ]);
    }
  };

  const handleDelete = () => {
    const cleanPath = inputPath.trim();
    const exists = virtualFS.some(f => f.path.toLowerCase() === cleanPath.toLowerCase());
    if (!exists) {
      setSandboxLogs(prev => [
        ...prev,
        `File file = new File("${cleanPath}");`,
        `file.delete(); // ➔ false (file/directory does not exist)`
      ]);
    } else {
      setVirtualFS(prev => prev.filter(f => f.path.toLowerCase() !== cleanPath.toLowerCase()));
      setSandboxLogs(prev => [
        ...prev,
        `File file = new File("${cleanPath}");`,
        `file.delete(); // ➔ true (deleted successfully)`
      ]);
    }
  };

  const handleRename = () => {
    const oldP = inputPath.trim();
    const newP = renamePath.trim();
    const itemIdx = virtualFS.findIndex(f => f.path.toLowerCase() === oldP.toLowerCase());
    
    if (itemIdx === -1) {
      setSandboxLogs(prev => [
        ...prev,
        `File file = new File("${oldP}");`,
        `file.renameTo(new File("${newP}")); // ➔ false`
      ]);
    } else {
      setVirtualFS(prev => {
        const nextFs = [...prev];
        nextFs[itemIdx] = { ...nextFs[itemIdx], path: newP };
        return nextFs;
      });
      setSandboxLogs(prev => [
        ...prev,
        `File file = new File("${oldP}");`,
        `file.renameTo(new File("${newP}")); // ➔ true`
      ]);
      setInputPath(newP);
    }
  };

  return (
    <div className="space-y-6">
      {/* PART A: Virtual File Explorer Sandbox */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Folder className="w-5 h-5 text-sky-600" />
          <span>Mục IV & V: Trình Giả Lập Thư Mục Ảo (File Class Sandbox)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Thực thi các phương thức của lớp <code className="bg-stone-100 px-1 rounded font-mono">File</code> trên ổ đĩa ảo. Quan sát cây thư mục thay đổi và mã nguồn Java chạy tương ứng.
        </p>

        {/* Workspace Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
          {/* File Explorer Tree view */}
          <div className="lg:col-span-5 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Cây thư mục ảo (Virtual Tree)
              </span>

              <div className="space-y-2 max-h-[180px] overflow-y-auto">
                {virtualFS.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setInputPath(item.path)}
                    className="flex items-center gap-2 p-2 hover:bg-sky-50 rounded-xl cursor-pointer transition-colors text-xs font-mono border border-stone-100"
                  >
                    {item.isFile ? (
                      <FileCode className="w-4 h-4 text-sky-500 shrink-0" />
                    ) : (
                      <Folder className="w-4 h-4 text-amber-500 shrink-0" />
                    )}
                    <span className="truncate">{item.path}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 text-[10px] text-sky-800 leading-normal flex items-start gap-1.5 mt-4">
              <Info className="w-4 h-4 text-sky-500 shrink-0" />
              <span>Click vào file trong danh sách để tự động điền đường dẫn nhanh.</span>
            </div>
          </div>

          {/* Sandbox controls */}
          <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Đường dẫn tệp tin (pathname):</label>
                <input
                  type="text"
                  value={inputPath}
                  onChange={(e) => setInputPath(e.target.value)}
                  className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-855 focus:outline-none focus:border-sky-500 transition-colors shadow-sm font-mono"
                />
              </div>

              {/* Method controls grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <button
                  onClick={handleExists}
                  className="px-2.5 py-1.5 bg-white hover:bg-stone-100 text-stone-700 font-bold text-xs rounded-xl border border-stone-200 shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1 hover:scale-[1.02]"
                >
                  exists()
                </button>
                <button
                  onClick={handleIsFile}
                  className="px-2.5 py-1.5 bg-white hover:bg-stone-100 text-stone-700 font-bold text-xs rounded-xl border border-stone-200 shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1 hover:scale-[1.02]"
                >
                  isFile()
                </button>
                <button
                  onClick={handleCreateNewFile}
                  className="px-2.5 py-1.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1 hover:scale-[1.02]"
                >
                  createNewFile()
                </button>
                <button
                  onClick={handleMkdir}
                  className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1 hover:scale-[1.02]"
                >
                  mkdir()
                </button>
                <button
                  onClick={handleDelete}
                  className="px-2.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1 hover:scale-[1.02]"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  delete()
                </button>
              </div>

              {/* Rename panel */}
              <div className="border-t border-stone-200 pt-3 flex gap-2 items-end">
                <div className="flex-1">
                  <label className="text-[9px] text-stone-450 font-mono font-bold block mb-1">Đổi tên thành (renameTo):</label>
                  <input
                    type="text"
                    value={renamePath}
                    onChange={(e) => setRenamePath(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-[11px] text-stone-855 focus:outline-none focus:border-sky-500 transition-colors shadow-sm font-mono"
                  />
                </div>
                <button
                  onClick={handleRename}
                  className="px-3 py-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1 hover:scale-[1.02]"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  renameTo()
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live log output */}
        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
          Lịch sử chạy mã nguồn Java & JVM console
        </span>
        <div className="p-4 bg-stone-900 border border-stone-850 rounded-2xl font-mono text-[10.5px] text-sky-400 min-h-[100px] space-y-1.5 shadow-inner max-h-[140px] overflow-y-auto">
          {sandboxLogs.map((line, idx) => {
            let color = "text-sky-300";
            if (line.startsWith("JVM:")) color = "text-stone-500 italic";
            if (line.includes("true")) color = "text-emerald-400 font-bold";
            if (line.includes("false")) color = "text-rose-450 font-bold";
            return <div key={idx} className={color}>{line}</div>;
          })}
        </div>
      </div>

      {/* PART B: Filename Filter Simulator */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <FileCode className="w-5 h-5 text-sky-600" />
          <span>Mục V: Bộ Lọc Định Dạng File (FilenameFilter Simulator)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Nhập phần đuôi mở rộng cần lọc để xem phương thức <code className="bg-stone-100 px-1 rounded font-mono">accept(File dir, String name)</code> phân giải và sàng lọc tệp tin thế nào.
        </p>

        {/* Lọc Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Inputs & Code explanation */}
          <div className="md:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div>
              <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Nhập đuôi mở rộng cần lọc (ví dụ: java, txt, png):</label>
              <input
                type="text"
                value={filterExt}
                onChange={(e) => setFilterExt(e.target.value.trim().toLowerCase())}
                className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-855 focus:outline-none focus:border-sky-500 transition-colors shadow-sm font-mono mb-4"
              />

              <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block mb-2 font-mono">
                Cú pháp accept() được thực thi
              </span>
              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9.5px] leading-relaxed text-indigo-300 shadow-md">
{`public boolean accept(File dir, String name) {
    return name.endsWith(".${filterExt || "ext"}");
}`}
              </pre>
            </div>
          </div>

          {/* Output list showing matched files */}
          <div className="md:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Kết quả trả về của accept() trong d:/resources
              </span>

              <div className="space-y-1.5 max-h-[160px] overflow-y-auto">
                {resourcesFiles.map((file, idx) => {
                  const isMatch = filterExt && file.ext === filterExt;
                  return (
                    <div
                      key={idx}
                      className={`p-2 rounded-xl border text-[11px] font-mono flex justify-between items-center transition-all ${
                        isMatch
                          ? "bg-emerald-50 border-emerald-250 text-emerald-800 font-bold"
                          : "bg-white border-stone-150 text-stone-450"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <FileCode className={`w-3.5 h-3.5 ${isMatch ? "text-emerald-600" : "text-stone-400"}`} />
                        <span>{file.name}</span>
                      </div>
                      <div className="text-[9px] font-bold uppercase font-mono">
                        {isMatch ? "accept() ➔ TRUE" : "accept() ➔ FALSE"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART C: Unified Cheat Sheet */}
      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
        🧠 Cheat Sheet Tổng Kết Kiến Thức (Mục I - V)
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
        {/* Col 1 */}
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700">1. Standard I/O Streams</h5>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-sky-50 text-sky-750 rounded-lg font-mono">I</span>
          </div>
          <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
            <li>• <code>System.in</code>: Dùng để đọc (input).</li>
            <li>• <code>System.out</code> / <code>System.err</code>: Dùng để ghi (output).</li>
            <li>• Không cần khai báo, luôn có sẵn trong lớp System.</li>
          </ul>
        </div>

        {/* Col 2 */}
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700">2. Metadata vs Content</h5>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-sky-50 text-sky-750 rounded-lg font-mono">IV</span>
          </div>
          <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
            <li>• Lớp <code>File</code> chỉ làm việc với siêu dữ liệu (metadata như tồn tại, tên, đường dẫn, mkdir).</li>
            <li>• <strong>KHÔNG</strong> dùng lớp File để đọc/ghi trực tiếp nội dung văn bản hay nhị phân bên trong tệp.</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700">3. FilenameFilter</h5>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-sky-50 text-sky-750 rounded-lg font-mono">V</span>
          </div>
          <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
            <li>• Là một functional interface yêu cầu triển khai duy nhất phương thức <code>accept(File dir, String name)</code>.</li>
            <li>• Thường được truyền vào hàm <code>file.list(filterObj)</code> để lọc tệp theo ý muốn.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
