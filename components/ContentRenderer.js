"use client";
import React, { useRef, useEffect, useState } from "react";
import { findSubsectionContent, lessonsData } from "../data/lessons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BubbleSortVisualizer from "./BubbleSortVisualizer";
import QuickSortVisualizer from "./QuickSortVisualizer";
import QuickSortFlowchart from "./QuickSortFlowchart";
import MemoryVisualizer from "./MemoryVisualizer";
import ConceptQuiz from "./ConceptQuiz";
import JavaRunCycleVisualizer from "./JavaRunCycleVisualizer";
import CastingPlayground from "./CastingPlayground";
import ScannerVisualizer from "./ScannerVisualizer";
import MathPlayground from "./MathPlayground";
import PassByValueVisualizer from "./PassByValueVisualizer";
import RecursionVisualizer from "./RecursionVisualizer";
import ArrayPlayground from "./ArrayPlayground";
import StringPoolVisualizer from "./StringPoolVisualizer";
import StringMethodsSandbox from "./StringMethodsSandbox";
import NameParserPlayground from "./NameParserPlayground";
import StringMethodsExplorer from "./StringMethodsExplorer";
import ChapterSummaryDashboard from "./ChapterSummaryDashboard";
import JavaCompileWorkflow from "./JavaCompileWorkflow";
import ScannerPlayground from "./ScannerPlayground";
import StringComparisonMini from "./StringComparisonMini";
import MathSandbox from "./MathSandbox";
import MethodInvocationSimulator from "./MethodInvocationSimulator";
import ConstructorMemoryVisualizer from "./ConstructorMemoryVisualizer";
import OverloadingDispatchSandbox from "./OverloadingDispatchSandbox";
import DecimalFormatPlayground from "./DecimalFormatPlayground";
import RandomRangeVisualizer from "./RandomRangeVisualizer";
import WrapperBoxingVisualizer from "./WrapperBoxingVisualizer";
import PointGridSandbox from "./PointGridSandbox";
import ApiBlackBoxSimulator from "./ApiBlackBoxSimulator";
import UserToDesignerTimeline from "./UserToDesignerTimeline";
import ExamGotchasFlashcards from "./ExamGotchasFlashcards";
import UmlToCodeSandbox from "./UmlToCodeSandbox";
import UmlSymbolMatcher from "./UmlSymbolMatcher";
import UserVsDesignerSwitcher from "./UserVsDesignerSwitcher";
import MultiParadigmSyntaxViewer from "./MultiParadigmSyntaxViewer";
import ProceduralVsOopInteractiveGrid from "./ProceduralVsOopInteractiveGrid";
import OopPillarsDashboard from "./OopPillarsDashboard";
import BankAccountExploitSimulator from "./BankAccountExploitSimulator";
import EncapsulationSolutionBox from "./EncapsulationSolutionBox";
import BankAcctCompileWorkflow from "./BankAcctCompileWorkflow";
import ClassVsInstanceComparison from "./ClassVsInstanceComparison";
import StaticMemoryVisualizer from "./StaticMemoryVisualizer";
import TestBallWorkflow from "./TestBallWorkflow";
import ThisReferenceVisualizer from "./ThisReferenceVisualizer";
import ConstructorChainingVisualizer from "./ConstructorChainingVisualizer";
import ObjectEqualityInspector from "./ObjectEqualityInspector";
import ImprovedMyBallTabs from "./ImprovedMyBallTabs";
import UmlVisibilityCards from "./UmlVisibilityCards";
import UmlInteractiveDiagram from "./UmlInteractiveDiagram";
import DependencyVisualizer from "./DependencyVisualizer";
import InteractiveRecapPanel from "./InteractiveRecapPanel";
import PrintfFormatter from "./PrintfFormatter";
import ComplexVisualizer from "./ComplexVisualizer";
import StringBufferMemoryVisualizer from "./StringBufferMemoryVisualizer";
import StringBufferThreadLockVisualizer from "./StringBufferThreadLockVisualizer";
import StringBufferSandbox from "./StringBufferSandbox";
import StringBufferExamplesTabs from "./StringBufferExamplesTabs";
import StringBuilderThreadSafetyVisualizer from "./StringBuilderThreadSafetyVisualizer";
import StringPerformanceBenchmark from "./StringPerformanceBenchmark";
import StringCompareMatrix from "./StringCompareMatrix";
import StringTokenizerSandbox from "./StringTokenizerSandbox";
import VietnameseNameNormalizer from "./VietnameseNameNormalizer";
import StringSummaryDashboard from "./StringSummaryDashboard";
import InheritanceGoalsExplorer from "./InheritanceGoalsExplorer";
import InheritanceOopOverview from "./InheritanceOopOverview";
import InheritanceOverridingReview from "./InheritanceOverridingReview";
import InheritanceCreatingSubclass from "./InheritanceCreatingSubclass";
import InheritanceSubstitutability from "./InheritanceSubstitutability";
import InheritanceObjectClass from "./InheritanceObjectClass";
import InheritanceIsaHasa from "./InheritanceIsaHasa";
import InheritanceFinalKeyword from "./InheritanceFinalKeyword";
import InheritanceLimitations from "./InheritanceLimitations";
import InheritanceQuizChaining from "./InheritanceQuizChaining";
import InheritanceQuizCompileRun from "./InheritanceQuizCompileRun";
import InheritanceSummary from "./InheritanceSummary";
import FractionVisualizer from "./FractionVisualizer";
import HcmTimeline1945to1969 from "./HcmTimeline1945to1969";
import HcmValuesExplorer from "./HcmValuesExplorer";
import HcmWorldDevelopment from "./HcmWorldDevelopment";
import HcmChapter3GoalsExplorer from "./HcmChapter3GoalsExplorer";
import HcmChapter4GoalsExplorer from "./HcmChapter4GoalsExplorer";
import HcmChapter5GoalsExplorer from "./HcmChapter5GoalsExplorer";
import HcmGreatUnityRole from "./HcmGreatUnityRole";
import HcmGreatUnityForce from "./HcmGreatUnityForce";
import HcmUnityConditions from "./HcmUnityConditions";
import HcmFrontOrganization from "./HcmFrontOrganization";
import HcmUnityMethods from "./HcmUnityMethods";
import HcmInternationalNeed from "./HcmInternationalNeed";
import HcmInternationalForces from "./HcmInternationalForces";
import HcmInternationalPrinciples from "./HcmInternationalPrinciples";
import HcmApplyingPartyLines from "./HcmApplyingPartyLines";
import HcmApplyingAlliance from "./HcmApplyingAlliance";
import HcmApplyingInternational from "./HcmApplyingInternational";
import HcmPartyFoundingNecessity from "./HcmPartyFoundingNecessity";
import HcmPartyMorality from "./HcmPartyMorality";
import HcmPartyPrinciples from "./HcmPartyPrinciples";
import HcmCadreBuilding from "./HcmCadreBuilding";
import HcmStateClassNature from "./HcmStateClassNature";
import HcmStateOfPeople from "./HcmStateOfPeople";
import HcmStateByPeople from "./HcmStateByPeople";
import HcmStateForPeople from "./HcmStateForPeople";
import HcmStateRuleOfLaw from "./HcmStateRuleOfLaw";
import HcmStatePowerControl from "./HcmStatePowerControl";
import HcmStateAntiCorruption from "./HcmStateAntiCorruption";
import HcmApplyPartyBuilding from "./HcmApplyPartyBuilding";
import HcmApplyStateBuilding from "./HcmApplyStateBuilding";
import HcmIndependenceFreedom from "./HcmIndependenceFreedom";
import HcmIndependenceHappiness from "./HcmIndependenceHappiness";
import HcmIndependenceThorough from "./HcmIndependenceThorough";
import HcmIndependenceUnity from "./HcmIndependenceUnity";
import HcmProletarianRevolution from "./HcmProletarianRevolution";
import HcmPartyLeadership from "./HcmPartyLeadership";
import HcmNationalUnity from "./HcmNationalUnity";
import HcmActiveCreativity from "./HcmActiveCreativity";
import HcmRevolutionaryViolence from "./HcmRevolutionaryViolence";
import HcmSocialismConcept from "./HcmSocialismConcept";
import HcmSocialismNecessity from "./HcmSocialismNecessity";
import HcmSocialismFeatures from "./HcmSocialismFeatures";
import HcmSocialismGoals from "./HcmSocialismGoals";
import HcmSocialismDynamics from "./HcmSocialismDynamics";
import HcmTransitionNature from "./HcmTransitionNature";
import HcmTransitionPrinciples from "./HcmTransitionPrinciples";
import HcmRelationPrecondition from "./HcmRelationPrecondition";
import HcmRelationGuarantee from "./HcmRelationGuarantee";
import HcmRelationConditions from "./HcmRelationConditions";
import HcmAppSteadfast from "./HcmAppSteadfast";
import HcmAppDemocracy from "./HcmAppDemocracy";
import HcmAppSystem from "./HcmAppSystem";
import HcmAppCombating from "./HcmAppCombating";
import LsdHistoryTimeline from "./LsdHistoryTimeline";
import LsdObjectExplorer from "./LsdObjectExplorer";
import LsdFunctionsExplorer from "./LsdFunctionsExplorer";
import LsdTasksExplorer from "./LsdTasksExplorer";
import LsdMethodologyExplorer from "./LsdMethodologyExplorer";
import LsdSpecificMethodsExplorer from "./LsdSpecificMethodsExplorer";
import LsdRequirementsGoalsExplorer from "./LsdRequirementsGoalsExplorer";
import LsdChapter1GoalsExplorer from "./LsdChapter1GoalsExplorer";
import LsdCapitalismBelongings from "./LsdCapitalismBelongings";
import LsdOctoberRevolution from "./LsdOctoberRevolution";
import LsdColonialVietnam from "./LsdColonialVietnam";
import LsdPatrioticMovements from "./LsdPatrioticMovements";
import LsdSearchForWay from "./LsdSearchForWay";
import LsdInternationalActivities from "./LsdInternationalActivities";
import LsdRevolutionPreparations from "./LsdRevolutionPreparations";
import LsdCommunistOrganizations from "./LsdCommunistOrganizations";
import LsdPartyFoundingConference from "./LsdPartyFoundingConference";
import LsdConferenceResolutions from "./LsdConferenceResolutions";
import LsdHistorySignificance from "./LsdHistorySignificance";
import LsdMovement19301931 from "./LsdMovement19301931";
import LsdPoliticalThesis1930 from "./LsdPoliticalThesis1930";
import LsdRecoveryAndCongress1935 from "./LsdRecoveryAndCongress1935";
import LsdDemocracyContext from "./LsdDemocracyContext";
import LsdDemocracyMovement from "./LsdDemocracyMovement";
import LsdDemocracySignificance from "./LsdDemocracySignificance";
import LsdNationalLiberationStrategy from "./LsdNationalLiberationStrategy";
import LsdLiberationPreparation from "./LsdLiberationPreparation";
import LsdAntiJapaneseMovement from "./LsdAntiJapaneseMovement";
import LsdAugustRevolution from "./LsdAugustRevolution";
import LsdRevolutionSignificance from "./LsdRevolutionSignificance";
import AbstractionConceptVisualizer from "./AbstractionConceptVisualizer";
import AbstractionLevelCompare from "./AbstractionLevelCompare";
import AbstractBikeVisualizer from "./AbstractBikeVisualizer";
import AbstractShapeVisualizer from "./AbstractShapeVisualizer";
import AbstractBankVisualizer from "./AbstractBankVisualizer";
import AbstractBikeConstructorVisualizer from "./AbstractBikeConstructorVisualizer";
import AbstractNotationsFlashcards from "./AbstractNotationsFlashcards";
import AbstractCombinedHierarchy from "./AbstractCombinedHierarchy";
import AbstractSummaryDashboard from "./AbstractSummaryDashboard";
import AbstractSpectrumVisualizer from "./AbstractSpectrumVisualizer";
import AbstractKeywordCloud from "./AbstractKeywordCloud";
import InterfaceDesignPrinciples from "./InterfaceDesignPrinciples";
import InterfaceInformationHiding from "./InterfaceInformationHiding";
import InterfacePrePostConditions from "./InterfacePrePostConditions";
import InterfaceDataAbstractionAdt from "./InterfaceDataAbstractionAdt";
import InterfaceEmployeeCohesion from "./InterfaceEmployeeCohesion";
import InterfaceWaterDispenserAdt from "./InterfaceWaterDispenserAdt";
import InterfaceAdtOperationsTable from "./InterfaceAdtOperationsTable";
import InterfaceComplexNumberPlane from "./InterfaceComplexNumberPlane";
import InterfaceShapeComparable from "./InterfaceShapeComparable";
import InterfaceComplexImplementations from "./InterfaceComplexImplementations";
import InterfaceJvmMemoryPolymorphism from "./InterfaceJvmMemoryPolymorphism";
import InterfaceFloatPrecisionPlayground from "./InterfaceFloatPrecisionPlayground";
import InterfaceFractionMemoryRam from "./InterfaceFractionMemoryRam";
import InterfaceFractionImmutableFlow from "./InterfaceFractionImmutableFlow";
import InterfaceFractionSandbox from "./InterfaceFractionSandbox";
import InterfaceExamTrapFlashcards from "./InterfaceExamTrapFlashcards";
import CollectionArrayCvsJava from "./CollectionArrayCvsJava";
import CollectionArrayForLoopSim from "./CollectionArrayForLoopSim";
import CollectionArrayReferenceSwap from "./CollectionArrayReferenceSwap";
import CollectionArrayCliDetour from "./CollectionArrayCliDetour";
import CollectionArrayErrorsWarning from "./CollectionArrayErrorsWarning";
import CollectionArrayNullPointerSim from "./CollectionArrayNullPointerSim";
import CollectionArrayJagged2D from "./CollectionArrayJagged2D";
import CollectionArrayReconstruction from "./CollectionArrayReconstruction";
import CollectionGenericsPlayground from "./CollectionGenericsPlayground";
import CollectionGenericsWrapperType from "./CollectionGenericsWrapperType";
import CollectionGenericsAutoboxing from "./CollectionGenericsAutoboxing";
import CollectionGenericsMultiPair from "./CollectionGenericsMultiPair";
import CollectionVectorSandbox from "./CollectionVectorSandbox";
import CollectionVectorExecuter from "./CollectionVectorExecuter";
import CollectionVectorSynchronized from "./CollectionVectorSynchronized";
import CollectionArrayListComparison from "./CollectionArrayListComparison";
import CollectionArrayListApiTable from "./CollectionArrayListApiTable";
import CollectionArrayListExecuter from "./CollectionArrayListExecuter";
import CollectionArrayListSandbox from "./CollectionArrayListSandbox";
import CollectionSummaryMindMap from "./CollectionSummaryMindMap";
import CollectionPracticeExercises from "./CollectionPracticeExercises";
import ExceptionsGoalsExplorer from "./ExceptionsGoalsExplorer";
import ExceptionsErrorTypesAndExamples from "./ExceptionsErrorTypesAndExamples";
import ExceptionsJavaMechanism from "./ExceptionsJavaMechanism";
import ExceptionsIndicationVisualizer from "./ExceptionsIndicationVisualizer";
import ExceptionsHandlingVisualizer from "./ExceptionsHandlingVisualizer";
import ExceptionsFlowAndRetry from "./ExceptionsFlowAndRetry";
import ExceptionsCheckedVsCustom from "./ExceptionsCheckedVsCustom";
import ExceptionsBankSimulation from "./ExceptionsBankSimulation";
import ExceptionsSummaryMindMap from "./ExceptionsSummaryMindMap";
import FileGoalsExplorer from "./FileGoalsExplorer";
import FileStreamsAndIO from "./FileStreamsAndIO";
import FileClassSandbox from "./FileClassSandbox";
import FileDescriptorAndDataIO from "./FileDescriptorAndDataIO";
import JavaIOPackageExplorer from "./JavaIOPackageExplorer";
import InputStreamMethodsExplorer from "./InputStreamMethodsExplorer";
import FileAndByteStreamVisualizer from "./FileAndByteStreamVisualizer";
import CodeExplainer from "./CodeExplainer";
import OutputStreamVisualizer from "./OutputStreamVisualizer";
import FilterStreamVisualizer from "./FilterStreamVisualizer";
import BufferedStreamVisualizer from "./BufferedStreamVisualizer";
import CharacterStreamVisualizer from "./CharacterStreamVisualizer";
import CharArrayStreamVisualizer from "./CharArrayStreamVisualizer";
import ChainingPipelineBuilder from "./ChainingPipelineBuilder";
import SerializationVisualizer from "./SerializationVisualizer";
import FileIoSummaryMindmap from "./FileIoSummaryMindmap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function formatMathText(text) {
  if (typeof text !== "string") return text;
  
  // Replace $...$ blocks with formatted HTML
  return text.replace(/\$(.*?)\$/g, (match, formula) => {
    // 1. Replace LaTeX-style math symbols
    let formatted = formula
      .replace(/\\le/g, "≤")
      .replace(/\\ge/g, "≥")
      .replace(/\\dots/g, "…")
      .replace(/\\Omega/g, "Ω")
      .replace(/\\theta/g, "θ")
      .replace(/\\Theta/g, "Θ")
      .replace(/\\alpha/g, "α")
      .replace(/\\beta/g, "β")
      .replace(/\\times/g, "×")
      .replace(/\\log/g, "log")
      .replace(/\\ln/g, "ln")
      .replace(/\\to/g, "→")
      .replace(/\\infty/g, "∞");

    // 2. Replace subscript notation like x_1 or x_{n-1}
    formatted = formatted.replace(/([a-zA-Z_0-9])_([0-9a-zA-Z_])/g, "$1<sub>$2</sub>");
    formatted = formatted.replace(/([a-zA-Z_0-9])_\{([^}]+)\}/g, "$1<sub>$2</sub>");

    // 2.5. Replace superscript notation like x^2 or x^{n-1} or x^(n)
    formatted = formatted.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
    formatted = formatted.replace(/\^\(([^)]+)\)/g, "<sup>$1</sup>");
    formatted = formatted.replace(/\^([a-zA-Z0-9\-+]+)/g, "<sup>$1</sup>");

    // 3. Format variables like A, a, i, j, n, lo, hi, p, key, pivot
    const variables = ["lo", "hi", "pivot", "arr", "key", "swap", "val", "max", "min", "temp", "p", "A", "a", "i", "j", "n", "k", "T", "O", "log", "x", "y"];
    variables.forEach(v => {
      const regex = new RegExp(`\\b${v}\\b`, 'g');
      formatted = formatted.replace(regex, `<span class="font-serif italic font-semibold text-stone-850">${v}</span>`);
    });

    return `<span class="inline-flex items-center gap-0.5 font-semibold text-stone-850">${formatted}</span>`;
  });
}

function ChapterHeader({ title, subtitle, chapterId }) {
  const bannerRef = useRef(null);
  const canvasRef = useRef(null);

  useGSAP(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    // GSAP ScrollTrigger Entrance Animation
    gsap.fromTo(banner,
      {
        scaleX: 0.97,
        opacity: 0,
        y: 30
      },
      {
        scaleX: 1,
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: banner,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stagger text items inside
    const badge = banner.querySelector(".chapter-banner-badge");
    const mainTitle = banner.querySelector(".chapter-banner-title");
    const subText = banner.querySelector(".chapter-banner-subtitle");
    const bgText = banner.querySelector(".chapter-banner-bgtext");

    const textElements = [badge, mainTitle, subText].filter(Boolean);
    if (textElements.length > 0) {
      gsap.fromTo(textElements,
        {
          y: 25,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power1.out",
          scrollTrigger: {
            trigger: banner,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    if (bgText) {
      gsap.fromTo(bgText,
        {
          scale: 0.85,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: banner,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, { scope: bannerRef });

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    if (!canvas || !banner) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const accentColor = typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#d97706"
      : "#d97706";

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles system parameters
    const maxParticles = 65;
    const particles = [];
    const mouse = { x: 0, y: 0, isHovered: false };

    // Helper: generate random between min and max
    const randomRange = (min, max) => Math.random() * (max - min) + min;

    // Standard Particle Class
    class Particle {
      constructor(isBurst = false, x = 0, y = 0) {
        this.isBurst = isBurst;
        this.x = isBurst ? x : randomRange(0, canvas.width);
        this.y = isBurst ? y : randomRange(0, canvas.height);
        
        const angle = isBurst ? randomRange(0, Math.PI * 2) : 0;
        const speed = isBurst ? randomRange(1.2, 4) : 0;
        this.vx = isBurst ? Math.cos(angle) * speed : randomRange(-0.2, 0.2);
        this.vy = isBurst ? Math.sin(angle) * speed : randomRange(-0.2, 0.2);
        
        this.size = isBurst ? randomRange(1.2, 3) : randomRange(0.8, 2.2);
        this.color = Math.random() > 0.4 ? accentColor : "#ffffff";
        this.alpha = isBurst ? 1 : randomRange(0.15, 0.65);
        this.decay = isBurst ? randomRange(0.015, 0.035) : 0;
      }

      update() {
        if (!this.isBurst) {
          // Soft floating wind drift
          this.vx += randomRange(-0.02, 0.02);
          this.vy += randomRange(-0.02, 0.02);

          // Friction limit
          this.vx *= 0.97;
          this.vy *= 0.97;

          // Mouse Swirl Attraction Force
          if (mouse.isHovered) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              const force = (180 - dist) / 180 * 0.12;
              const angle = Math.atan2(dy, dx);
              // Perpendicular spiral orbit + pull force
              this.vx += Math.cos(angle + Math.PI / 2) * force * 0.55 + dx * 0.0006;
              this.vy += Math.sin(angle + Math.PI / 2) * force * 0.55 + dy * 0.0006;
            }
          }
        } else {
          // Burst decay
          this.alpha -= this.decay;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries for floating particles
        if (!this.isBurst) {
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.isBurst ? 12 : 5;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize floating particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle(false));
    }

    // Event listeners
    const handleMouseMove = (e) => {
      const rect = banner.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    const handleClick = (e) => {
      const rect = banner.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Spawn 20 burst particles
      for (let i = 0; i < 22; i++) {
        particles.push(new Particle(true, clickX, clickY));
      }
    };

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseleave", handleMouseLeave);
    banner.addEventListener("click", handleClick);

    // Canvas loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();

        // Remove dead burst particles
        if (p.isBurst && p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseleave", handleMouseLeave);
      banner.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="chapter-banner-container w-full relative mb-14 overflow-hidden select-none cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      <canvas
        ref={canvasRef}
        className="chapter-banner-canvas absolute inset-0 pointer-events-none z-0"
      />

      {/* Background Huge Text Overlay */}
      <div className="chapter-banner-bgtext absolute left-8 md:left-16 bottom-2 text-[8rem] md:text-[11rem] font-black font-playfair text-[var(--accent)]/[0.04] tracking-widest leading-none pointer-events-none z-0 text-left">
        CHƯƠNG<br />{chapterId}
      </div>

      <div 
        style={{
          background: `linear-gradient(135deg, rgba(var(--accent-rgb), 0.08) 0%, rgba(var(--accent-rgb), 0.02) 50%, rgba(255, 255, 255, 0.95) 100%)`,
          borderColor: `rgba(var(--accent-rgb), 0.15)`
        }}
        className="chapter-banner-content relative z-10 w-full h-[270px] md:h-[310px] border rounded-3xl flex flex-col justify-center px-8 md:px-16 shadow-[0_10px_30px_rgba(var(--accent-rgb),0.04)]"
      >
        <div className="chapter-banner-badge inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/8 text-[var(--accent)] text-xs font-extrabold uppercase tracking-wider mb-4.5 w-fit">
          <span>📚</span>
          <span>Chương {chapterId}</span>
        </div>
        <h1 className="chapter-banner-title text-2xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-stone-800 font-playfair tracking-tight mb-4.5 leading-tight">
          {title}
        </h1>
        <p className="chapter-banner-subtitle text-stone-600/90 text-xs md:text-sm leading-relaxed max-w-3xl font-sans font-medium">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function ContentRenderer({ chapters, selectedSubjectId, activeSubsectionId, setActiveSubsectionId }) {
  const [activeLang, setActiveLang] = useState("java");

  // Refresh ScrollTrigger after static content renders and layout stabilizes
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [selectedSubjectId, activeSubsectionId]);

  const currentSubject = lessonsData[selectedSubjectId];
  if (!currentSubject) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-4">
        <div className="w-10 h-10 border-4 border-stone-200 border-t-accent rounded-full animate-spin" />
        <span className="text-xs font-bold text-stone-400 tracking-widest uppercase animate-pulse select-none">Đang tải bài học...</span>
      </div>
    );
  }

  let activeChapter = null;
  let isChapterBased = false;

  if (currentSubject.chapters && currentSubject.chapters.length > 0) {
    isChapterBased = true;
    for (const ch of currentSubject.chapters) {
      const hasSub = ch.sections && ch.sections.some(sec => 
        sec.subsections && sec.subsections.some(sub => sub.id === activeSubsectionId)
      );
      if (hasSub) {
        activeChapter = ch;
        break;
      }
    }
    // Fallback to first chapter
    if (!activeChapter) {
      activeChapter = currentSubject.chapters[0];
    }
  }

  // Find next chapter if available
  let nextChapter = null;
  if (isChapterBased && activeChapter) {
    const activeIdx = currentSubject.chapters.findIndex(ch => ch.id === activeChapter.id);
    if (activeIdx !== -1 && activeIdx < currentSubject.chapters.length - 1) {
      nextChapter = currentSubject.chapters[activeIdx + 1];
    }
  }

  const handleNextChapterClick = () => {
    if (nextChapter && setActiveSubsectionId) {
      // Find the first subsection of the next chapter
      let firstSubId = null;
      if (nextChapter.sections) {
        for (const sec of nextChapter.sections) {
          if (sec.subsections && sec.subsections.length > 0) {
            firstSubId = sec.subsections[0].id;
            break;
          }
        }
      }
      if (firstSubId) {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
        setActiveSubsectionId(firstSubId);
      }
    }
  };

  // Helper to render sections and subsections list
  const renderSections = (sections) => {
    if (!sections) return null;
    let globalPartIdx = 0;
    return sections.map((sec, secIdx) => (
      <div key={`section-${sec.id || secIdx}`} className="space-y-6">
        {/* Section Header */}
        {sec.title && (
          <div className="section-title-wrapper mt-10 mb-4 px-4 py-2 bg-stone-100/60 rounded-xl border-l-4 border-accent/80 backdrop-blur-xs select-none">
            <h2 className="text-sm md:text-base font-bold text-stone-850 flex items-center gap-2">
              {sec.roman && <span className="font-mono text-accent">{sec.roman}.</span>}
              <span>{sec.title}</span>
            </h2>
          </div>
        )}

        {/* Subsections of this section */}
        {sec.subsections && sec.subsections.map((sub, subIdx) => {
          return (
            <div 
              key={`subsection-${sub.id || subIdx}`} 
              id={`content-${sub.id}`} 
              className="scroll-mt-24 space-y-6"
            >
              {/* Subsection title header bar inside page stream */}
              {sub.title && (
                <div className="subsection-header-badge mt-6 px-4 flex items-center gap-2 select-none">
                  {sub.number && (
                    <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-[10px] font-black text-accent font-mono">
                      {sub.number}
                    </span>
                  )}
                  <h3 className="text-xs md:text-sm font-bold text-stone-750 uppercase tracking-wider">
                    {sub.title}
                  </h3>
                </div>
              )}

              {/* Parts / Bento cards of this subsection */}
              {(() => {
                if (!sub.parts) return null;
                const isDirectBlocks = sub.parts.length > 0 && sub.parts[0].type;
                const actualParts = isDirectBlocks
                  ? [{
                      id: `${sub.id}-part-merged`,
                      label: "",
                      title: "",
                      content: sub.parts
                    }]
                  : sub.parts;

                return actualParts.map((part, partIdx) => {
                  const currentPartIdx = globalPartIdx++;
                  return (
                    <CinematicScrollWrapper key={`part-${part.id || currentPartIdx}`} index={currentPartIdx} className="mb-8">
                      <SpotlightCardWrapper id={`part-${part.id}`}>
                        <div className="card-content-blocks font-sans relative z-10 space-y-4">
                          {(part.label || part.title) && (
                            <div className="card-bookmark-tag mb-4 border-b border-stone-200/50 pb-2 flex items-center gap-1 text-sm font-bold text-stone-850">
                              {part.label && (
                                <span className="text-accent font-mono mr-1">{part.label} /</span>
                              )}
                              <span>{part.title}</span>
                            </div>
                          )}
                          {part.content && part.content.map((block, idx) => (
                            <ContentBlock
                              key={idx}
                              block={block}
                              path={`${part.id}-${idx}`}
                              activeLang={activeLang}
                              setActiveLang={setActiveLang}
                            />
                          ))}
                        </div>
                      </SpotlightCardWrapper>
                    </CinematicScrollWrapper>
                  );
                });
              })()}
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="content-area font-sans p-2 md:p-4 space-y-8 animate-in">
      {isChapterBased && activeChapter && (
        <>
          <ChapterHeader
            title={activeChapter.title}
            subtitle={activeChapter.subtitle}
            chapterId={activeChapter.title.replace(/Chương/i, "").trim().toUpperCase()}
          />
          {renderSections(activeChapter.sections)}
        </>
      )}

      {!isChapterBased && currentSubject.sections && (
        renderSections(currentSubject.sections)
      )}

      {/* Next Chapter navigation panel */}
      {nextChapter && (
        <div className="mt-16 p-8 rounded-3xl border border-stone-200 bg-white/40 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-300 hover:bg-white/60 select-none">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[9px] font-black text-stone-400 tracking-widest uppercase">Bạn đã học xong chương này</span>
            <h4 className="text-sm md:text-base font-black text-stone-900 font-playfair leading-tight">
              {activeChapter.title}: {activeChapter.subtitle}
            </h4>
          </div>
          
          <button
            onClick={handleNextChapterClick}
            className="px-6 py-3 rounded-full bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.03] cursor-pointer border-none"
          >
            <span>Tiếp tục học: {nextChapter.title}</span>
            <span className="text-sm">➔</span>
          </button>
        </div>
      )}
    </div>
  );
}

function CinematicScrollWrapper({ children, className = "", index = 0 }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    
    // Z-axis depth (Subtle premium drift)
    const startZ = isMobile ? -25 : -35;
    const startRotX = isMobile ? 3 : 4;
    const startY = isMobile ? 15 : 20;

    // Alternating X-axis fly-in for side drift (very subtle)
    const isEven = index % 2 === 0;
    const startX = isEven 
      ? (isMobile ? -10 : -15) 
      : (isMobile ? 10 : 15);
    const startRotY = isEven ? -2 : 2;

    gsap.fromTo(el,
      {
        transformPerspective: 1200,
        rotationX: startRotX,
        rotationY: startRotY,
        z: startZ,
        x: startX,
        y: startY,
        opacity: 0,
        filter: "blur(2px)"
      },
      {
        rotationX: 0,
        rotationY: 0,
        z: 0,
        x: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=15",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef, dependencies: [index] });

  return (
    <div
      ref={containerRef}
      className={`preserve-3d ${className}`}
      style={{ transformStyle: "preserve-3d", willChange: "transform, opacity, filter" }}
    >
      {children}
    </div>
  );
}

function SpotlightCardWrapper({ children, className = "", id = "" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      id={id}
      className={`premium-study-card ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="card-spotlight-radial pointer-events-none" />
      {children}
    </div>
  );
}

function ContentBlock({ block, path, activeLang, setActiveLang }) {
  switch (block.type) {
    case "label":
      return (
        <div className="content-block__label font-bold text-stone-800 mt-5 mb-2 text-sm md:text-base font-sans" data-hl-path={path} dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
      );

    case "paragraph":
      return (
        <p className="text-paragraph text-stone-700 leading-[1.9] mb-4 text-sm md:text-base font-sans" data-hl-path={path} dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
      );

    case "bullets":
      return (
        <ul className="bullet-list list-disc list-inside pl-2 mb-4 space-y-2.5">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="bullet-list__item text-stone-700 leading-[1.85] text-sm md:text-base font-sans"
              data-hl-path={`${path}-${idx}`}
              dangerouslySetInnerHTML={{ __html: formatMathText(item) }}
            />
          ))}
        </ul>
      );

    case "sub-bullets":
      return (
        <ul className="bullet-list bullet-list--sub list-[circle] list-inside pl-8 mb-4 space-y-2">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="bullet-list__item text-stone-600 leading-[1.85] text-sm md:text-base font-sans"
              data-hl-path={`${path}-${idx}`}
              dangerouslySetInnerHTML={{ __html: formatMathText(item) }}
            />
          ))}
        </ul>
      );

    case "highlight":
      return (
        <div className="highlight-box mb-4" data-hl-path={path}>
          <div className="highlight-box__content text-stone-800 leading-[1.85] text-sm md:text-base font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
        </div>
      );

    case "quote":
      return (
        <div className="quote-block my-5 italic" data-hl-path={path}>
          <div className="quote-block__content text-stone-800 leading-[1.85] text-sm md:text-base font-playfair" dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
          {block.source && (
            <div className="quote-block__source text-right text-xs md:text-sm font-semibold text-stone-500 mt-2 font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.source) }} />
          )}
        </div>
      );

    case "definition":
      return (
        <div className="definition-box p-5 rounded-xl bg-red-500/5 border-l-4 border-red-650 my-5" data-hl-path={path}>
          {block.term && (
            <div className="font-extrabold text-stone-850 text-xs md:text-sm mb-1.5 font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.term) }} />
          )}
          <div className="definition-box__content leading-[1.9] text-sm md:text-base font-medium font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.definition || block.text) }} />
        </div>
      );

    case "conclusion":
      return (
        <div className="conclusion-box p-5 rounded-xl bg-stone-100 border border-stone-200 my-5" data-hl-path={path}>
          {block.title && (
            <div className="content-block__label text-base font-bold text-secondary mb-3 font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.title) }} />
          )}
          {block.text && (
            <div className="conclusion-box__content text-stone-800 leading-[1.9] text-sm md:text-base mb-3 font-medium font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
          )}
          {block.items && (
            <ul className="bullet-list list-inside space-y-2.5">
              {block.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bullet-list__item text-stone-700 leading-[1.85] text-sm md:text-base font-sans"
                  data-hl-path={`${path}-${idx}`}
                  dangerouslySetInnerHTML={{ __html: formatMathText(item) }}
                />
              ))}
            </ul>
          )}
        </div>
      );

    case "numbered-group":
      return (
        <div className="numbered-group space-y-6 my-6 relative pl-3">
          {/* Vertical timeline line */}
          <div className="absolute left-[28px] top-6 bottom-6 w-0.5 bg-stone-200/80 pointer-events-none" />

          {block.items.map((item, itemIdx) => (
            <div key={itemIdx} className="flex gap-5 items-start group relative">
              {/* Step Number Circle */}
              <div className="w-8 h-8 rounded-full bg-[#fcfbf9] border-2 border-accent text-accent flex items-center justify-center text-xs font-black font-mono shrink-0 shadow-sm relative z-10 group-hover:scale-110 transition-transform duration-300">
                {item.number}
              </div>

              {/* Step Content Card */}
              <div 
                className="flex-1 p-5 rounded-2xl border border-stone-200 bg-stone-50/40 hover:bg-white transition-all duration-300 hover:shadow-md hover:border-stone-300"
                data-hl-path={`${path}-${itemIdx}-title`}
              >
                <h4 
                  className="text-stone-850 font-extrabold text-sm md:text-base font-sans leading-snug"
                  dangerouslySetInnerHTML={{ __html: formatMathText(item.title) }} 
                />
                
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="bullet-list list-[circle] list-inside pl-1 mt-3 space-y-2 text-xs md:text-sm text-stone-600 font-sans leading-relaxed">
                    {item.bullets.map((b, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="bullet-list__item"
                        data-hl-path={`${path}-${itemIdx}-${bulletIdx}`}
                        dangerouslySetInnerHTML={{ __html: formatMathText(b) }}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      );

    case "key-point":
      return (
        <div className="key-point flex gap-2.5 items-baseline my-3.5" data-hl-path={path}>
          <span className="key-point__arrow text-accent font-extrabold text-base leading-none mt-0.5">→</span>
          <span className="key-point__text text-stone-700 leading-[1.85] text-sm md:text-base font-medium font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
        </div>
      );

    case "code":
      {
        const lang = block.language || block.lang;
        return (
          <div className="code-block my-5 rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#2d2d2d] text-[#d4d4d4]" data-hl-path={path}>
            {lang && (
              <div className="code-block__header px-4 py-2 bg-[#252526] border-b border-[#2d2d2d] text-xs font-mono text-[#858585] flex justify-between items-center select-none">
                <span>{lang}</span>
              </div>
            )}
            <pre className="code-block__pre p-4 whitespace-pre-wrap break-words text-xs md:text-sm font-mono leading-relaxed select-text bg-[#1e1e1e]">
              <code dangerouslySetInnerHTML={{ __html: highlightCode(block.code, lang) }} />
            </pre>
          </div>
        );
      }

    case "table":
      return (
        <div className="table-container my-5 overflow-x-auto rounded-xl border border-stone-200" data-hl-path={path}>
          <table className="min-w-full text-sm border-separate border-spacing-0">
            <thead className="bg-stone-50">
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`px-2 md:px-4 py-2.5 md:py-3 text-left font-bold text-stone-700 uppercase tracking-wider text-[10px] md:text-xs border-b border-stone-200 whitespace-nowrap ${
                      i === 0
                        ? "sticky left-0 bg-stone-50 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)]"
                        : ""
                    }`}
                  >
                    {formatMathText(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-stone-50/50"}>
                  {row.map((cell, cellIndex) => {
                    const cleanCellText = String(cell).replace(/<[^>]*>/g, '');
                    const isShort = cleanCellText.length < 35;
                    return (
                      <td
                        key={cellIndex}
                        className={`px-2 md:px-4 py-2.5 md:py-3 text-stone-600 font-sans text-xs md:text-sm border-b border-stone-100 ${
                          isShort ? "whitespace-nowrap" : ""
                        } ${
                          cellIndex === 0
                            ? `sticky left-0 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)] ${
                                rowIndex % 2 === 0 ? "bg-white" : "bg-[#fcfcfb]"
                              }`
                            : ""
                        }`}
                        dangerouslySetInnerHTML={{ __html: formatMathText(cell) }}
                      />
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "numbered-list":
      return (
        <ol className="list-decimal list-inside pl-2 mb-4 space-y-2.5">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="text-stone-700 leading-[1.85] text-sm md:text-base font-sans"
              data-hl-path={`${path}-${idx}`}
              dangerouslySetInnerHTML={{ __html: formatMathText(item) }}
            />
          ))}
        </ol>
      );

    case "bubble-sort-visualizer":
      return (
        <BubbleSortVisualizer key={path} />
      );

    case "quick-sort-visualizer":
      return (
        <QuickSortVisualizer key={path} mode={block.mode} />
      );

    case "quick-sort-flowchart":
      return (
        <QuickSortFlowchart key={path} />
      );

    case "big-o-curve-chart":
      return (
        <BigOCurveChart key={path} />
      );

    case "big-o-simulator":
      return (
        <BigOSimulator key={path} />
      );

    case "big-o-code-tabs":
      return (
        <BigOCodeTabs 
          key={path} 
          block={block} 
          activeLang={activeLang} 
          setActiveLang={setActiveLang} 
        />
      );

    case "pass-by-value-ref-visualizer":
      return (
        <MemoryVisualizer key={path} />
      );

    case "pass-by-value-ref-code-tabs":
      return (
        <PassByRefCodeTabs key={path} />
      );

    case "pass-by-value-ref-quiz":
      return (
        <ConceptQuiz key={path} />
      );

    case "java-run-cycle-visualizer":
      return (
        <JavaRunCycleVisualizer key={path} />
      );

    case "java-scanner-visualizer":
      return (
        <ScannerVisualizer key={path} />
      );

    case "java-casting-playground":
      return (
        <CastingPlayground key={path} />
      );

    case "java-printf-formatter":
      return (
        <PrintfFormatter key={path} />
      );

    case "java-math-playground":
      return (
        <MathPlayground key={path} />
      );

    case "java-pass-by-value-visualizer":
      return (
        <PassByValueVisualizer key={path} />
      );

    case "java-recursion-visualizer":
      return (
        <RecursionVisualizer key={path} />
      );

    case "java-array-playground":
      return (
        <ArrayPlayground key={path} />
      );

    case "java-string-pool-visualizer":
      return (
        <StringPoolVisualizer key={path} />
      );

    case "java-string-methods-sandbox":
      return (
        <StringMethodsSandbox key={path} />
      );

    case "java-name-parser-playground":
      return (
        <NameParserPlayground key={path} />
      );

    case "java-string-methods-explorer":
      return (
        <StringMethodsExplorer key={path} />
      );

    case "java-chapter3-summary-dashboard":
      return (
        <ChapterSummaryDashboard key={path} />
      );

    case "java-compile-workflow":
      return (
        <JavaCompileWorkflow key={path} />
      );

    case "java-scanner-playground":
      return (
        <ScannerPlayground key={path} />
      );

    case "java-string-comparison-mini":
      return (
        <StringComparisonMini key={path} />
      );

    case "java-math-sandbox":
      return (
        <MathSandbox key={path} />
      );

    case "java-method-invocation-simulator":
      return (
        <MethodInvocationSimulator key={path} />
      );

    case "java-constructor-memory-visualizer":
      return (
        <ConstructorMemoryVisualizer key={path} />
      );

    case "java-overloading-dispatch-sandbox":
      return (
        <OverloadingDispatchSandbox key={path} />
      );

    case "java-decimal-format-playground":
      return (
        <DecimalFormatPlayground key={path} />
      );

    case "java-random-range-visualizer":
      return (
        <RandomRangeVisualizer key={path} />
      );

    case "java-wrapper-boxing-visualizer":
      return (
        <WrapperBoxingVisualizer key={path} />
      );

    case "java-point-grid-sandbox":
      return (
        <PointGridSandbox key={path} />
      );

    case "java-api-black-box-simulator":
      return (
        <ApiBlackBoxSimulator key={path} />
      );

    case "java-user-to-designer-timeline":
      return (
        <UserToDesignerTimeline key={path} />
      );

    case "java-exam-gotchas-flashcards":
      return (
        <ExamGotchasFlashcards key={path} />
      );

    case "java-abstraction-concept-visualizer":
      return (
        <AbstractionConceptVisualizer key={path} />
      );

    case "java-abstraction-level-compare":
      return (
        <AbstractionLevelCompare key={path} />
      );

    case "java-abstract-bike-visualizer":
      return (
        <AbstractBikeVisualizer key={path} />
      );

    case "java-abstract-shape-visualizer":
      return (
        <AbstractShapeVisualizer key={path} />
      );

    case "java-abstract-bank-visualizer":
      return (
        <AbstractBankVisualizer key={path} />
      );

    case "java-abstract-bike-constructor-visualizer":
      return (
        <AbstractBikeConstructorVisualizer key={path} />
      );

    case "java-abstract-notations-flashcards":
      return (
        <AbstractNotationsFlashcards key={path} />
      );

    case "java-abstract-combined-hierarchy":
      return (
        <AbstractCombinedHierarchy key={path} />
      );

    case "java-abstract-summary-dashboard":
      return (
        <AbstractSummaryDashboard key={path} />
      );

    case "java-abstract-spectrum-visualizer":
      return (
        <AbstractSpectrumVisualizer key={path} />
      );

    case "java-abstract-keyword-cloud":
      return (
        <AbstractKeywordCloud key={path} />
      );

    case "java-interface-design-principles":
      return (
        <InterfaceDesignPrinciples key={path} />
      );

    case "java-interface-information-hiding":
      return (
        <InterfaceInformationHiding key={path} />
      );

    case "java-interface-pre-post-conditions":
      return (
        <InterfacePrePostConditions key={path} />
      );

    case "java-interface-data-abstraction-adt":
      return (
        <InterfaceDataAbstractionAdt key={path} />
      );

    case "java-interface-employee-cohesion":
      return (
        <InterfaceEmployeeCohesion key={path} />
      );

    case "java-interface-water-dispenser-adt":
      return (
        <InterfaceWaterDispenserAdt key={path} />
      );

    case "java-interface-adt-operations-table":
      return (
        <InterfaceAdtOperationsTable key={path} />
      );

    case "java-interface-complex-number-plane":
      return (
        <InterfaceComplexNumberPlane key={path} />
      );

    case "java-interface-shape-comparable":
      return (
        <InterfaceShapeComparable key={path} />
      );

    case "java-interface-complex-implementations":
      return (
        <InterfaceComplexImplementations key={path} />
      );

    case "java-interface-jvm-memory-polymorphism":
      return (
        <InterfaceJvmMemoryPolymorphism key={path} />
      );

    case "java-interface-float-precision-playground":
      return (
        <InterfaceFloatPrecisionPlayground key={path} />
      );

    case "java-interface-fraction-memory-ram":
      return (
        <InterfaceFractionMemoryRam key={path} />
      );

    case "java-interface-fraction-immutable-flow":
      return (
        <InterfaceFractionImmutableFlow key={path} />
      );

    case "java-interface-fraction-sandbox":
      return (
        <InterfaceFractionSandbox key={path} />
      );

    case "java-interface-exam-trap-flashcards":
      return (
        <InterfaceExamTrapFlashcards key={path} />
      );

    case "java-collection-array-c-vs-java":
      return (
        <CollectionArrayCvsJava key={path} />
      );

    case "java-collection-array-for-loop-sim":
      return (
        <CollectionArrayForLoopSim key={path} />
      );

    case "java-collection-array-reference-swap":
      return (
        <CollectionArrayReferenceSwap key={path} />
      );

    case "java-collection-array-cli-detour":
      return (
        <CollectionArrayCliDetour key={path} />
      );

    case "java-collection-array-errors-warning":
      return (
        <CollectionArrayErrorsWarning key={path} />
      );

    case "java-collection-array-null-pointer-sim":
      return (
        <CollectionArrayNullPointerSim key={path} />
      );

    case "java-collection-array-jagged-2d":
      return (
        <CollectionArrayJagged2D key={path} />
      );

    case "java-collection-array-reconstruction":
      return (
        <CollectionArrayReconstruction key={path} />
      );

    case "java-collection-generics-playground":
      return (
        <CollectionGenericsPlayground key={path} />
      );

    case "java-collection-generics-wrapper-type":
      return (
        <CollectionGenericsWrapperType key={path} />
      );

    case "java-collection-generics-autoboxing":
      return (
        <CollectionGenericsAutoboxing key={path} />
      );

    case "java-collection-generics-multi-pair":
      return (
        <CollectionGenericsMultiPair key={path} />
      );

    case "java-collection-vector-sandbox":
      return (
        <CollectionVectorSandbox key={path} />
      );

    case "java-collection-vector-executer":
      return (
        <CollectionVectorExecuter key={path} />
      );

    case "java-collection-vector-synchronized":
      return (
        <CollectionVectorSynchronized key={path} />
      );

    case "java-collection-arraylist-comparison":
      return (
        <CollectionArrayListComparison key={path} />
      );

    case "java-collection-arraylist-api-table":
      return (
        <CollectionArrayListApiTable key={path} />
      );

    case "java-collection-arraylist-executer":
      return (
        <CollectionArrayListExecuter key={path} />
      );

    case "java-collection-arraylist-sandbox":
      return (
        <CollectionArrayListSandbox key={path} />
      );

    case "java-collection-summary-mindmap":
      return (
        <CollectionSummaryMindMap key={path} />
      );

    case "java-collection-practice-exercises":
      return (
        <CollectionPracticeExercises key={path} />
      );

    case "java-oop-exceptions-goals-explorer":
      return (
        <ExceptionsGoalsExplorer key={path} />
      );

    case "java-exceptions-error-types-examples":
      return (
        <ExceptionsErrorTypesAndExamples key={path} />
      );

    case "java-exceptions-mechanism":
      return (
        <ExceptionsJavaMechanism key={path} />
      );

    case "java-exceptions-indication-visualizer":
      return (
        <ExceptionsIndicationVisualizer key={path} />
      );

    case "java-exceptions-handling-visualizer":
      return (
        <ExceptionsHandlingVisualizer key={path} />
      );

    case "java-exceptions-flow-retry":
      return (
        <ExceptionsFlowAndRetry key={path} />
      );

    case "java-exceptions-checked-custom":
      return (
        <ExceptionsCheckedVsCustom key={path} />
      );

    case "java-exceptions-bank-simulation":
      return (
        <ExceptionsBankSimulation key={path} />
      );

    case "java-exceptions-summary-mindmap":
      return (
        <ExceptionsSummaryMindMap key={path} />
      );

    case "java-oop-file-goals-explorer":
      return (
        <FileGoalsExplorer key={path} />
      );

    case "java-oop-file-streams-io":
      return (
        <FileStreamsAndIO key={path} />
      );

    case "java-oop-file-class-sandbox":
      return (
        <FileClassSandbox key={path} />
      );

    case "java-oop-file-descriptor-data-io":
      return (
        <FileDescriptorAndDataIO key={path} />
      );

    case "java-oop-file-package-explorer":
      return (
        <JavaIOPackageExplorer key={path} />
      );

    case "java-oop-inputstream-methods-explorer":
      return (
        <InputStreamMethodsExplorer key={path} />
      );

    case "java-oop-file-and-byte-stream-visualizer":
      return (
        <FileAndByteStreamVisualizer key={path} />
      );

    case "java-oop-code-explainer":
      return (
        <CodeExplainer key={path} {...block} />
      );

    case "java-oop-output-stream-visualizer":
      return (
        <OutputStreamVisualizer key={path} />
      );

    case "java-oop-filter-stream-visualizer":
      return (
        <FilterStreamVisualizer key={path} />
      );

    case "java-oop-buffered-stream-visualizer":
      return (
        <BufferedStreamVisualizer key={path} />
      );

    case "java-oop-character-stream-visualizer":
      return (
        <CharacterStreamVisualizer key={path} />
      );

    case "java-oop-char-array-stream-visualizer":
      return (
        <CharArrayStreamVisualizer key={path} />
      );

    case "java-oop-chaining-pipeline-builder":
      return (
        <ChainingPipelineBuilder key={path} />
      );

    case "java-oop-serialization-visualizer":
      return (
        <SerializationVisualizer key={path} />
      );

    case "java-oop-file-io-summary-mindmap":
      return (
        <FileIoSummaryMindmap key={path} />
      );

    case "java-uml-to-code-sandbox":
      return (
        <UmlToCodeSandbox key={path} />
      );

    case "java-uml-symbol-matcher":
      return (
        <UmlSymbolMatcher key={path} />
      );

    case "java-user-vs-designer-switcher":
      return (
        <UserVsDesignerSwitcher key={path} />
      );

    case "java-multi-paradigm-syntax-viewer":
      return (
        <MultiParadigmSyntaxViewer key={path} />
      );

    case "java-procedural-vs-oop-interactive-grid":
      return (
        <ProceduralVsOopInteractiveGrid key={path} />
      );

    case "java-oop-pillars-dashboard":
      return (
        <OopPillarsDashboard key={path} />
      );

    case "java-stringbuffer-memory-visualizer":
      return (
        <StringBufferMemoryVisualizer key={path} />
      );

    case "java-stringbuffer-thread-lock-visualizer":
      return (
        <StringBufferThreadLockVisualizer key={path} />
      );

    case "java-stringbuffer-sandbox":
      return (
        <StringBufferSandbox key={path} />
      );

    case "java-stringbuffer-examples-tabs":
      return (
        <StringBufferExamplesTabs key={path} />
      );

    case "java-stringbuilder-thread-safety-visualizer":
      return (
        <StringBuilderThreadSafetyVisualizer key={path} />
      );

    case "java-string-performance-benchmark":
      return (
        <StringPerformanceBenchmark key={path} />
      );

    case "java-string-compare-matrix":
      return (
        <StringCompareMatrix key={path} />
      );

    case "java-string-tokenizer-sandbox":
      return (
        <StringTokenizerSandbox key={path} />
      );

    case "java-vietnamese-name-normalizer":
      return (
        <VietnameseNameNormalizer key={path} />
      );

    case "java-string-summary-dashboard":
      return (
        <StringSummaryDashboard key={path} />
      );

    case "java-inheritance-goals-explorer":
      return (
        <InheritanceGoalsExplorer key={path} />
      );

    case "java-inheritance-oop-overview":
      return (
        <InheritanceOopOverview key={path} />
      );

    case "java-inheritance-overriding-review":
      return (
        <InheritanceOverridingReview key={path} />
      );

    case "java-inheritance-creating-subclass":
      return (
        <InheritanceCreatingSubclass key={path} />
      );

    case "java-inheritance-substitutability":
      return (
        <InheritanceSubstitutability key={path} />
      );

    case "java-inheritance-object-class":
      return (
        <InheritanceObjectClass key={path} />
      );

    case "java-inheritance-isa-hasa":
      return (
        <InheritanceIsaHasa key={path} />
      );

    case "java-inheritance-final-keyword":
      return (
        <InheritanceFinalKeyword key={path} />
      );

    case "java-inheritance-limitations":
      return (
        <InheritanceLimitations key={path} />
      );

    case "java-inheritance-quiz-chaining":
      return (
        <InheritanceQuizChaining key={path} />
      );

    case "java-inheritance-quiz-compilerun":
      return (
        <InheritanceQuizCompileRun key={path} />
      );

    case "java-inheritance-summary":
      return (
        <InheritanceSummary key={path} />
      );

    case "java-bank-account-exploit-simulator":
      return (
        <BankAccountExploitSimulator key={path} />
      );

    case "java-encapsulation-solution-box":
      return (
        <EncapsulationSolutionBox key={path} />
      );

    case "java-bankacct-compile-workflow":
      return (
        <BankAcctCompileWorkflow key={path} />
      );

    case "java-class-vs-instance-comparison":
      return (
        <ClassVsInstanceComparison key={path} />
      );

    case "java-static-memory-visualizer":
      return (
        <StaticMemoryVisualizer key={path} />
      );

    case "java-test-ball-workflow":
      return (
        <TestBallWorkflow key={path} />
      );

    case "java-this-reference-visualizer":
      return (
        <ThisReferenceVisualizer key={path} />
      );

    case "java-constructor-chaining-visualizer":
      return (
        <ConstructorChainingVisualizer key={path} />
      );

    case "java-object-equality-inspector":
      return (
        <ObjectEqualityInspector key={path} />
      );

    case "java-improved-myball-tabs":
      return (
        <ImprovedMyBallTabs key={path} />
      );

    case "java-uml-visibility-cards":
      return (
        <UmlVisibilityCards key={path} />
      );

    case "java-uml-interactive-diagram":
      return (
        <UmlInteractiveDiagram key={path} />
      );

    case "java-dependency-visualizer":
      return (
        <DependencyVisualizer key={path} />
      );

    case "java-interactive-recap-panel":
      return (
        <InteractiveRecapPanel key={path} />
      );

    case "dsa-complex-visualizer":
      return (
        <ComplexVisualizer key={path} />
      );

    case "dsa-fraction-visualizer":
      return (
        <FractionVisualizer key={path} />
      );

    case "hcm-timeline-1945-1969":
      return (
        <HcmTimeline1945to1969 key={path} />
      );

    case "hcm-values-explorer":
      return (
        <HcmValuesExplorer key={path} />
      );

    case "hcm-world-development":
      return (
        <HcmWorldDevelopment key={path} />
      );

    case "hcm-chapter3-goals-explorer":
      return (
        <HcmChapter3GoalsExplorer key={path} />
      );

    case "hcm-chapter4-goals-explorer":
      return (
        <HcmChapter4GoalsExplorer key={path} />
      );

    case "hcm-chapter5-goals-explorer":
      return (
        <HcmChapter5GoalsExplorer key={path} />
      );

    case "hcm-great-unity-role":
      return (
        <HcmGreatUnityRole key={path} />
      );

    case "hcm-great-unity-force":
      return (
        <HcmGreatUnityForce key={path} />
      );

    case "hcm-unity-conditions":
      return (
        <HcmUnityConditions key={path} />
      );

    case "hcm-front-organization":
      return (
        <HcmFrontOrganization key={path} />
      );

    case "hcm-unity-methods":
      return (
        <HcmUnityMethods key={path} />
      );

    case "hcm-international-need":
      return (
        <HcmInternationalNeed key={path} />
      );

    case "hcm-international-forces":
      return (
        <HcmInternationalForces key={path} />
      );

    case "hcm-international-principles":
      return (
        <HcmInternationalPrinciples key={path} />
      );

    case "hcm-applying-party-lines":
      return (
        <HcmApplyingPartyLines key={path} />
      );

    case "hcm-applying-alliance":
      return (
        <HcmApplyingAlliance key={path} />
      );

    case "hcm-applying-international":
      return (
        <HcmApplyingInternational key={path} />
      );

    case "hcm-party-founding-necessity":
      return (
        <HcmPartyFoundingNecessity key={path} />
      );

    case "hcm-party-morality":
      return (
        <HcmPartyMorality key={path} />
      );

    case "hcm-party-principles":
      return (
        <HcmPartyPrinciples key={path} />
      );

    case "hcm-cadre-building":
      return (
        <HcmCadreBuilding key={path} />
      );

    case "hcm-state-class-nature":
      return (
        <HcmStateClassNature key={path} />
      );

    case "hcm-state-of-people":
      return (
        <HcmStateOfPeople key={path} />
      );

    case "hcm-state-by-people":
      return (
        <HcmStateByPeople key={path} />
      );

    case "hcm-state-for-people":
      return (
        <HcmStateForPeople key={path} />
      );

    case "hcm-state-rule-of-law":
      return (
        <HcmStateRuleOfLaw key={path} />
      );

    case "hcm-state-power-control":
      return (
        <HcmStatePowerControl key={path} />
      );

    case "hcm-state-anti-corruption":
      return (
        <HcmStateAntiCorruption key={path} />
      );

    case "hcm-apply-party-building":
      return (
        <HcmApplyPartyBuilding key={path} />
      );

    case "hcm-apply-state-building":
      return (
        <HcmApplyStateBuilding key={path} />
      );

    case "hcm-independence-freedom":
      return (
        <HcmIndependenceFreedom key={path} />
      );

    case "hcm-independence-happiness":
      return (
        <HcmIndependenceHappiness key={path} />
      );

    case "hcm-independence-thorough":
      return (
        <HcmIndependenceThorough key={path} />
      );

    case "hcm-independence-unity":
      return (
        <HcmIndependenceUnity key={path} />
      );

    case "hcm-proletarian-revolution":
      return (
        <HcmProletarianRevolution key={path} />
      );

    case "hcm-party-leadership":
      return (
        <HcmPartyLeadership key={path} />
      );

    case "hcm-national-unity":
      return (
        <HcmNationalUnity key={path} />
      );

    case "hcm-active-creativity":
      return (
        <HcmActiveCreativity key={path} />
      );

    case "hcm-revolutionary-violence":
      return (
        <HcmRevolutionaryViolence key={path} />
      );

    case "hcm-socialism-concept":
      return (
        <HcmSocialismConcept key={path} />
      );

    case "hcm-socialism-necessity":
      return (
        <HcmSocialismNecessity key={path} />
      );

    case "hcm-socialism-features":
      return (
        <HcmSocialismFeatures key={path} />
      );

    case "hcm-socialism-goals":
      return (
        <HcmSocialismGoals key={path} />
      );

    case "hcm-socialism-dynamics":
      return (
        <HcmSocialismDynamics key={path} />
      );

    case "hcm-transition-nature":
      return (
        <HcmTransitionNature key={path} />
      );

    case "hcm-transition-principles":
      return (
        <HcmTransitionPrinciples key={path} />
      );

    case "hcm-relation-precondition":
      return (
        <HcmRelationPrecondition key={path} />
      );

    case "hcm-relation-guarantee":
      return (
        <HcmRelationGuarantee key={path} />
      );

    case "hcm-relation-conditions":
      return (
        <HcmRelationConditions key={path} />
      );

    case "hcm-app-steadfast":
      return (
        <HcmAppSteadfast key={path} />
      );

    case "hcm-app-democracy":
      return (
        <HcmAppDemocracy key={path} />
      );

    case "hcm-app-system":
      return (
        <HcmAppSystem key={path} />
      );

    case "hcm-app-combating":
      return (
        <HcmAppCombating key={path} />
      );

    case "lsd-history-timeline":
      return (
        <LsdHistoryTimeline key={path} />
      );

    case "lsd-object-explorer":
      return (
        <LsdObjectExplorer key={path} />
      );

    case "lsd-functions-explorer":
      return (
        <LsdFunctionsExplorer key={path} />
      );

    case "lsd-tasks-explorer":
      return (
        <LsdTasksExplorer key={path} />
      );

    case "lsd-methodology-explorer":
      return (
        <LsdMethodologyExplorer key={path} />
      );

    case "lsd-specific-methods-explorer":
      return (
        <LsdSpecificMethodsExplorer key={path} />
      );

    case "lsd-requirements-goals-explorer":
      return (
        <LsdRequirementsGoalsExplorer key={path} />
      );

    case "lsd-chapter1-goals-explorer":
      return (
        <LsdChapter1GoalsExplorer key={path} />
      );

    case "lsd-capitalism-belongings":
      return (
        <LsdCapitalismBelongings key={path} />
      );

    case "lsd-october-revolution":
      return (
        <LsdOctoberRevolution key={path} />
      );

    case "lsd-colonial-vietnam":
      return (
        <LsdColonialVietnam key={path} />
      );

    case "lsd-patriotic-movements":
      return (
        <LsdPatrioticMovements key={path} />
      );

    case "lsd-search-for-way":
      return (
        <LsdSearchForWay key={path} />
      );

    case "lsd-international-activities":
      return (
        <LsdInternationalActivities key={path} />
      );

    case "lsd-revolution-preparations":
      return (
        <LsdRevolutionPreparations key={path} />
      );

    case "lsd-communist-organizations":
      return (
        <LsdCommunistOrganizations key={path} />
      );

    case "lsd-party-founding-conference":
      return (
        <LsdPartyFoundingConference key={path} />
      );

    case "lsd-conference-resolutions":
      return (
        <LsdConferenceResolutions key={path} />
      );

    case "lsd-history-significance":
      return (
        <LsdHistorySignificance key={path} />
      );

    case "lsd-movement-1930-1931":
      return (
        <LsdMovement19301931 key={path} />
      );

    case "lsd-political-thesis-1930":
      return (
        <LsdPoliticalThesis1930 key={path} />
      );

    case "lsd-recovery-congress-1935":
      return (
        <LsdRecoveryAndCongress1935 key={path} />
      );

    case "lsd-democracy-context":
      return (
        <LsdDemocracyContext key={path} />
      );

    case "lsd-democracy-movement":
      return (
        <LsdDemocracyMovement key={path} />
      );

    case "lsd-democracy-significance":
      return (
        <LsdDemocracySignificance key={path} />
      );

    case "lsd-national-liberation-strategy":
      return (
        <LsdNationalLiberationStrategy key={path} />
      );

    case "lsd-liberation-preparation":
      return (
        <LsdLiberationPreparation key={path} />
      );

    case "lsd-anti-japanese-movement":
      return (
        <LsdAntiJapaneseMovement key={path} />
      );

    case "lsd-august-revolution":
      return (
        <LsdAugustRevolution key={path} />
      );

    case "lsd-revolution-significance":
      return (
        <LsdRevolutionSignificance key={path} />
      );

    default:
      return (
        <p className="text-paragraph text-stone-700 leading-[1.9] mb-4 text-sm md:text-base font-sans" data-hl-path={path} dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
      );
  }
}

function highlightCode(code, language) {
  if (!code) return "";
  
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (language === "python") {
    const comments = [];
    const strings = [];

    // Extract comments first (# to end of line)
    escaped = escaped.replace(/#.*$/gm, (match) => {
      comments.push(match);
      return `___COMMENT_PLACEHOLDER_${comments.length - 1}___`;
    });

    // Extract strings
    escaped = escaped.replace(/"(.*?)"/g, (match, p1) => {
      strings.push(p1);
      return `___STRING_PLACEHOLDER_${strings.length - 1}___`;
    });

    // Keywords
    const keywords = ["def", "return", "for", "in", "if", "elif", "else", "while", "import", "from", "as", "class", "try", "except", "break", "continue"];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      escaped = escaped.replace(regex, `___KEYWORD_PLACEHOLDER_${kw}___`);
    });

    // Built-ins or types
    const builtins = ["len", "enumerate", "range", "print", "arr", "target", "int", "list"];
    builtins.forEach(bi => {
      const regex = new RegExp(`\\b${bi}\\b`, 'g');
      escaped = escaped.replace(regex, `___BUILTIN_PLACEHOLDER_${bi}___`);
    });

    escaped = escaped.replace(/\b\d+\b/g, '___NUMBER_PLACEHOLDER_$&___');

    // Replace placeholders
    keywords.forEach(kw => {
      escaped = escaped.replace(new RegExp(`___KEYWORD_PLACEHOLDER_${kw}___`, 'g'), `<span class="text-[#569cd6] font-bold font-mono">${kw}</span>`);
    });
    builtins.forEach(bi => {
      escaped = escaped.replace(new RegExp(`___BUILTIN_PLACEHOLDER_${bi}___`, 'g'), `<span class="text-[#4ec9b0] font-semibold font-mono">${bi}</span>`);
    });
    escaped = escaped.replace(/___NUMBER_PLACEHOLDER_(\d+)___/g, '<span class="text-[#b5cea8] font-mono">$1</span>');

    // Restore strings
    escaped = escaped.replace(/___STRING_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const strVal = strings[parseInt(p1, 10)];
      return `<span class="text-[#ce9178] font-mono">"${strVal}"</span>`;
    });

    // Restore comments
    escaped = escaped.replace(/___COMMENT_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const commentText = comments[parseInt(p1, 10)];
      return `<span class="text-green-600 italic font-sans">${commentText}</span>`;
    });

    return escaped;
  }

  if (language === "c") {
    const comments = [];
    const strings = [];

    // Extract comments
    escaped = escaped.replace(/\/\/.*$/gm, (match) => {
      comments.push(match);
      return `___COMMENT_PLACEHOLDER_${comments.length - 1}___`;
    });

    // Keywords
    const keywords = ["int", "void", "for", "if", "return", "while", "else", "break", "continue"];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      escaped = escaped.replace(regex, `___KEYWORD_PLACEHOLDER_${kw}___`);
    });

    // Types / identifiers
    const identifiers = ["target", "arr", "temp", "binary_search", "linear_search", "bubble_sort", "mid", "left", "right"];
    identifiers.forEach(id => {
      const regex = new RegExp(`\\b${id}\\b`, 'g');
      escaped = escaped.replace(regex, `___IDENTIFIER_PLACEHOLDER_${id}___`);
    });

    escaped = escaped.replace(/\b\d+\b/g, '___NUMBER_PLACEHOLDER_$&___');

    // Replace placeholders
    keywords.forEach(kw => {
      escaped = escaped.replace(new RegExp(`___KEYWORD_PLACEHOLDER_${kw}___`, 'g'), `<span class="text-[#569cd6] font-bold font-mono">${kw}</span>`);
    });
    identifiers.forEach(id => {
      escaped = escaped.replace(new RegExp(`___IDENTIFIER_PLACEHOLDER_${id}___`, 'g'), `<span class="text-[#4ec9b0] font-semibold font-mono">${id}</span>`);
    });
    escaped = escaped.replace(/___NUMBER_PLACEHOLDER_(\d+)___/g, '<span class="text-[#b5cea8] font-mono">$1</span>');

    // Restore comments
    escaped = escaped.replace(/___COMMENT_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const commentText = comments[parseInt(p1, 10)];
      return `<span class="text-green-600 italic font-sans">${commentText}</span>`;
    });

    return escaped;
  }

  if (language === "java") {
    const comments = [];
    const strings = [];

    // Extract comments first to prevent highlighting inside comments
    escaped = escaped.replace(/\/\/.*$/gm, (match) => {
      comments.push(match);
      return `___COMMENT_PLACEHOLDER_${comments.length - 1}___`;
    });

    // Extract strings next to prevent highlighting inside strings
    escaped = escaped.replace(/"(.*?)"/g, (match, p1) => {
      strings.push(p1);
      return `___STRING_PLACEHOLDER_${strings.length - 1}___`;
    });

    // Perform regex replacements for keywords, types, numbers, literals
    const keywords = [
      "public", "class", "static", "void", "int", "boolean", "for", 
      "if", "break", "return", "new", "import", "package", "while", "continue"
    ];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      escaped = escaped.replace(regex, `___KEYWORD_PLACEHOLDER_${kw}___`);
    });

    const types = ["BubbleSort", "String", "System", "Math", "temp", "QuickSortRecursive", "QuickSortIterative", "Stack", "Stack<int[]>"];
    types.forEach(t => {
      const regex = new RegExp(`\\b${t}\\b`, 'g');
      escaped = escaped.replace(regex, `___TYPE_PLACEHOLDER_${t}___`);
    });

    escaped = escaped.replace(/\b(true|false|null)\b/g, '___LITERAL_PLACEHOLDER_$1___');
    escaped = escaped.replace(/\b\d+\b/g, '___NUMBER_PLACEHOLDER_$&___');

    // Replace the placeholders with final HTML spans
    keywords.forEach(kw => {
      escaped = escaped.replace(new RegExp(`___KEYWORD_PLACEHOLDER_${kw}___`, 'g'), `<span class="text-[#569cd6] font-bold font-mono">${kw}</span>`);
    });

    types.forEach(t => {
      escaped = escaped.replace(new RegExp(`___TYPE_PLACEHOLDER_${t}___`, 'g'), `<span class="text-[#4ec9b0] font-semibold font-mono">${t}</span>`);
    });

    escaped = escaped.replace(/___LITERAL_PLACEHOLDER_(true|false|null)___/g, '<span class="text-[#569cd6] font-mono">$1</span>');
    escaped = escaped.replace(/___NUMBER_PLACEHOLDER_(\d+)___/g, '<span class="text-[#b5cea8] font-mono">$1</span>');

    // Restore strings with final HTML spans
    escaped = escaped.replace(/___STRING_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const strVal = strings[parseInt(p1, 10)];
      return `<span class="text-[#ce9178] font-mono">"${strVal}"</span>`;
    });

    // Restore comments with final HTML spans
    escaped = escaped.replace(/___COMMENT_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const commentText = comments[parseInt(p1, 10)];
      return `<span class="text-green-600 italic font-sans">${commentText}</span>`;
    });

    return escaped;
  }

  if (language === "pseudocode" || language === "algo") {
    const comments = [];

    // Extract comments
    escaped = escaped.replace(/\/\/.*$/gm, (match) => {
      comments.push(match);
      return `___COMMENT_PLACEHOLDER_${comments.length - 1}___`;
    });

    const keywords = [
      "procedure", "function", "end", "for", "to", "inclusive", "do", "if", 
      "then", "repeat", "until", "not", "swap", "swapped", "length", "while", "true", "return"
    ];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      escaped = escaped.replace(regex, `___KEYWORD_PLACEHOLDER_${kw}___`);
    });

    escaped = escaped.replace(/\b\d+\b/g, '___NUMBER_PLACEHOLDER_$&___');
    
    const identifiers = ["bubbleSort", "A", "n", "i", "swapped", "quickSortLomuto", "partitionLomuto", "quickSortHoare", "partitionHoare", "lo", "hi", "p", "pivot", "j"];
    identifiers.forEach(id => {
      const regex = new RegExp(`\\b${id}\\b`, 'g');
      escaped = escaped.replace(regex, `___IDENTIFIER_PLACEHOLDER_${id}___`);
    });

    // Replace placeholders with final HTML spans
    keywords.forEach(kw => {
      escaped = escaped.replace(new RegExp(`___KEYWORD_PLACEHOLDER_${kw}___`, 'g'), `<span class="text-[#c586c0] font-bold font-mono">${kw}</span>`);
    });

    escaped = escaped.replace(/___NUMBER_PLACEHOLDER_(\d+)___/g, '<span class="text-[#b5cea8] font-mono">$1</span>');

    identifiers.forEach(id => {
      escaped = escaped.replace(new RegExp(`___IDENTIFIER_PLACEHOLDER_${id}___`, 'g'), `<span class="text-[#9cdcfe] font-mono">${id}</span>`);
    });

    // Restore comments
    escaped = escaped.replace(/___COMMENT_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const commentText = comments[parseInt(p1, 10)];
      return `<span class="text-green-600 italic font-sans">${commentText}</span>`;
    });

    return escaped;
  }

  return escaped;
}

// ============================================================
// COMPONENTS DÀNH CHO BIG O NOTATION
// ============================================================

function BigOCurveChart() {
  const [hoveredCurve, setHoveredCurve] = useState(null);

  const curves = [
    {
      id: "o1",
      name: "O(1) - Hằng số",
      color: "#22c55e",
      equation: "Y = 1",
      desc: "Thời gian chạy không đổi bất kể kích thước dữ liệu. Hiệu năng lý tưởng nhất.",
      example: "Truy xuất phần tử mảng theo chỉ số, chèn/xóa trong HashMap.",
      points: "60,310 460,310"
    },
    {
      id: "ologn",
      name: "O(log n) - Logarit",
      color: "#10b981",
      equation: "Y = log2(n)",
      desc: "Thời gian chạy tăng rất chậm khi dữ liệu tăng lớn. Rất tối ưu.",
      example: "Thuật toán tìm kiếm nhị phân (Binary Search).",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 10;
        const y = Math.log2(x + 1);
        return `${60 + x * 40},${340 - y * 30}`;
      }).join(" ")
    },
    {
      id: "on",
      name: "O(n) - Tuyến tính",
      color: "#84cc16",
      equation: "Y = n",
      desc: "Thời gian chạy tỉ lệ thuận trực tiếp với kích thước dữ liệu.",
      example: "Tìm kiếm tuần tự (Linear Search), tìm Max/Min trong mảng.",
      points: "60,340 460,40"
    },
    {
      id: "onlogn",
      name: "O(n log n) - Tuyến tính Logarit",
      color: "#eab308",
      equation: "Y = n * log2(n)",
      desc: "Hiệu năng tốt nhất cho các thuật toán sắp xếp đa mục đích.",
      example: "Merge Sort, Quick Sort (trung bình), Heap Sort.",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 10;
        const y = x * Math.log2(x + 1) * 0.25;
        return `${60 + x * 40},${340 - Math.min(10, y) * 30}`;
      }).join(" ")
    },
    {
      id: "on2",
      name: "O(n²) - Bậc hai",
      color: "#f97316",
      equation: "Y = n²",
      desc: "Thời gian chạy tăng vọt nhanh chóng. Kém hiệu quả với dữ liệu lớn.",
      example: "Bubble Sort, Selection Sort, hai vòng lặp lồng nhau.",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 10;
        const y = x * x * 0.1;
        return `${60 + x * 40},${340 - Math.min(10, y) * 30}`;
      }).join(" ")
    },
    {
      id: "o2n",
      name: "O(2^n) - Hàm mũ",
      color: "#ef4444",
      equation: "Y = 2^n",
      desc: "Tốc độ chạy tăng cực kỳ nhanh. Thuật toán mất khả năng chạy khi N hơi lớn.",
      example: "Tìm số Fibonacci đệ quy ngây thơ, duyệt mọi tập con.",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 10;
        const y = Math.pow(2, x) * 0.01;
        return `${60 + x * 40},${340 - Math.min(10, y) * 30}`;
      }).join(" ")
    },
    {
      id: "onfact",
      name: "O(n!) - Giai thừa",
      color: "#7f1d1d",
      equation: "Y = n!",
      desc: "Thời gian chạy tồi tệ nhất. Thuật toán treo máy ngay cả khi N chỉ từ 15-20.",
      example: "Bài toán người giao hàng vét cạn (TSP), tìm mọi hoán vị.",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 5;
        let f = 1;
        for(let j=2; j<=x; j++) f *= j;
        const y = f * 0.08;
        return `${60 + x * 80},${340 - Math.min(10, y) * 30}`;
      }).join(" ")
    }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-6 shadow-sm select-none">
      <div className="flex flex-col md:flex-row gap-6">
        {/* SVG Chart */}
        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-4 flex justify-center items-center shadow-inner relative">
          <svg viewBox="0 0 500 400" className="w-full h-auto overflow-visible font-sans text-[10px]">
            {/* Grid lines */}
            <line x1="60" y1="340" x2="460" y2="340" stroke="#a8a29e" strokeWidth="2" />
            <line x1="60" y1="40" x2="60" y2="340" stroke="#a8a29e" strokeWidth="2" />
            
            {/* Grid labels */}
            <text x="460" y="360" textAnchor="end" className="fill-stone-500 font-bold uppercase tracking-wider text-[11px]">Dữ liệu N →</text>
            <text x="25" y="190" textAnchor="middle" className="fill-stone-500 font-bold uppercase tracking-wider text-[11px]" transform="rotate(-90 25 190)">Số phép tính (Tốc độ) →</text>

            {/* Grid background markers */}
            {Array.from({length: 9}).map((_, i) => (
              <line key={i} x1={60 + (i+1)*40} y1="40" x2={60 + (i+1)*40} y2="340" stroke="#f5f5f4" strokeWidth="1" strokeDasharray="4 4" />
            ))}
            {Array.from({length: 9}).map((_, i) => (
              <line key={i} x1="60" y1={340 - (i+1)*30} x2="460" y2={340 - (i+1)*30} stroke="#f5f5f4" strokeWidth="1" strokeDasharray="4 4" />
            ))}

            {/* Render Curves */}
            {curves.map((c) => {
              const isHovered = hoveredCurve === c.id;
              const hasAnyHover = hoveredCurve !== null;
              return (
                <polyline
                  key={c.id}
                  points={c.points}
                  fill="none"
                  stroke={c.color}
                  strokeWidth={isHovered ? 5 : hasAnyHover ? 1.5 : 3.5}
                  strokeOpacity={isHovered ? 1 : hasAnyHover ? 0.35 : 0.9}
                  className="transition-all duration-200 ease-out cursor-pointer"
                  onMouseEnter={() => setHoveredCurve(c.id)}
                  onMouseLeave={() => setHoveredCurve(null)}
                />
              );
            })}

            {/* Labels overlay at ends of curves */}
            {curves.map((c) => {
              const pts = c.points.split(" ");
              const lastPt = pts[pts.length - 1].split(",");
              const lx = parseFloat(lastPt[0]);
              const ly = parseFloat(lastPt[1]);
              const isHovered = hoveredCurve === c.id;
              if (ly > 40 && ly < 335) {
                return (
                  <text
                    key={c.id}
                    x={lx + 6}
                    y={ly + 3}
                    style={{ fill: c.color, fontSize: isHovered ? "11px" : "9px", fontWeight: isHovered ? "bold" : "normal" }}
                    className="transition-all select-none pointer-events-none"
                  >
                    {c.id === "onfact" ? "O(n!)" : c.id === "o2n" ? "O(2ⁿ)" : c.id === "on2" ? "O(n²)" : c.name.split(" ")[0]}
                  </text>
                );
              }
              return null;
            })}
          </svg>
        </div>

        {/* Info Box */}
        <div className="w-full md:w-64 flex flex-col justify-between p-4 bg-white border border-stone-200 rounded-xl shadow-inner min-h-[220px]">
          {hoveredCurve ? (
            (() => {
              const current = curves.find((c) => c.id === hoveredCurve);
              return (
                <div className="space-y-3 animate-in fade-in duration-205">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: current.color }} />
                    <h4 className="font-extrabold text-sm text-stone-900">{current.name}</h4>
                  </div>
                  <div className="text-[10px] bg-stone-100 px-2.5 py-1 rounded font-mono text-stone-700 inline-block font-bold">
                    Công thức: {current.equation}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    <strong>Mô tả:</strong> {current.desc}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed border-t border-stone-150 pt-2">
                    <strong>Ví dụ:</strong> {current.example}
                  </p>
                </div>
              );
            })()
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full py-8 text-stone-400 space-y-2">
              <span className="text-3xl animate-bounce">🖱️</span>
              <p className="text-[11px] font-semibold max-w-[180px] leading-relaxed">
                Di chuột hoặc chạm vào các đường biểu diễn để xem phân tích chi tiết!
              </p>
            </div>
          )}
          <div className="mt-4 pt-2 border-t border-stone-150 text-[10px] text-stone-400 font-medium italic text-center leading-normal">
            * Các đường O(2ⁿ), O(n!) được vẽ thu nhỏ tỉ lệ để hiển thị trọn vẹn trong biểu đồ.
          </div>
        </div>
      </div>
    </div>
  );
}

function BigOSimulator() {
  const [v, setV] = useState(3); // Logarithmic slider from 1 to 6 (N from 10 to 1,000,000)

  const N = Math.round(Math.pow(10, v));

  const formatNumber = (num) => {
    return new Intl.NumberFormat("vi-VN").format(num);
  };

  const getLog2 = (num) => {
    return Math.round(Math.log2(num));
  };

  const getNLogN = (num) => {
    return Math.round(num * Math.log2(num));
  };

  const getNLabel = (val) => {
    if (val === 10) return "10 phần tử";
    if (val === 100) return "100 phần tử";
    if (val === 1000) return "1.000 (Một nghìn)";
    if (val === 10000) return "10.000 (Mười nghìn)";
    if (val === 100000) return "100.000 (Trăm nghìn)";
    if (val === 1000000) return "1.000.000 (1 Triệu)";
    return formatNumber(val);
  };

  const cards = [
    {
      label: "O(1)",
      name: "Hằng số",
      calc: () => 1,
      badge: "Mượt mà ✔",
      badgeColor: "bg-green-100 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800",
      desc: "Truy cập trực tiếp, không phụ thuộc vào N."
    },
    {
      label: "O(log n)",
      name: "Logarit",
      calc: (n) => getLog2(n),
      badge: "Mượt mà ✔",
      badgeColor: "bg-green-100 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800",
      desc: "Tìm kiếm nhị phân chia đôi mỗi bước."
    },
    {
      label: "O(n)",
      name: "Tuyến tính",
      calc: (n) => n,
      badge: N <= 10000 ? "Mượt mà ✔" : "Tốt ⚡",
      badgeColor: N <= 10000 
        ? "bg-green-100 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800"
        : "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-800",
      desc: "Duyệt qua danh sách 1 vòng lặp."
    },
    {
      label: "O(n log n)",
      name: "Tuyến tính Logarit",
      calc: (n) => getNLogN(n),
      badge: N <= 1000 ? "Tốt ⚡" : N <= 10000 ? "Hơi chậm ⏳" : "Quá tải ⚠️",
      badgeColor: N <= 1000
        ? "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-800"
        : N <= 10000
        ? "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-450 dark:border-yellow-800"
        : "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800",
      desc: "Merge/Quick Sort chia và gộp dữ liệu."
    },
    {
      label: "O(n²)",
      name: "Bậc hai",
      calc: (n) => n * n,
      badge: N <= 100 ? "Bình thường ◓" : N <= 1000 ? "Trễ nặng ⏳" : "Treo máy/☠",
      badgeColor: N <= 100
        ? "bg-yellow-105 text-yellow-750 border-yellow-250 dark:bg-yellow-950/40 dark:text-yellow-400 dark:border-yellow-800"
        : N <= 1000
        ? "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800"
        : "bg-red-100 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800",
      desc: "Hai vòng lặp lồng nhau (như Bubble Sort)."
    }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-6 shadow-sm">
      {/* Slider Dashboard */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 mb-6 shadow-inner flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 w-full space-y-3">
          <div className="flex justify-between items-baseline">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wide">Kích thước đầu vào (N)</span>
            <span className="text-xl font-extrabold text-accent font-mono">{getNLabel(N)}</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={v}
            onChange={(e) => setV(parseInt(e.target.value))}
            className="w-full accent-accent h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-400 font-bold font-mono">
            <span>10</span>
            <span>100</span>
            <span>1K</span>
            <span>10K</span>
            <span>100K</span>
            <span>1M</span>
          </div>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((card, idx) => {
          const ops = card.calc(N);
          return (
            <div 
              key={idx}
              className="bg-white border border-stone-200 hover:border-accent/40 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 min-w-[140px]"
            >
              <div>
                <div className="flex justify-between items-center gap-2 mb-2">
                  <span className="font-extrabold text-stone-900 font-mono text-sm whitespace-nowrap">{card.label}</span>
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full border whitespace-nowrap ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>
                <div className="text-[10px] text-stone-450 font-bold uppercase tracking-wider mb-3">
                  {card.name}
                </div>
                <p className="text-[10px] text-stone-500 leading-relaxed min-h-[40px]">
                  {card.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 mt-3">
                <div className="text-[9px] text-stone-400 font-bold uppercase tracking-wide whitespace-nowrap">Số phép tính</div>
                <div className="text-sm font-black text-stone-850 font-mono mt-0.5 truncate" title={formatNumber(ops)}>
                  {formatNumber(ops)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BigOCodeTabs({ block, activeLang, setActiveLang }) {
  const codeContent = block[activeLang] || "";

  return (
    <div className="code-block my-5 rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#2d2d2d] text-[#d4d4d4] shadow-md">
      {/* Code Tab Header */}
      <div className="code-block__header px-4 py-2 bg-[#252526] border-b border-[#2d2d2d] text-xs font-mono text-[#858585] flex justify-between items-center select-none">
        <div className="flex gap-2">
          {["java", "python", "c"].map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-bold capitalize ${
                activeLang === lang
                  ? "bg-accent text-white shadow-sm"
                  : "hover:text-[#d4d4d4] text-[#858585]"
              }`}
            >
              {lang === "c" ? "C" : lang}
            </button>
          ))}
        </div>
        <span className="opacity-60 uppercase font-extrabold text-[9px] tracking-wider bg-stone-800 px-2 py-0.5 rounded text-white">
          {activeLang === "c" ? "C" : activeLang}
        </span>
      </div>
      {/* Code content */}
      <pre className="code-block__pre p-4 whitespace-pre-wrap break-words text-xs md:text-sm font-mono leading-relaxed select-text bg-[#1e1e1e]">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(codeContent, activeLang) }} />
      </pre>
    </div>
  );
}

function PassByRefCodeTabs() {
  const [lang, setLang] = useState("java");

  const codes = {
    c: {
      title: "C (Con trỏ - Pass by Value of Pointer)",
      code: `// C KHÔNG có Pass by Reference. Muốn sửa biến gốc -> truyền CON TRỎ.
// Đây là 'Pass by Value of Pointer' - vẫn là Value về mặt kỹ thuật.
#include <stdio.h>

void tangLen_value(int x) {
    x++; // x là bản sao, biến gốc ngoài hàm không đổi
}

void tangLen_pointer(int* px) {
    (*px)++; // px là bản sao địa chỉ, nhưng *px sửa được vùng nhớ gốc
}

int main() {
    int a = 10;
    tangLen_value(a);   // a vẫn = 10
    tangLen_pointer(&a); // a tăng lên 11
}`,
      desc: "Trong C, cách duy nhất để thay đổi biến ngoài hàm là truyền con trỏ. Bản chất con trỏ khi truyền vào hàm vẫn được nhân bản (copy giá trị địa chỉ), do đó C chỉ có <b>Pass by Value</b>."
    },
    cpp: {
      title: "C++ (Pass by Reference THỰC SỰ)",
      code: `// C++ có Pass by Reference thực sự qua ký hiệu & - không truyền địa chỉ, không dùng *.
// Compiler tự lo phần địa chỉ. Lập trình viên dùng x như biến bình thường.
#include <iostream>

void tangLen_val(int x) {
    x++; // x là bản sao
}

void tangLen_ref(int& x) {
    x++; // x là ALIAS của biến truyền vào - không sao chép
}

int main() {
    int a = 10;
    tangLen_val(a); // a vẫn = 10
    tangLen_ref(a); // a tăng lên 11 (Cú pháp giống hệt gọi val)
}`,
      desc: "C++ hỗ trợ tham chiếu thực sự qua ký hiệu <code>&amp;</code>. Tham chiếu này hoạt động như một bí danh (alias) trỏ trực tiếp vào cùng vùng nhớ của biến truyền vào, không tạo ra bản sao."
    },
    java: {
      title: "Java (100% Pass by Value)",
      code: `// Java 100% Pass by Value. Với Object, bản copy được truyền là 'reference value' (địa chỉ).
public class Main {
    // Primitive: copy trị số
    static void tangLen(int x) {
        x++; // Không ảnh hưởng biến gốc
    }

    // Object: copy trị địa chỉ
    static void themPhanTu(int[] arr) {
        arr[0] = 99; // Hợp lệ - sửa vùng nhớ chung của mảng
    }

    static void resetArr(int[] arr) {
        arr = new int[]{0, 0, 0}; // Vô ích - trỏ tham chiếu bản sao đi nơi khác
    }

    public static void main(String[] args) {
        int a = 10;
        tangLen(a); // a vẫn = 10

        int[] nums = {1, 2, 3};
        themPhanTu(nums); // nums[0] trở thành 99
        resetArr(nums);   // nums vẫn là {99, 2, 3} (Không bị reset)
    }
}`,
      desc: "Java sao chép giá trị của tham chiếu (reference value) khi truyền đối tượng. Hàm có thể thay đổi nội dung bên trong đối tượng, nhưng việc gán lại đối tượng mới cho tham số cục bộ hoàn toàn không ảnh hưởng ra bên ngoài."
    },
    python: {
      title: "Python (Pass by Object Reference)",
      code: `# Python truyền tham chiếu đối tượng (Pass by Object Reference) cho TẤT CẢ kiểu dữ liệu.
# Khác biệt dựa trên kiểu Immutable (bất biến) vs Mutable (khả biến).

# int là Immutable (bất biến) -> trông như Pass by Value
def tang_len(x):
    x += 1 # Tạo một đối tượng số 11 mới và cho x trỏ vào đó
    # Biến a ngoài hàm vẫn trỏ đến đối tượng 10 cũ

# list là Mutable (khả biến) -> trông như Pass by Reference
def them_phan_tu(lst):
    lst.append(99) # Sửa trực tiếp trên đối tượng list gốc đang trỏ chung

def reset_list(lst):
    lst = [] # Vô ích - cho lst trỏ sang một list rỗng mới
    # list gốc bên ngoài vẫn nguyên vẹn

a = 10
tang_len(a) # a vẫn = 10

mang = [1, 2, 3]
them_phan_tu(mang) # mang trở thành [1, 2, 3, 99]
reset_list(mang)   # mang vẫn là [1, 2, 3, 99]`,
      desc: "Python sử dụng cơ chế gán nhãn (binding). Đối với kiểu bất biến (int, str), thay đổi giá trị sẽ tạo ra đối tượng mới (trông giống Pass by Value). Đối với kiểu khả biến (list, dict), ta sửa được nội dung đối tượng gốc (trông giống Pass by Reference)."
    }
  };

  const current = codes[lang];

  return (
    <div className="code-block my-5 rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#2d2d2d] text-[#d4d4d4] shadow-md font-sans">
      {/* Tab Header */}
      <div className="code-block__header px-4 py-2.5 bg-[#252526] border-b border-[#2d2d2d] text-xs font-mono text-[#858585] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 select-none">
        <div className="flex gap-2 flex-wrap">
          {Object.keys(codes).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-bold text-xs uppercase ${
                lang === l
                  ? "bg-accent text-white shadow-sm"
                  : "hover:text-[#d4d4d4] text-[#858585]"
              }`}
            >
              {l === "cpp" ? "C++" : l}
            </button>
          ))}
        </div>
        <span className="opacity-70 font-extrabold text-[9px] tracking-wider bg-stone-800 px-2 py-0.5 rounded text-amber-400 uppercase">
          {current.title}
        </span>
      </div>

      {/* Code Area */}
      <pre className="code-block__pre p-4 whitespace-pre break-words text-xs md:text-sm font-mono leading-relaxed select-text bg-[#1e1e1e] overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(current.code, lang === "cpp" ? "c" : lang) }} />
      </pre>

      {/* Analysis Footer */}
      <div className="px-4 py-3 bg-[#181818] border-t border-[#2d2d2d] text-xs text-stone-400 leading-relaxed font-sans">
        <strong className="text-stone-300">Bản chất:</strong> <span dangerouslySetInnerHTML={{ __html: current.desc }} />
      </div>
    </div>
  );
}

