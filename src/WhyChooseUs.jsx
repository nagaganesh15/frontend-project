import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    title: 'Play Instantly',
    description: 'No downloads or installations needed. Just click and play!',
    icon: '⚡️',
  },
  {
    title: 'Mobile-Friendly',
    description: 'Enjoy games seamlessly on your phone, tablet, or desktop.',
    icon: '📱',
  },
  {
    title: 'Leaderboards & Rewards',
    description: 'Compete with others and climb the leaderboard for prizes.',
    icon: '🏆',
  },
  {
    title: 'Free & Always Fun!',
    description: 'Our games are completely free and updated regularly.',
    icon: '🎉',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
