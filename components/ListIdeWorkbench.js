"use client";
import React, { useState } from "react";
import { FileCode, Check, Copy, Terminal } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function ListIdeWorkbench({ defaultFile = "ListInterface.java" }) {
  const [activeFile, setActiveFile] = useState(defaultFile);
  const [copied, setCopied] = useState(false);

  const files = {
    "ListInterface.java": {
      badge: "BASE INTERFACE",
      desc: "Đặc tả các phép toán cốt lõi của List ADT.",
      code: `import java.util.*;

public interface ListInterface <E> {
    public boolean isEmpty();
    public int     size();
    public E       getFirst() throws NoSuchElementException;
    public boolean contains(E item);
    public void    addFirst(E item);
    public E       removeFirst() throws NoSuchElementException;
    public void    print();
}`
    },
    "EnhancedListInterface.java": {
      badge: "ENHANCED INTERFACE (SECTION 8.2)",
      desc: "Interface mở rộng hỗ trợ chèn/xóa ở vị trí bất kỳ (addAfter, removeAfter, remove).",
      code: `import java.util.*;

public interface EnhancedListInterface <E> {
    public boolean isEmpty();
    public int     size();
    public E       getFirst() throws NoSuchElementException;
    public boolean contains(E item);
    public void    addFirst(E item);
    public E       removeFirst() throws NoSuchElementException;
    public void    print();

    public ListNode <E> getHead();
    public void addAfter(ListNode <E> current, E item);
    public E    removeAfter(ListNode <E> current) throws NoSuchElementException;
    public E    remove(E item) throws NoSuchElementException;
}`
    },
    "ListNode.java": {
      badge: "NODE STRUCT",
      desc: "Đơn vị cơ bản của Linked List (gồm element và tham chiếu next).",
      code: `class ListNode <E> {
    private E element;
    private ListNode <E> next;

    public ListNode(E item) { 
        this(item, null); 
    }

    public ListNode(E item, ListNode <E> n) {
        element = item;
        next = n;
    }

    public ListNode <E> getNext()       { return next; }
    public E            getElement()    { return element; }
    public void         setNext(ListNode <E> n) { next = n; }
}`
    },
    "EnhancedLinkedList.java": {
      badge: "ENHANCED LINKED LIST (ELL)",
      desc: "Hiện thực từ đầu EnhancedListInterface hỗ trợ addAfter và removeAfter.",
      code: `import java.util.*;

class EnhancedLinkedList <E> implements EnhancedListInterface <E> {
    private ListNode <E> head = null;
    private int num_nodes = 0;

    public ListNode <E> getHead() { return head; }

    public void addAfter(ListNode <E> current, E item) {
        if (current != null) {
            ListNode <E> p = new ListNode <E> (item);
            p.setNext(current.getNext());
            current.setNext(p);
        } else { // quy ước current == null là chèn đầu
            head = new ListNode <E> (item, head);
        }
        num_nodes++;
    }

    public E removeAfter(ListNode <E> current) throws NoSuchElementException {
        E temp;
        if (current != null) {
            ListNode <E> nextPtr = current.getNext();
            if (nextPtr != null) {
                temp = nextPtr.getElement();
                current.setNext(nextPtr.getNext());
                num_nodes--;
                return temp;
            } else throw new NoSuchElementException("No next node to remove");
        } else { // current == null là xóa head
            if (head != null) {
                temp = head.getElement();
                head = head.getNext();
                num_nodes--;
                return temp;
            } else throw new NoSuchElementException("No next node to remove");
        }
    }

    public E remove(E item) throws NoSuchElementException {
        // Sinh viên tự viết: Tìm item trong list (giữ prev và curr), gọi removeAfter(prev)
        return null;
    }
}`
    },
    "TailedLinkedList.java": {
      badge: "TAILED LINKED LIST (TLL)",
      desc: "Cải tiến có thêm con trỏ tail để addLast() đạt O(1). Có bảo trì tail trong mọi hàm.",
      code: `import java.util.*;

class TailedLinkedList <E> implements EnhancedListInterface <E> {
    private ListNode <E> head = null;
    private ListNode <E> tail = null;
    private int num_nodes = 0;

    public ListNode <E> getTail() { return tail; }

    public void addLast(E item) {
        if (head != null) {
            tail.setNext(new ListNode <E> (item));
            tail = tail.getNext();
        } else {
            tail = new ListNode <E> (item);
            head = tail;
        }
        num_nodes++;
    }

    public void addAfter(ListNode <E> current, E item) {
        if (current != null) {
            current.setNext(new ListNode <E> (item, current.getNext()));
            if (current == tail)
                tail = current.getNext();
        } else {
            head = new ListNode <E> (item, head);
            if (tail == null)
                tail = head;
        }
        num_nodes++;
    }

    public E removeAfter(ListNode <E> current) throws NoSuchElementException {
        E temp;
        if (current != null) {
            ListNode <E> nextPtr = current.getNext();
            if (nextPtr != null) {
                temp = nextPtr.getElement();
                current.setNext(nextPtr.getNext());
                num_nodes--;
                if (nextPtr.getNext() == null) tail = current;
                return temp;
            } else throw new NoSuchElementException("...");
        } else {
            if (head != null) {
                temp = head.getElement();
                head = head.getNext();
                num_nodes--;
                if (head == null) tail = null;
                return temp;
            } else throw new NoSuchElementException("...");
        }
    }

    public E removeFirst() throws NoSuchElementException {
        return removeAfter(null); // Re-use code!
    }
}`
    },
    "TailedLinkedListTest.java": {
      badge: "CLIENT TEST (TLL TEST)",
      desc: "Chương trình test TailedLinkedList kiểm tra addLast() O(1) & removeAfter().",
      terminalOutput: `List is: ccc, bbb, aaa.
List is: ccc, bbb, aaa, xxx.
List is: bbb, aaa, xxx.`,
      code: `public class TailedLinkedListTest {
    public static void main(String[] args) {
        TailedLinkedList <String> list = new TailedLinkedList <String>();
        list.addFirst("aaa");
        list.addFirst("bbb");
        list.addFirst("ccc");
        list.print();       // Out: List is: ccc, bbb, aaa.

        list.addLast("xxx"); // Thêm vào cuối O(1)
        list.print();       // Out: List is: ccc, bbb, aaa, xxx.

        list.removeAfter(null); // Xóa head
        list.print();       // Out: List is: bbb, aaa, xxx.
    }
}`
    },
    "BasicLinkedList.java": {
      badge: "BASIC LINKED LIST",
      desc: "Hiện thực cơ bản ListInterface.",
      code: `import java.util.*;

class BasicLinkedList <E> implements ListInterface <E> {
    private ListNode <E> head = null;
    private int num_nodes = 0;

    public boolean isEmpty() { return (num_nodes == 0); }
    public int size()       { return num_nodes; }

    public E getFirst() throws NoSuchElementException {
        if (head == null)
            throw new NoSuchElementException("can't get from an empty list");
        else return head.getElement();
    }

    public void addFirst(E item) {
        head = new ListNode <E> (item, head);
        num_nodes++;
    }
}`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(files[activeFile].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const current = files[activeFile] || files["ListInterface.java"];
  const highlightedHtml = highlightJavaVsCode(current.code);
  const lines = current.code.split("\n");

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Workbench Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
              IDE Workbench
            </span>
            <span className="text-xs text-slate-500 font-mono">VS Code Multi-file Java Viewer</span>
          </div>
          <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
            Mã nguồn <code className="text-purple-700 font-mono">EnhancedLinkedList.java</code> & <code className="text-purple-700 font-mono">TailedLinkedList.java</code>
          </h3>
        </div>
        <p className="text-xs text-slate-600 italic">
          {current.desc}
        </p>
      </div>

      {/* VS Code Window Container */}
      <div className="rounded-xl overflow-hidden border border-[#2d2d2d] bg-[#1e1e1e] shadow-2xl font-mono text-xs">
        {/* VS Code Header / Tabs Bar */}
        <div className="flex items-center justify-between bg-[#252526] px-3 py-2 border-b border-[#2d2d2d] select-none overflow-x-auto">
          {/* Controls & Tabs */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
            </div>

            <div className="flex items-center gap-1 overflow-x-auto">
              {Object.keys(files).map((fileName) => (
                <button
                  key={fileName}
                  onClick={() => setActiveFile(fileName)}
                  className={`px-3 py-1 rounded-t text-xs font-mono font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeFile === fileName
                      ? "bg-[#1e1e1e] text-[#cccccc] border-t-2 border-[#007acc]"
                      : "text-[#858585] hover:text-[#cccccc] hover:bg-[#2a2d2e]"
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-[#569cd6]" />
                  <span>{fileName}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Copy Button & Badge */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#4ec9b0] bg-[#1e1e1e] px-2 py-0.5 rounded border border-[#3c3c3c] hidden sm:inline-block">
              {current.badge}
            </span>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[#cccccc] hover:text-white bg-[#2d2d2d] hover:bg-[#3e3e3e] px-2 py-1 rounded transition-all text-[11px]"
              title="Copy Code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code View with Line Numbers */}
        <div className="p-4 overflow-x-auto leading-relaxed text-[#d4d4d4] flex max-h-[380px]">
          <div className="select-none text-[#555555] pr-4 border-r border-[#2d2d2d] text-right font-mono flex flex-col">
            {lines.map((_, i) => (
              <span key={i} className="leading-relaxed">
                {i + 1}
              </span>
            ))}
          </div>
          <pre className="pl-4 font-mono whitespace-pre text-xs leading-relaxed overflow-x-auto flex-1">
            <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
          </pre>
        </div>

        {/* Optional Terminal Console Output */}
        {current.terminalOutput && (
          <div className="border-t border-[#2d2d2d] bg-[#181818] p-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[#858585] mb-2 pb-1 border-b border-[#252526]">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Terminal className="w-3.5 h-3.5" />
                Console Terminal (KẾT QUẢ CHẠY THỰC TẾ)
              </span>
              <span className="text-[10px] bg-[#252526] px-2 py-0.5 rounded text-emerald-400">
                Process finished with exit code 0
              </span>
            </div>
            <pre className="text-emerald-300 whitespace-pre-wrap leading-relaxed pl-2 font-mono">
              {current.terminalOutput}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
