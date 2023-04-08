import React, { useState } from 'react';
import Modal from '../templates/Modal';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Successfully logged in
      onRequestClose();
    } catch (error) {
      // Handle login errors
      const firebaseError = error as { code: string; message: string };
      console.error('Login error:', firebaseError.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} title="Login">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br/>
        <br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <br/>
        <button type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default LoginModal;
