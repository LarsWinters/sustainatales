import React, {useState} from 'react';
import styles from './MainPage.module.css';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const MainPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'My Journey with Sustainable Living',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: 'April 8, 2023',
    },
    {
      id: 2,
      title: 'How Climate Change Impacted My Hometown',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      date: 'April 7, 2023',
    },
  ];

  // Modal state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Modal open handlers
  const openLoginModal = () => setShowLoginModal(true);
  const openRegisterModal = () => setShowRegisterModal(true);

  // Modal close handlers
  const closeLoginModal = () => setShowLoginModal(false);
  const closeRegisterModal = () => setShowRegisterModal(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.zone}>
            {/* Left zone content */}
          </div>
          <div className={styles.zone}>
            <h1 className={styles.title} style={{fontSize: 28}}>EcoStoryTales</h1>
          </div>
          <div className={styles.zone}>
            <div className={styles.login}>
              <button className={styles.loginButton} onClick={openLoginModal}>
                <i className="fas fa-user"></i> Login
              </button>
              <button className={styles.loginButton} onClick={openRegisterModal}>
                <i className="fas fa-user"></i> Register
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {posts.map((post) => (
          <article key={post.id} className={styles.postCard}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <small className={styles.postDate}>{post.date}</small>
            <p className={styles.postContent}>{post.content}</p>
          </article>
        ))}
      </main>
      <LoginModal isOpen={showLoginModal} onRequestClose={closeLoginModal} />
      <RegisterModal isOpen={showRegisterModal} onRequestClose={closeRegisterModal} />
    </div>
  );
}
export default MainPage;
