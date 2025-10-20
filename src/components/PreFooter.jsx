
const PreFooter = ({
  title,
  titleWidth,
  description,
  leftBtnText,
  leftBtnTextColor,
  rightBtnText,
  onLeftClick,
  onRightClick,
  leftBtnColor,
  rightBtnColor,
}) => {
  const hasLeft = Boolean(leftBtnText)
  const hasRight = Boolean(rightBtnText)
  const twoButtons = hasLeft && hasRight
  const single = !twoButtons

  return (
    <div className="w-full flex items-center justify-center py-5 px-3">
      <div className="bg-[#c6d1ed]/40 rounded-[24px] w-full mx-auto flex flex-col items-center justify-center py-28 px-4 shadow">
        <h2
          className="text-2xl lg:text-5xl font-bold text-[#3c1d00] text-center mb-4 tracking-wide mac"
          style={{ width: titleWidth || '50%' }}
        >
          {title}
        </h2>
        <p className="text-sm lg:text-xl text-[#3c1d00] text-center mb-8 w-full md:w-[40%] openSauceMedium">
          {description}
        </p>

        {/* ✅ Buttons Section */}
        <div
          className={`w-full sm:w-[40%] md:w-[50%] flex items-center justify-center ${
            twoButtons ? 'flex-col md:flex-row gap-2' : 'flex-col'
          }`}
        >
          {hasLeft && (
            <button
              style={{
                backgroundColor: leftBtnColor || '#b0bfe6',
                color: leftBtnTextColor || '#111',
              }}
              className={`px-10 py-3 rounded-full openSauceBold text-[#3c1d00] shadow hover:opacity-90 transition text-sm lg:text-md`}
              onClick={onLeftClick}
              type="button"
            >
              {leftBtnText}
            </button>
          )}

          {hasRight && (
            <button
              style={{
                backgroundColor: rightBtnColor || 'transparent',
                border: rightBtnColor ? 'none' : '2px solid #111',
              }}
              className={`px-10 py-3 rounded-full openSauceBold text-[#111] shadow hover:opacity-90 transition text-sm lg:text-md`}
              onClick={onRightClick}
              type="button"
            >
              {rightBtnText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PreFooter
