"use client";
import React, { useState } from "react";
import { Code2, FileCode, CheckCircle2 } from "lucide-react";

export default function ImprovedMyBallTabs() {
  const [activeTab, setActiveTab] = useState("myball"); // 'myball' or 'testball'

  return (
    <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-3xl overflow-hidden my-6 shadow-md font-sans text-stone-300">
      
      {/* Tab Switcher Headers */}
      <div className="bg-[#2d2c28] border-b border-[#1e1d1a] px-4 pt-3 flex justify-between items-end select-none">
        <div className="flex gap-2">
          {/* MyBall.java Tab */}
          <button
            onClick={() => setActiveTab("myball")}
            className={`px-4 py-2 text-xs font-bold font-mono transition-all rounded-t-xl cursor-pointer flex items-center gap-1.5 border-t border-x ${
              activeTab === "myball"
                ? "bg-[#1e1d1a] border-[#2a2926] text-amber-400"
                : "bg-transparent border-transparent text-stone-500 hover:text-stone-300"
            }`}
          >
            <FileCode size={14} />
            <span>MyBall.java</span>
          </button>
          
          {/* TestBallV4.java Tab */}
          <button
            onClick={() => setActiveTab("testball")}
            className={`px-4 py-2 text-xs font-bold font-mono transition-all rounded-t-xl cursor-pointer flex items-center gap-1.5 border-t border-x ${
              activeTab === "testball"
                ? "bg-[#1e1d1a] border-[#2a2926] text-amber-400"
                : "bg-transparent border-transparent text-stone-500 hover:text-stone-300"
            }`}
          >
            <FileCode size={14} />
            <span>TestBallV4.java</span>
          </button>
        </div>

        <div className="pb-2 text-[9px] text-stone-500 uppercase tracking-wider font-sans font-black flex items-center gap-1">
          <CheckCircle2 size={12} className="text-emerald-500" />
          <span>Bản cải tiến hoàn chỉnh</span>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto max-h-[420px] overflow-y-auto">
        {activeTab === "myball" ? (
          <div className="text-stone-350">
            <span className="text-amber-500 font-bold">public class</span> MyBall &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// 1. Attributes"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">private static int</span> quantity = 0; <span className="text-stone-600">{"// Biến static dùng chung"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">private String</span> colour;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">private double</span> radius;<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// 2. Overloaded Constructors"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public</span> MyBall() &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">this</span>(<span className="text-emerald-400">"yellow"</span>, <span className="text-sky-400">10.0</span>); <span className="text-stone-600">{"// Gọi constructor 2 tham số"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public</span> MyBall(String colour, <span className="text-amber-500">double</span> radius) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setColour(colour); <span className="text-stone-600">{"// Tái sử dụng code setter"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setRadius(radius);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity++;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// 3. Accessors (Getters)"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public static int</span> getQuantity() &#123; <span className="text-amber-500 font-bold">return</span> quantity; &#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public String</span> getColour() &#123; <span className="text-amber-500 font-bold">return this</span>.colour; &#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public double</span> getRadius() &#123; <span className="text-amber-500 font-bold">return this</span>.radius; &#125;<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// 4. Mutators (Setters)"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public void</span> setColour(String colour) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">this</span>.colour = colour; <span className="text-stone-600">{"// Sử dụng this để giải quyết trùng tên"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public void</span> setRadius(<span className="text-amber-500">double</span> radius) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">this</span>.radius = radius;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// 5. Overriding Methods"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public String</span> toString() &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">return</span> <span className="text-emerald-400">"["</span> + getColour() + <span className="text-emerald-400">", "</span> + getRadius() + <span className="text-emerald-400">"]"</span>;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public boolean</span> equals(Object obj) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">if</span> (obj <span className="text-amber-500 font-bold">instanceof</span> MyBall) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MyBall ball = (MyBall) obj;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">return this</span>.colour.equals(ball.getColour())<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;&amp; <span className="text-amber-500 font-bold">this</span>.radius == ball.getRadius();<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">return false</span>;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &#125;
          </div>
        ) : (
          <div className="text-stone-350">
            <span className="text-amber-500 font-bold">import</span> java.util.Scanner;<br/><br/>
            
            <span className="text-amber-500 font-bold">public class</span> TestBallV4 &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// readBall helper method"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public static</span> MyBall readBall(Scanner sc) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(<span className="text-emerald-400">"Enter colour: "</span>); String c = sc.next();<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(<span className="text-emerald-400">"Enter radius: "</span>); <span className="text-amber-500">double</span> r = sc.nextDouble();<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">return new</span> MyBall(c, r);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public static void</span> main(String[] args) &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanner sc = <span className="text-amber-500 font-bold">new</span> Scanner(System.in);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MyBall myBall1 = readBall(sc);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MyBall myBall2 = readBall(sc);<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// 1. Kiểm thử toString() ngầm định"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-emerald-400">"1st ball: "</span> + myBall1);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-emerald-400">"2nd ball: "</span> + myBall2);<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// 2. Kiểm thử so sánh =="}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-emerald-400">"(myBall1 == myBall2) is "</span> + (myBall1 == myBall2));<br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// 3. Kiểm thử so sánh equals()"}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-emerald-400">"myBall1.equals(myBall2) is "</span> + myBall1.equals(myBall2));<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &#125;
          </div>
        )}
      </div>

    </div>
  );
}
