"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Code2, BookOpen, Layers, Copy, Check } from "lucide-react";

export default function StackLinkedListReviewAccordion() {
  const [openSection, setOpenSection] = useState(null);
  const [copiedSection, setCopiedSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const copyToClipboard = (text, section) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const listNodeCode = `// ListNode.java
class ListNode<E> {
    /* thuộc tính dữ liệu */
    private E element;
    private ListNode<E> next;

    /* constructors */
    public ListNode(E item) { this(item, null); }

    public ListNode(E item, ListNode<E> n) {
        element = item;
        next = n;
    }

    public ListNode<E> getNext() { return next; }
    public E getElement() { return element; }
    public void setNext(ListNode<E> n) { next = n; }
}`;

  const basicLinkedListCode = `// BasicLinkedList.java
import java.util.*;

class BasicLinkedList<E> implements ListInterface<E> {
    private ListNode<E> head = null;
    private int num_nodes = 0;

    public boolean isEmpty() { return (num_nodes == 0); }
    public int size() { return num_nodes; }

    public E getFirst() throws NoSuchElementException {
        if (head == null)
            throw new NoSuchElementException("can't get from an empty list");
        else return head.getElement();
    }

    public boolean contains(E item) {
        for (ListNode<E> n = head; n != null; n = n.getNext())
            if (n.getElement().equals(item)) return true;
        return false;
    }

    public void addFirst(E item) {
        head = new ListNode<E>(item, head);
        num_nodes++;
    }

    public E removeFirst() throws NoSuchElementException {
        ListNode<E> ln;
        if (head == null)
            throw new NoSuchElementException("can't remove from empty list");
        else {
            ln = head;
            head = head.getNext();
            num_nodes--;
            return ln.getElement();
        }
    }

    public void print() throws NoSuchElementException {
        // ... code lược bỏ
    }
}`;

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1.5 shadow-xs">
          <BookOpen className="w-3.5 h-3.5 text-amber-700" /> Ôn lại kiến thức bài trước
        </span>
        <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
          3.2 & 3.3 ListNode và BasicLinkedList
        </h4>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 mb-4">
        Trước khi cài đặt Stack bằng Linked List, hãy xem lại 2 class nền tảng từ Bài 2 (Danh sách liên kết):
      </p>

      <div className="space-y-3">
        {/* Accordion 1: ListNode */}
        <div>
          <button
            onClick={() => toggle("listnode")}
            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl p-4 transition-colors flex items-center justify-between text-left cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Code2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-slate-900 font-mono">3.2 ListNode.java</span>
              <span className="text-xs text-slate-500 hidden sm:inline font-sans">
                (Lớp nút lưu element & next pointer)
              </span>
            </div>
            {openSection === "listnode" ? (
              <ChevronUp className="w-4 h-4 text-slate-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {openSection === "listnode" && (
            <div className="mt-2 bg-slate-50/80 p-4 rounded-xl border border-slate-200 text-slate-700">
              <div className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-xl border border-slate-800 shadow-md overflow-x-auto">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-[11px] font-sans text-slate-400 font-medium">ListNode.java</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(listNodeCode, "listnode")}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition-colors font-sans px-2 py-0.5 rounded bg-slate-900 border border-slate-800"
                    title="Sao chép mã"
                  >
                    {copiedSection === "listnode" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                </div>
                <pre>{listNodeCode}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Accordion 2: BasicLinkedList */}
        <div>
          <button
            onClick={() => toggle("basiclist")}
            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl p-4 transition-colors flex items-center justify-between text-left cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-bold text-slate-900 font-mono">3.3 BasicLinkedList.java</span>
              <span className="text-xs text-slate-500 hidden sm:inline font-sans">
                (Các hàm isEmpty, size, getFirst, addFirst, removeFirst...)
              </span>
            </div>
            {openSection === "basiclist" ? (
              <ChevronUp className="w-4 h-4 text-slate-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {openSection === "basiclist" && (
            <div className="mt-2 bg-slate-50/80 p-4 rounded-xl border border-slate-200 text-slate-700">
              <div className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-xl border border-slate-800 shadow-md overflow-x-auto">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-[11px] font-sans text-slate-400 font-medium">BasicLinkedList.java</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(basicLinkedListCode, "basiclist")}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition-colors font-sans px-2 py-0.5 rounded bg-slate-900 border border-slate-800"
                    title="Sao chép mã"
                  >
                    {copiedSection === "basiclist" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                </div>
                <pre>{basicLinkedListCode}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

