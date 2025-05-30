'use client';
import React, { useState } from "react";

const WhatsAppPopupWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });
  type Errors = {
    name?: string;
    subject?: string;
    email?: string;
    message?: string;
  };
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Replace with your company's WhatsApp number (include country code without +)
  const COMPANY_WHATSAPP_NUMBER = "923422630693"; // Example: "923001234567" for Pakistan

  const validateForm = () => {
    const newErrors: Errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  interface FormEventWithPreventDefault extends React.FormEvent<HTMLButtonElement> {
    preventDefault(): void;
  }

  interface WhatsAppFormData {
    name: string;
    email: string;
    message: string;
  }

  const handleSubmit = (e: FormEventWithPreventDefault) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Format WhatsApp message
    const whatsappMessage = `
    Subject: ${formData.subject ? formData.subject : 'MakTech Client Support'}

    Hello! I'm ${formData.name} and I'd like to get in touch.
    
  📧 Email: ${formData.email}
  💬 Message: ${formData.message}

Please get back to me when convenient. Thank you!`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success state
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', subject: '' ,email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-40 flex items-center justify-center transition duration-300 bg-[#25D366] rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-[#25964f] focus:bg-[#1c6d3a] ease"
      >
        <span className="sr-only">Open WhatsApp Contact Widget</span>
        
        {!isOpen ? (
          // WhatsApp Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-white transform transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
          </svg>
        ) : (
          // Close Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white transform transition-transform duration-200"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto">
          <div className="flex flex-col overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
            {/* Header */}
            <div className="flex flex-col items-center justify-center h-32 p-5 bg-[#25D366]">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
                </svg>
                <h3 className="text-lg text-white">Contact us on WhatsApp</h3>
              </div>
              <p className="text-white opacity-80 text-sm">
                Send us a message and we will get back to you soon!
              </p>
            </div>

            {/* Content */}
            <div className="flex-grow h-full p-6 overflow-auto bg-gray-50">
              {!isSubmitted ? (
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border rounded-md focus:outline-none focus:ring ${
                        errors.name
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-gray-300 focus:border-[#25D366] ring-green-100"
                      }`}
                    />
                    {errors.name && (
                      <div className="mt-1 text-sm text-red-400">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border rounded-md focus:outline-none focus:ring ${
                        errors.email
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-gray-300 focus:border-[#25D366] ring-green-100"
                      }`}
                    />
                    {errors.email && (
                      <div className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border rounded-md h-28 focus:outline-none focus:ring ${
                        errors.message
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-gray-300 focus:border-[#25D366] ring-green-100"
                      }`}
                    />
                    {errors.message && (
                      <div className="mt-1 text-sm text-red-400">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <button
                      onClick={handleSubmit}
                      className="w-full px-3 py-4 text-white bg-[#25D366] hover:bg-[#25964f] rounded-md focus:bg-[#1c6d39] focus:outline-none transition-colors duration-200"
                    >
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-2"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
                        </svg>
                        Send via WhatsApp
                      </div>
                    </button>
                  </div>

                  <p className="text-xs text-center text-gray-400">
                    Powered by WhatsApp Business
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg
                    width="60"
                    height="60"
                    className="text-green-400 mb-4"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                  <h3 className="py-5 text-xl text-green-500">
                    Opening WhatsApp...
                  </h3>
                  <p className="text-gray-700 md:px-3 mb-4">
                    Your message has been prepared and WhatsApp should open shortly!
                  </p>
                  <button
                    className="text-[#25D366] hover:text-[#128C7E] focus:outline-none"
                    onClick={resetForm}
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WhatsAppPopupWidget;