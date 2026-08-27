"use client";
import React, { useState } from "react";
import { Table, Plus, Trash2, Copy, Check, Terminal, Sparkles, Layers, Sliders, ShieldCheck } from "lucide-react";

export default function SqlTableDesignerWorkbench() {
  const [tableName, setTableName] = useState("SinhVien");
  const [styleMode, setStyleMode] = useState("table-level"); // "column-level" vs "table-level"
  const [copied, setCopied] = useState(false);

  const [columns, setColumns] = useState([
    {
      id: "c1",
      name: "MaSV",
      type: "int",
      isPk: true,
      allowNull: false,
      isIdentity: true,
      identitySeed: 1,
      identityInc: 1,
      defaultValue: "",
      checkCondition: "",
      fkRef: ""
    },
    {
      id: "c2",
      name: "HoTen",
      type: "nvarchar(50)",
      isPk: false,
      allowNull: false,
      isIdentity: false,
      identitySeed: 1,
      identityInc: 1,
      defaultValue: "",
      checkCondition: "",
      fkRef: ""
    },
    {
      id: "c3",
      name: "NgaySinh",
      type: "datetime",
      isPk: false,
      allowNull: true,
      isIdentity: false,
      identitySeed: 1,
      identityInc: 1,
      defaultValue: "",
      checkCondition: "",
      fkRef: ""
    },
    {
      id: "c4",
      name: "DiemTB",
      type: "float",
      isPk: false,
      allowNull: false,
      isIdentity: false,
      identitySeed: 1,
      identityInc: 1,
      defaultValue: "0.0",
      checkCondition: "DiemTB >= 0 AND DiemTB <= 10",
      fkRef: ""
    },
    {
      id: "c5",
      name: "MaLop",
      type: "char(5)",
      isPk: false,
      allowNull: true,
      isIdentity: false,
      identitySeed: 1,
      identityInc: 1,
      defaultValue: "",
      checkCondition: "",
      fkRef: "LopHoc(MaLop)"
    }
  ]);

  const addColumn = () => {
    const newCol = {
      id: `c_${Date.now()}`,
      name: `Cot_${columns.length + 1}`,
      type: "varchar(30)",
      isPk: false,
      allowNull: true,
      isIdentity: false,
      identitySeed: 1,
      identityInc: 1,
      defaultValue: "",
      checkCondition: "",
      fkRef: ""
    };
    setColumns([...columns, newCol]);
  };

  const removeColumn = (id) => {
    if (columns.length <= 1) return;
    setColumns(columns.filter((c) => c.id !== id));
  };

  const updateCol = (id, field, value) => {
    setColumns(
      columns.map((c) => {
        if (c.id !== id) return c;
        if (field === "isPk" && value === true) {
          return { ...c, isPk: true, allowNull: false };
        }
        return { ...c, [field]: value };
      })
    );
  };

  // Sinh mã DDL tự động
  const generateDdl = () => {
    const pkCols = columns.filter((c) => c.isPk);

    if (styleMode === "column-level") {
      let code = `CREATE TABLE ${tableName} (\n`;
      const colLines = columns.map((c) => {
        let line = `  ${c.name} ${c.type}`;
        if (c.isIdentity) line += ` IDENTITY(${c.identitySeed}, ${c.identityInc})`;
        if (c.isPk) line += ` PRIMARY KEY`;
        if (c.allowNull && !c.isPk) line += ` NULL`;
        else if (!c.allowNull) line += ` NOT NULL`;
        if (c.defaultValue) line += ` DEFAULT (${c.defaultValue})`;
        if (c.checkCondition) line += ` CHECK (${c.checkCondition})`;
        if (c.fkRef) line += ` REFERENCES ${c.fkRef}`;
        return line;
      });
      code += colLines.join(",\n");
      code += `\n);`;
      return code;
    } else {
      // Table level with named constraints
      let code = `CREATE TABLE ${tableName} (\n`;
      const colLines = columns.map((c) => {
        let line = `  ${c.name} ${c.type}`;
        if (c.isIdentity) line += ` IDENTITY(${c.identitySeed}, ${c.identityInc})`;
        if (c.allowNull && !c.isPk) line += ` NULL`;
        else line += ` NOT NULL`;
        if (c.defaultValue) line += ` CONSTRAINT df_${tableName.toLowerCase()}_${c.name.toLowerCase()} DEFAULT (${c.defaultValue})`;
        return line;
      });

      const constraints = [];
      if (pkCols.length > 0) {
        const pkNames = pkCols.map((c) => c.name).join(", ");
        constraints.push(`  CONSTRAINT pk_${tableName.toLowerCase()} PRIMARY KEY (${pkNames})`);
      }

      columns.forEach((c) => {
        if (c.checkCondition) {
          constraints.push(`  CONSTRAINT ck_${tableName.toLowerCase()}_${c.name.toLowerCase()} CHECK (${c.checkCondition})`);
        }
        if (c.fkRef) {
          constraints.push(`  CONSTRAINT fk_${tableName.toLowerCase()}_${c.name.toLowerCase()} FOREIGN KEY (${c.name}) REFERENCES ${c.fkRef}`);
        }
      });

      const allItems = [...colLines, ...constraints];
      code += allItems.join(",\n");
      code += `\n);`;
      return code;
    }
  };

  const ddlCode = generateDdl();

  const handleCopy = () => {
    navigator.clipboard.writeText(ddlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Table className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlTableDesignerWorkbench</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                SSMS GUI Simulator
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Thiết kế bảng trực quan & tự động sinh mã DDL thời gian thực theo chuẩn doanh nghiệp
            </p>
          </div>
        </div>

        {/* Style Switcher Tab */}
        <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          <button
            onClick={() => setStyleMode("column-level")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              styleMode === "column-level"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            Mức Cột (Column-Level Inline)
          </button>
          <button
            onClick={() => setStyleMode("table-level")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              styleMode === "table-level"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            Mức Bảng (Table-Level Named Constraints)
          </button>
        </div>
      </div>

      {/* Table Name Input & Toolbar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-gray-700">Tên Bảng CSDL:</span>
          <input
            type="text"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
            className="w-44 rounded-lg border border-indigo-300 bg-white px-3 py-1.5 font-mono text-sm font-bold text-indigo-900 shadow-inner focus:border-indigo-600 focus:outline-none"
          />
        </div>
        <button
          onClick={addColumn}
          className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow hover:bg-indigo-700 transition-all"
        >
          <Plus className="h-4 w-4" />
          Thêm Cột Mới
        </button>
      </div>

      {/* Grid of Columns Designer */}
      <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-xs text-gray-600">
          <thead className="bg-gray-50 border-b border-gray-200 font-mono font-bold text-gray-700">
            <tr>
              <th className="p-3">Tên Cột</th>
              <th className="p-3">Kiểu Dữ Liệu</th>
              <th className="p-3 text-center">Khóa Chính (PK)</th>
              <th className="p-3 text-center">Allow NULL</th>
              <th className="p-3 text-center">Identity (Tự tăng)</th>
              <th className="p-3">Giá Trị Mặc Định (DEFAULT)</th>
              <th className="p-3">Ràng Buộc CHECK</th>
              <th className="p-3">Khóa Ngoại (REFERENCES)</th>
              <th className="p-3 text-center">Xóa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {columns.map((col) => (
              <tr key={col.id} className="hover:bg-indigo-50/30 transition-colors">
                <td className="p-2.5">
                  <input
                    type="text"
                    value={col.name}
                    onChange={(e) => updateCol(col.id, "name", e.target.value)}
                    className="w-28 rounded border border-gray-300 px-2 py-1 font-mono text-xs font-bold text-gray-900 focus:border-indigo-600 focus:outline-none"
                  />
                </td>
                <td className="p-2.5">
                  <select
                    value={col.type}
                    onChange={(e) => updateCol(col.id, "type", e.target.value)}
                    className="rounded border border-gray-300 px-2 py-1 font-mono text-xs text-indigo-900 focus:border-indigo-600 focus:outline-none"
                  >
                    <option value="int">int (4B)</option>
                    <option value="smallint">smallint (2B)</option>
                    <option value="tinyint">tinyint (1B)</option>
                    <option value="bigint">bigint (8B)</option>
                    <option value="float">float (8B)</option>
                    <option value="money">money (8B)</option>
                    <option value="datetime">datetime (8B)</option>
                    <option value="char(5)">char(5)</option>
                    <option value="char(10)">char(10)</option>
                    <option value="varchar(30)">varchar(30)</option>
                    <option value="varchar(50)">varchar(50)</option>
                    <option value="nvarchar(30)">nvarchar(30)</option>
                    <option value="nvarchar(50)">nvarchar(50)</option>
                  </select>
                </td>
                <td className="p-2.5 text-center">
                  <input
                    type="checkbox"
                    checked={col.isPk}
                    onChange={(e) => updateCol(col.id, "isPk", e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 accent-indigo-600"
                  />
                </td>
                <td className="p-2.5 text-center">
                  <input
                    type="checkbox"
                    checked={col.allowNull}
                    disabled={col.isPk}
                    onChange={(e) => updateCol(col.id, "allowNull", e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 accent-indigo-600 disabled:opacity-40"
                  />
                </td>
                <td className="p-2.5 text-center">
                  <input
                    type="checkbox"
                    checked={col.isIdentity}
                    disabled={!col.type.includes("int")}
                    onChange={(e) => updateCol(col.id, "isIdentity", e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 accent-indigo-600 disabled:opacity-40"
                  />
                </td>
                <td className="p-2.5">
                  <input
                    type="text"
                    value={col.defaultValue}
                    onChange={(e) => updateCol(col.id, "defaultValue", e.target.value)}
                    placeholder="VD: 'N/A', 0..."
                    className="w-24 rounded border border-gray-300 px-2 py-1 font-mono text-[11px] focus:border-indigo-600 focus:outline-none"
                  />
                </td>
                <td className="p-2.5">
                  <input
                    type="text"
                    value={col.checkCondition}
                    onChange={(e) => updateCol(col.id, "checkCondition", e.target.value)}
                    placeholder="VD: Luong > 0..."
                    className="w-32 rounded border border-gray-300 px-2 py-1 font-mono text-[11px] focus:border-indigo-600 focus:outline-none"
                  />
                </td>
                <td className="p-2.5">
                  <input
                    type="text"
                    value={col.fkRef}
                    onChange={(e) => updateCol(col.id, "fkRef", e.target.value)}
                    placeholder="VD: PhongBan(maphong)"
                    className="w-36 rounded border border-gray-300 px-2 py-1 font-mono text-[11px] focus:border-indigo-600 focus:outline-none"
                  />
                </td>
                <td className="p-2.5 text-center">
                  <button
                    onClick={() => removeColumn(col.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Realtime Generated Code Block (Dark Cyber Terminal) */}
      <div className="mt-6 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-indigo-400" />
            <span className="font-mono text-xs font-bold text-gray-300">
              Live Real-Time Generated DDL Script ({styleMode === "table-level" ? "Chuẩn Doanh Nghiệp" : "Mức Cột Ngắn Gọn"})
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1 text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Đã sao chép!" : "One-Click Copy"}
          </button>
        </div>

        <pre className="mt-3 font-mono text-xs text-indigo-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {ddlCode}
        </pre>
      </div>
    </div>
  );
}
