import React, { useState } from 'react';
import { X, MessageCircle, Mail, Send } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {

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
            <a
              href="mailto:virtualtours@codeket.com"
              className="btn btn-info btn-lg px-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              virtualtours@codeket.com
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default BookingModal;
