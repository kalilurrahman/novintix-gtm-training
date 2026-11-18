'use client'

import { useState } from 'react'
import { trainingModules, TrainingModule } from '@/data/training-modules'
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  HelpCircle,
  FileText,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Target,
} from 'lucide-react'

export default function TrainingPortal() {
  const [activeModuleId, setActiveModuleId] = useState<string>(trainingModules[0].id)
  const [activeTab, setActiveTab] = useState<'study' | 'drill' | 'quiz'>('study')

  // Drill exercise state
  const [userSubmission, setUserSubmission] = useState<{ [moduleId: string]: string }>({})
  const [evaluatedModules, setEvaluatedModules] = useState<{ [moduleId: string]: boolean }>({})
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false)

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionKey: string]: number }>({})
  const [quizSubmitted, setQuizSubmitted] = useState<{ [moduleId: string]: boolean }>({})

  const activeModule = trainingModules.find((m) => m.id === activeModuleId) || trainingModules[0]

  const handleCopyTemplate = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedTemplate(true)
    setTimeout(() => setCopiedTemplate(false), 2000)
  }

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    if (quizSubmitted[activeModule.id]) return
    setSelectedAnswers((prev) => ({
      ...prev,
      [`${activeModule.id}-${qIndex}`]: optionIndex,
    }))
  }

  const handleSubmitQuiz = () => {
    setQuizSubmitted((prev) => ({ ...prev, [activeModule.id]: true }))
  }

  const handleResetQuiz = () => {
    setQuizSubmitted((prev) => ({ ...prev, [activeModule.id]: false }))
    setSelectedAnswers((prev) => {
      const next = { ...prev }
      activeModule.quiz.forEach((_, idx) => {
        delete next[`${activeModule.id}-${idx}`]
      })
      return next
    })
  }

  // Calculate score for active module
  const calculateScore = () => {
    let correct = 0
    activeModule.quiz.forEach((q, idx) => {
      if (selectedAnswers[`${activeModule.id}-${idx}`] === q.correctIndex) {
        correct++
      }
    })
    return {
      correct,
      total: activeModule.quiz.length,
      percentage: Math.round((correct / activeModule.quiz.length) * 100),
    }
  }

  return (
    <div className="space-y-10">
      {/* Module Selector Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trainingModules.map((mod) => {
          const isSelected = mod.id === activeModuleId
          const isDone = quizSubmitted[mod.id] && evaluatedModules[mod.id]
          return (
            <button
              key={mod.id}
              onClick={() => {
                setActiveModuleId(mod.id)
                setActiveTab('study')
              }}
              className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#0A1B2E] text-white border-[#00B8A9] shadow-xl ring-2 ring-[#00B8A9]/50'
                  : 'bg-white text-[#0A1B2E] border-[#E8EDF2] hover:border-[#00B8A9]/50 hover:shadow-md'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#00B8A9] text-white' : 'bg-gray-100 text-[#0A1B2E]'
                    }`}
                  >
                    MODULE {mod.number}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{mod.duration}</span>
                  </div>
                </div>

                <h3
                  className={`font-display font-bold text-sm leading-snug line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-[#0A1B2E]'
                  }`}
                >
                  {mod.title}
                </h3>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-3 text-xs">
                <span className="text-[#2BD9C8] font-mono text-[11px]">{mod.difficulty}</span>
                {isDone ? (
                  <span className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Complete
                  </span>
                ) : (
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    Start module <ChevronRight className="w-3 h-3" />
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Active Module Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0A1B2E] to-[#122840] text-white border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#00B8A9]/20 text-[#2BD9C8] text-xs font-mono font-semibold">
              MODULE {activeModule.number} // {activeModule.difficulty}
            </span>
            <span className="text-xs text-gray-400 font-mono">• {activeModule.duration}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
            <Target className="w-3.5 h-3.5 text-[#00B8A9]" />
            <span>Audience: {activeModule.targetAudience}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
            {activeModule.title}
          </h2>
          <p className="text-[#2BD9C8] font-medium text-base sm:text-lg">
            {activeModule.subtitle}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed max-w-4xl pt-2">
            {activeModule.summary}
          </p>
        </div>

        {/* Learning Objectives Pills */}
        <div className="pt-4 border-t border-white/10 space-y-2">
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
            Learning Objectives:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {activeModule.learningObjectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#00B8A9] flex-shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="pt-4 flex border-b border-white/10 gap-2">
          <button
            onClick={() => setActiveTab('study')}
            className={`pb-3 px-4 font-display font-semibold text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'study'
                ? 'border-[#00B8A9] text-[#2BD9C8]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Core Knowledge & Frameworks</span>
          </button>

          <button
            onClick={() => setActiveTab('drill')}
            className={`pb-3 px-4 font-display font-semibold text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'drill'
                ? 'border-[#00B8A9] text-[#2BD9C8]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>2. Practical Simulation & Rubric</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`pb-3 px-4 font-display font-semibold text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'quiz'
                ? 'border-[#00B8A9] text-[#2BD9C8]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>3. Knowledge Check & Quiz</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Core Knowledge & Frameworks */}
      {activeTab === 'study' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeModule.keyFrameworks.map((fw, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E8EDF2] shadow-sm space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#00B8A9]/10 text-[#00B8A9] text-xs font-mono font-bold">
                    FRAMEWORK {idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                    {fw.name}
                  </h3>
                  <p className="text-sm text-[#6B7A8C] leading-relaxed">
                    {fw.summary}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F7F9FB] border border-[#E8EDF2] space-y-3">
                  <div className="text-xs font-mono text-[#0A1B2E] font-bold uppercase tracking-wider">
                    Execution Rules & Principles:
                  </div>
                  <ul className="space-y-2.5">
                    {fw.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-[#0A1B2E] flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B8A9] mt-1.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#00B8A9]/10 border border-[#00B8A9]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#00B8A9] flex-shrink-0" />
              <div>
                <div className="font-display font-bold text-base text-[#0A1B2E]">
                  Ready to test your execution skills?
                </div>
                <div className="text-xs text-[#6B7A8C]">
                  Move to the interactive simulation drill and apply these frameworks to a real prospect scenario.
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('drill')}
              className="px-5 py-2.5 rounded-xl bg-[#00B8A9] text-white font-semibold text-xs hover:bg-[#009e91] transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Launch Exercise Drill</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Practical Simulation & Rubric */}
      {activeTab === 'drill' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Scenario and Task (Left Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-[#E8EDF2] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00B8A9] font-bold uppercase">
                  <Target className="w-4 h-4" />
                  <span>Real-World Scenario</span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#0A1B2E]">
                  {activeModule.interactiveExercise.title}
                </h3>
                <div className="p-4 rounded-xl bg-[#F7F9FB] border border-[#E8EDF2] text-xs text-[#0A1B2E] leading-relaxed italic">
                  &ldquo;{activeModule.interactiveExercise.scenario}&rdquo;
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono font-bold text-[#0A1B2E] uppercase">
                    Your Deliverable Instructions:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#6B7A8C]">
                    {activeModule.interactiveExercise.taskInstructions.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00B8A9] font-bold">{i + 1}.</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Rubric Evaluation Criteria */}
              <div className="p-6 rounded-3xl bg-white border border-[#E8EDF2] space-y-3">
                <div className="text-xs font-mono text-gray-500 font-bold uppercase">
                  Grading Rubric & Standards
                </div>
                <div className="space-y-2">
                  {activeModule.interactiveExercise.rubricCriteria.map((r, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E8EDF2] flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-semibold text-[#0A1B2E]">{r.criteria}</div>
                        <div className="text-[11px] text-[#6B7A8C]">{r.standard}</div>
                      </div>
                      <span className="font-mono font-bold text-[#00B8A9]">{r.weight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Workspace (Right Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-[#E8EDF2] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-display font-bold text-lg text-[#0A1B2E]">
                    Your Response Workspace
                  </div>
                  <button
                    onClick={() =>
                      handleCopyTemplate(activeModule.interactiveExercise.deliverableTemplate)
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00B8A9] hover:underline"
                  >
                    {copiedTemplate ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied Template!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Model Template</span>
                      </>
                    )}
                  </button>
                </div>

                <textarea
                  rows={10}
                  value={
                    userSubmission[activeModule.id] ||
                    activeModule.interactiveExercise.deliverableTemplate
                  }
                  onChange={(e) =>
                    setUserSubmission((prev) => ({
                      ...prev,
                      [activeModule.id]: e.target.value,
                    }))
                  }
                  className="w-full p-4 rounded-xl border border-[#E8EDF2] focus:border-[#00B8A9] focus:ring-1 focus:ring-[#00B8A9] font-mono text-xs text-[#0A1B2E] leading-relaxed bg-[#F7F9FB] outline-none"
                  placeholder="Draft your executive response or solution architecture here..."
                />

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-[#6B7A8C]">
                    Submit your response to self-evaluate against the MedTech standard rubric.
                  </div>
                  <button
                    onClick={() =>
                      setEvaluatedModules((prev) => ({ ...prev, [activeModule.id]: true }))
                    }
                    className="px-6 py-2.5 rounded-xl bg-[#0A1B2E] text-white hover:bg-[#122840] font-semibold text-xs transition-colors flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#00B8A9]" />
                    <span>Evaluate Response</span>
                  </button>
                </div>

                {/* Evaluation Feedback Box */}
                {evaluatedModules[activeModule.id] && (
                  <div className="mt-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                    <div className="flex items-center gap-2 font-display font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Self-Assessment Checklist Passed</span>
                    </div>
                    <p className="text-xs leading-relaxed text-emerald-800">
                      Great work! Your response addresses both the immediate acute risk (the 60-day audit deadline) and establishes NovintiX as the single lifecycle partner without vendor conflict.
                    </p>
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => setActiveTab('quiz')}
                        className="px-4 py-2 rounded-lg bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 transition-colors"
                      >
                        Proceed to Knowledge Quiz →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Knowledge Check & Quiz */}
      {activeTab === 'quiz' && (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-white border border-[#E8EDF2] space-y-8">
            <div className="flex items-center justify-between border-b border-[#E8EDF2] pb-4">
              <div>
                <h3 className="font-display font-bold text-2xl text-[#0A1B2E]">
                  Knowledge Check & Mastery Verification
                </h3>
                <p className="text-xs text-[#6B7A8C] pt-1">
                  Answer the scenario questions to earn module certification.
                </p>
              </div>

              {quizSubmitted[activeModule.id] && (
                <div className="text-right">
                  <div className="font-display font-bold text-2xl text-[#00B8A9]">
                    {calculateScore().percentage}%
                  </div>
                  <div className="text-xs text-[#6B7A8C]">
                    {calculateScore().correct} of {calculateScore().total} Correct
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              {activeModule.quiz.map((q, qIdx) => {
                const questionKey = `${activeModule.id}-${qIdx}`
                const selectedOption = selectedAnswers[questionKey]
                const isSubmitted = quizSubmitted[activeModule.id]
                const isCorrect = selectedOption === q.correctIndex

                return (
                  <div key={qIdx} className="space-y-3">
                    <div className="font-semibold text-sm text-[#0A1B2E] flex items-start gap-2">
                      <span className="font-mono text-[#00B8A9] font-bold">Q{qIdx + 1}.</span>
                      <span>{q.question}</span>
                    </div>

                    <div className="space-y-2 pt-1">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle =
                          'border-[#E8EDF2] bg-[#F7F9FB] text-[#0A1B2E] hover:border-[#00B8A9]'

                        if (selectedOption === optIdx) {
                          btnStyle =
                            'border-[#00B8A9] bg-[#00B8A9]/10 text-[#0A1B2E] font-medium ring-1 ring-[#00B8A9]'
                        }

                        if (isSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold'
                          } else if (selectedOption === optIdx && !isCorrect) {
                            btnStyle = 'border-red-400 bg-red-50 text-red-900 line-through'
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isSubmitted}
                            onClick={() => handleSelectAnswer(qIdx, optIdx)}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            )}
                          </button>
                        )
                      })}
                    </div>

                    {isSubmitted && (
                      <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-[#6B7A8C] leading-relaxed">
                        <strong className="text-[#0A1B2E]">Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="pt-6 border-t border-[#E8EDF2] flex items-center justify-between">
              {quizSubmitted[activeModule.id] ? (
                <button
                  onClick={handleResetQuiz}
                  className="px-5 py-2.5 rounded-xl border border-[#E8EDF2] text-[#0A1B2E] hover:bg-gray-50 font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-8 py-3 rounded-xl bg-[#00B8A9] text-white hover:bg-[#009e91] font-semibold text-xs transition-all shadow-md flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Submit Quiz & View Results</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
