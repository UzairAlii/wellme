const PreFooter = ({
  title,
  description,
  leftBtnText,
  leftBtnTextColor,
  rightBtnText,
  onLeftClick,
  onRightClick,
  leftBtnColor,     // 👈 new prop
  rightBtnColor,    // 👈 new prop
}) => {
  const hasLeft = Boolean(leftBtnText)
  const hasRight = Boolean(rightBtnText)
  const twoButtons = hasLeft && hasRight
  const single = !twoButtons

  return (
    <div className="w-full flex items-center justify-center py-10 px-3">
      <div className="bg-[#c6d1ed]/40 rounded-[24px] w-full mx-auto flex flex-col items-center justify-center py-12 px-4 shadow">
        <h2 className="text-2xl md:text-4xl font-bold text-[#3c1d00] text-center mb-4 tracking-wide mac w-full md:w-[50%]">
          {title}
        </h2>
        <p className="text-sm md:text-lg text-[#3c1d00] text-center mb-8 w-full md:w-[40%]">
          {description}
        </p>

        <div
          className={`w-full sm:w-[40%] md:w-[50%] items-center ${
            twoButtons ? 'flex flex-col md:flex-row gap-3' : 'flex items-center justify-center'
          }`}
        >
          {hasLeft && (
            <div className="w-full flex justify-center">
              <button
                style={{ backgroundColor: leftBtnColor || '#b0bfe6', color : leftBtnTextColor || "#111" }} // 👈 default ya custom color
                className={`${single ? 'w-full md:w-fit' : ''} px-6 py-3 rounded-full font-semibold text-[#3c1d00] shadow hover:opacity-90 transition text-sm`}
                onClick={onLeftClick}
                type="button"
              >
                {leftBtnText}
              </button>
            </div>
          )}

          {hasRight && (
            <div className="w-full flex justify-center">
              <button
                style={{
                  backgroundColor: rightBtnColor || 'transparent', // 👈 default ya custom color
                  border: rightBtnColor ? 'none' : '1px solid #3c1d00',
                }}
                className={`${single ? 'w-full md:w-fit' : ''} px-6 py-3 rounded-full font-semibold text-[#3c1d00] shadow hover:opacity-90 transition text-sm`}
                onClick={onRightClick}
                type="button"
              >
                {rightBtnText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PreFooter
