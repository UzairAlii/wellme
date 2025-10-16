import React from 'react'

const PreFooter = ({
  title = "READY TO JOIN US?",
  description = "Whether you’re a partner or a restaurant operator, WellMe makes it easy to get started.",
  leftBtnText = "Apply as a Partner",
  rightBtnText = "Bring WellMe to Your Team",
  onLeftClick,
  onRightClick
}) => {
  return (
    <div className="w-full flex items-center justify-center py-10 px-5">
      <div className="bg-[#c6d1ed]/50 rounded-[24px] w-full mx-auto flex flex-col items-center justify-center py-12 px-4 shadow">
        <h2 className="text-2xl md:text-4xl font-bold text-[#3c1d00] text-center mb-4 tracking-wide mac">{title}</h2>
        <p className="text-sm md:text-lg text-[#3c1d00] text-center mb-8">{description}</p>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="bg-[#b0bfe6] px-6 py-3 rounded-full font-semibold text-[#3c1d00] shadow hover:bg-[#b3c3e6] transition"
            onClick={onLeftClick}
          >
            {leftBtnText}
          </button>
          <button
            className="bg-transparent border border-[#3c1d00] px-6 py-3 rounded-full font-semibold text-[#3c1d00] shadow hover:bg-[#f7f6f3] transition"
            onClick={onRightClick}
          >
            {rightBtnText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PreFooter