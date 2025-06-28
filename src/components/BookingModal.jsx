import React, { useState } from 'react';
import { X, MessageCircle, Mail, Send } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    // For now, we'll just log it and provide a mailto link
    console.log({ name, email, message });
    const mailtoLink = `mailto:virtualtours@codeket.com?subject=Walkthrough Inquiry from ${name}&body=${message}%0A%0AFrom: ${email}`;
    window.location.href = mailtoLink;
    onClose(); // Close modal after attempting to send email
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="modal-box bg-base-100 rounded-3xl shadow-2xl border border-base-300/20 max-w-2xl w-full p-8 relative">
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

        <div className="grid md:grid-cols-2 gap-6 mb-8">
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

          {/* Email Option */}
          <div className="bg-base-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-base-300/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <Mail className="w-12 h-12 text-blue-500 mb-4" />
            <h4 className="font-bold text-xl mb-2">Send an Email</h4>
            <p className="text-base-content/70 mb-4">
              Send us a detailed message and we'll get back to you.
            </p>
            <button
              onClick={() => document.getElementById('email_form_modal').showModal()}
              className="btn btn-info btn-lg px-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Compose Email
            </button>
          </div>
        </div>

        {/* Email Form Modal (hidden by default) */}
        <dialog id="email_form_modal" className="modal">
          <div className="modal-box bg-base-100 rounded-3xl shadow-2xl border border-base-300/20 max-w-xl w-full p-8 relative">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-base-content/60 hover:text-primary">
                <X className="w-5 h-5" />
              </button>
            </form>
            <h3 className="font-bold text-3xl mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Send Us a Message
            </h3>
            <p className="text-center text-base-content/70 mb-8">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text text-base-content/80">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full bg-base-200 border-base-300/20 focus:border-primary focus:ring-primary"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-base-content/80">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full bg-base-200 border-base-300/20 focus:border-primary focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-base-content/80">Your Message</span>
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  className="textarea textarea-bordered w-full h-32 bg-base-200 border-base-300/20 focus:border-primary focus:ring-primary"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg mt-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BookingModal;
