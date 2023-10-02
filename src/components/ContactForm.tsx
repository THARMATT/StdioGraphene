import React, { useState, useEffect } from 'react';

const ContactForm: React.FC = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    // Clear the form data
    setFormData(initialFormData);
  };

  useEffect(() => {
    const magneticButton = document.getElementById('magnetic-button') as HTMLButtonElement;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const buttonRect = magneticButton.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      const deltaX = mouseX - buttonCenterX;
      const deltaY = mouseY - buttonCenterY;

      magneticButton.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseLeave = () => {
      magneticButton.style.transform = 'translate(0, 0)';
    };

    if (magneticButton) {
      magneticButton.addEventListener('mousemove', handleMouseMove);
      magneticButton.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      // Clean up event listeners when the component unmounts
      if (magneticButton) {
        magneticButton.removeEventListener('mousemove', handleMouseMove);
        magneticButton.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder='Name'
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="underline-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className="underline-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            id="message"
            placeholder='Message'
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="underline-input"
            
            required
          ></input>
        </div>

        <button type="submit" className="submit-button" id="magnetic-button">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
