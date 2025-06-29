import React, { useState } from 'react';
import { X, MessageCircle, Mail, Send } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Virtual Tour Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:virtualtours@codeket.com?subject=${subject}&body=${body}`;
    onClose(); // Close modal after submission
  };


  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="modal-box bg-base-100 rounded-3xl shadow-2xl border border-base-300/20 max-w-4xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-base-content/60 hover:text-primary"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-bold text-4xl mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Book Your Walkthrough
        </h3>
        <p className="text-center text-base-content/70 mb-8">
          Choose your preferred way to connect with us.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8 relative">
          {/* WhatsApp Option */}
          <div className="bg-base-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-base-300/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <MessageCircle className="w-12 h-12 text-green-500 mb-4" />
            <h4 className="font-bold text-xl mb-2">Chat on WhatsApp</h4>
            <p className="text-base-content/70 mb-4">
              Get instant answers and discuss your project directly.
            </p>
            <a
              href="https://wa.me/2349068149540"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg px-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Chat
            </a>
          </div>

          {/* OR Separator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-px h-full bg-base-300/50 md:w-full md:h-px md:bg-base-300/50"></div>
            <span className="bg-base-100 px-4 text-base-content/50 font-bold rounded-full shadow-lg z-10">OR</span>
            <div className="w-px h-full bg-base-300/50 md:w-full md:h-px md:bg-base-300/50"></div>
          </div>

          {/* Email Form Option */}
          <div className="bg-base-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-base-300/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <Mail className="w-12 h-12 text-blue-500 mb-4" />
            <h4 className="font-bold text-xl mb-2">Send a Message</h4>
            <p className="text-base-content/70 mb-4">
              Fill out the form below and we'll get back to you shortly.
            </p>
            <form onSubmit={handleEmailSubmit} className="w-full space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full bg-base-100"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full bg-base-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full bg-base-100 h-32"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="btn btn-info btn-lg px-8 shadow-md hover:shadow-xl transition-all duration-300 w-full"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default BookingModal;
