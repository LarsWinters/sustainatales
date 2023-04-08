import React, { useState } from 'react';
import Modal from '../templates/Modal';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Successfully registered
      onRequestClose();
    } catch (error) {
      // Handle registration errors
      const firebaseError = error as { code: string; message: string };
      console.error('Login error:', firebaseError.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} title="Register">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
