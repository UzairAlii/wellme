import { useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const dataToSend = new FormData();
    dataToSend.append('access_key', '70312992-3923-47d0-8896-00de55047477');
    dataToSend.append('name', formData.name);
    dataToSend.append('email', formData.email);
    dataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: dataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setToastMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setToastMessage('Submission failed: ' + data.message);
      }
    } catch (error) {
      setToastMessage('An error occurred. Please try again.');
      console.log('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  const hasLeft = Boolean(leftBtnText);
  const hasRight = Boolean(rightBtnText);
  const twoButtons = hasLeft && hasRight;

  return (
    <div className="relative w-full flex items-center justify-center py-5 px-3 md:px-0">
      <div className="bg-[#c6d1ed]/40 rounded-[24px] w-[98%] mx-auto flex flex-col items-center justify-center py-28 px-4 shadow">
        <h2
          className="text-2xl lg:text-5xl font-bold text-[#3c1d00] text-center mb-4 tracking-wide mac"
          style={{ width: titleWidth || '50%' }}
        >
          {title}
        </h2>
        <p className="text-sm lg:text-xl text-[#3c1d00] text-center mb-8 w-full md:w-[40%] openSauceMedium">
          {description}
        </p>

        {location.pathname !== "/About" ? (
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
                className="px-10 py-3 cursor-pointer rounded-full openSauceBold text-[#3c1d00] shadow hover:opacity-90 transition text-sm lg:text-md"
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
                className="px-10 py-3 cursor-pointer rounded-full openSauceBold text-[#111] shadow hover:opacity-90 transition text-sm lg:text-md"
                onClick={onRightClick}
                type="button"
              >
                {rightBtnText}
              </button>
            )}
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="gap-8 w-full md:w-1/2 flex items-center justify-center flex-col p-8 rounded-2xl shadow-lg bg-white/20"
          >
            <div className="flex md:flex-row flex-col items-center justify-center gap-6 w-full">
              <div className="flex flex-col w-full gap-4">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-[1px] focus:ring-black transition ${
                    errors.name ? "border-red-500" : "border-[#00000098] openSauceMedium"
                  }`}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm -mt-2">{errors.name}</p>}
              </div>

              <div className="flex flex-col w-full gap-4">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-[1px] focus:ring-black transition ${
                    errors.email ? "border-red-500" : "border-[#00000098] openSauceMedium"
                  }`}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm -mt-2">{errors.email}</p>}
              </div>
            </div>

            <div className="w-full mt-4">
              <motion.textarea
                name="message"
                placeholder="Message"
                rows="5"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-[1px] focus:ring-black transition resize-none ${
                  errors.message ? "border-red-500" : "border-[#00000098] openSauceMedium"
                }`}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="px-12 py-3 cursor-pointer rounded-full text-black shadow-lg active:scale-95 transition-all text-sm lg:text-md w-fit self-center flex items-center justify-center gap-2 border-2 border-black openSauceMedium bg-white hover:bg-black hover:text-white"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        )}
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 bg-[#049d28] text-white px-8 py-4 rounded-full shadow-2xl z-[9999] font-bold text-center min-w-[300px]"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PreFooter;